import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 mnz. All rights reserved.</div>
      <div className={styles.socials}>
        <Image src="/1.png" width={20} className={styles.icon} height={20} alt="mnz" />
        <Image src="/2.png" width={20} className={styles.icon} height={20} alt="mnz" />
        <Image src="/3.png" width={20} className={styles.icon} height={20} alt="mnz" />
        <Image src="/4.png" width={20} className={styles.icon} height={20} alt="mnz" />
      </div>
    </div>
  );
};

export default Footer;
