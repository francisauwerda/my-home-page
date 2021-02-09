import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

function ImageLink({ children, href }) {
  return (
    <Link passHref={true} href={href}>
      <a target="_blank" className={styles.imageLink}>
        {children}
      </a>
    </Link>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Francis Auwerda</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="Description"
          content="Home page for reaching Francis Auwerda"
        />
      </Head>

      <section className={styles.section}>
        <main>
          <div className={styles.titleContainer}>
            <div className={styles.profilePictureContainer}>
              <Image
                src="/images/profile.png"
                alt="Profile photo of Francis"
                width="100%"
                height="100%"
                className="profile-picture"
              />
            </div>
            <h1 className={styles.title}>Francis Auwerda</h1>
          </div>
          <p className={styles.description}>
            Hello and welcome 👋
            <br />
            Click on the links if you would like to reach me
          </p>
        </main>

        <aside className={styles.aside}>
          <ImageLink href="https://github.com/francisauwerda">
            <div className={styles.githubContainer}>
              <img src="/images/github.png" alt="GitHub" width={"100%"} />
            </div>
          </ImageLink>
          <ImageLink href="https://www.linkedin.com/in/francis-auwerda">
            <div className={styles.linkedInContainer}>
              <img src="/images/linkedin.png" alt="LinkedIn" width={"100%"} />
            </div>
          </ImageLink>
        </aside>
      </section>

      {/* <article className={styles.article}>✌️</article> */}
    </div>
  );
}
