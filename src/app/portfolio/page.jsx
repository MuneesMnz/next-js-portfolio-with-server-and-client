import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.subtitle}>Choose a gallery</h3>

      <div className={styles.galleryContainer}>
        <Link href={"/portfolio/websites"}>
          <div className={styles.card}>
            <Image
              alt=""
              src="/websites.jpg"
              fill={true}
              className={styles.img}
            />
            <h3 className={styles.imgTitle}>Website </h3>
          </div>
        </Link>
        <Link href={"/portfolio/apps"}>
          <div className={styles.card}>
            <Image
              alt=""
              src="/apps.jpg"
              fill={true}
              className={styles.img}
            />
            <h3 className={styles.imgTitle}>Apps</h3>
          </div>
        </Link>
        <Link href={"/portfolio/illustration"}>
          <div className={styles.card}>
            <Image
              alt=""
              src="/illustration.png"
              fill={true}
              className={styles.img}
            />
            <h3 className={styles.imgTitle}>Illustration</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
