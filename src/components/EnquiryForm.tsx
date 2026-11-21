"use client";

import { useRef, useState, type FormEvent, type FormHTMLAttributes } from "react";
import { MAX_CV_BYTES, type EnquiryType } from "@/lib/enquiry-config";

type Props = Omit<FormHTMLAttributes<HTMLFormElement>, "onSubmit"> & {
  enquiryType: EnquiryType;
  details?: Record<string, string>;
  onSuccess?: () => void;
};

export default function EnquiryForm({ enquiryType, details, onSuccess, children, ...props }: Props) {
  const busy = useRef(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current || sent) return;
    const data = new FormData(event.currentTarget);
    const cv = data.get("cv");
    if (cv instanceof File && cv.size > MAX_CV_BYTES) {
      setError("Please choose a CV smaller than 10 MB.");
      return;
    }
    data.set("enquiryType", enquiryType);
    data.set("sourcePage", window.location.pathname);
    for (const [key, value] of Object.entries(details ?? {})) data.set(key, value);
    busy.current = true;
    setPending(true);
    setError("");
    setSent(false);
    try {
      const response = await fetch("/api/enquiries", { method: "POST", body: data });
      const result = await response.json().catch(() => null);
      if (!response.ok || result?.success !== true) {
        throw new Error(typeof result?.error === "string" ? result.error : "Your enquiry could not be sent. Please try again.");
      }
      setSent(true);
      onSuccess?.();
    } catch (cause) {
      setError(cause instanceof Error && !(cause instanceof TypeError) ? cause.message : "Unable to connect. Please check your connection and try again.");
    } finally {
      busy.current = false;
      setPending(false);
    }
  }

  return (
    <form {...props} onSubmit={submit} aria-busy={pending}>
      <div className="hidden" aria-hidden="true">
        <label>Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>
      <fieldset disabled={pending || sent} className="contents">
        {children}
      </fieldset>
      {pending && <p role="status" className="col-span-full w-full basis-full text-sm">Sending your enquiry…</p>}
      {error && <p role="alert" className="col-span-full w-full basis-full rounded border border-red-300 bg-red-50 p-3 text-sm text-red-800">{error}</p>}
      {sent && <p role="status" className="col-span-full w-full basis-full rounded border border-emerald-300 bg-emerald-50 p-3 text-sm text-emerald-900">Thank you. Your enquiry has been sent to our team.</p>}
    </form>
  );
}
