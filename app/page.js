import Image from "next/image";
import styles from "./page.module.scss";
import localFont from 'next/font/local';

// PAGE SECTIONS
import About from "./page_sections/About";
import ProjectManager from "./page_sections/ProjectManager";
import Contact from "./page_sections/Contact";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <section className={styles.headerSection}>
          <Header />
        </section>
        <section className={styles.mainSection}>
          <main className={styles.main}>
            <section className={styles.banner}>
              <p className={`${styles.title} ${styles.titlePrimer}`}>Hello, my name is</p>
              <h2 className={`${styles.title} ${styles.name}`}>Kenyon Huppe</h2>
              <h2 className={`${styles.title} ${styles.tagline}`}>Engineering excellence in code for exceptional user experiences.</h2>
              <h3 className={`${styles.title} ${styles.positionTitle}`}>Software Engineer</h3>
              <div className={`${styles.title} ${styles.resumeContainer}`}>
                <a href="/KenyonHuppe_Resume.pdf" className={styles.resumeDownload} download>Grab a copy of my resume!</a>
              </div>
            </section>
            <section className={styles.aboutSection} id="about">
              <About />
            </section>
            <section className={styles.projectsSection} id="projects">
              <ProjectManager />
            </section>
            <section className={styles.contactSection} id="contact">
              <Contact />
            </section>
          </main>
        </section>
        <section className={styles.footerSection}>
          <Footer />
        </section>
      </div>
    </div>
  );
}
