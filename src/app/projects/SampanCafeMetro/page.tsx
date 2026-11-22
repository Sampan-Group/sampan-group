import Link from "next/link";
import styles from "./CityEndFeature.module.css";

const highlights = [
  { number: "01", title: "Modern showroom", copy: "A contemporary space for your next automotive experience." },
  { number: "02", title: "Lifestyle & wellness", copy: "Café, juice bar, swimming pool and gym, brought together." },
  { number: "03", title: "Complete car care", copy: "Professional car washing for a fresh start to your journey." },
];

function Arrow() {
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h13M13 6l6 6-6 6" /></svg>;
}

export interface SampanCafeMetroFeatureProps {
  id?: string;
  badge?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export default function SampanCafeMetroFeature(props: any) {
  const {
    id,
    badge,
    eyebrow = "Automotive. Lifestyle. Hospitality.",
    title = "Sampan City End",
    subtitle = "A modern automotive lifestyle destination featuring a contemporary car showroom, café, swimming pool, gym, and professional car-wash experience, all under one roof.",
  } = (props || {}) as SampanCafeMetroFeatureProps;

  return (
    <section id={id} className={styles.feature}>
      {/* Archived Cafe Metro film: disabled following the Sampan City End rebrand.
      <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
        <source src="/videos/cafe-metro.mp4" type="video/mp4" />
      </video>
      */}
      <div className={styles.shell}>
        <div className={styles.main}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}><span aria-hidden="true" />{eyebrow}</p>
            {badge && <p className={styles.badge}>{badge}</p>}
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            <Link href="/our-divisions/real-state-and-land-investment/sampan-cafe-metro" className={styles.action}>
              Explore Sampan City End <Arrow />
            </Link>
          </div>
          <div className={styles.brandPanel}>
            <div aria-hidden="true" className={styles.orbit} />
            <div className={styles.panelTop}><span>The next destination</span><span aria-hidden="true">↗</span></div>
            <img src="/images/brand/Sampan_City_End.png" alt="Sampan City End" width="2000" height="800" className={styles.logo} />
            <div className={styles.panelBottom}>
              <p>Arrive for more.</p>
              <span>Drive. Unwind. Connect.</span>
            </div>
          </div>
        </div>
        <div className={styles.highlights}>
          {highlights.map(item => (
            <article key={item.number} className={styles.highlight}>
              <span className={styles.number}>{item.number}</span>
              <div><h3>{item.title}</h3><p>{item.copy}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}