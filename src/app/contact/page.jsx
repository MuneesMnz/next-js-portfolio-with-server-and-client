import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export const metadata = {
  title: "Mnz | Contact Page ",
  description: "This is contact page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.img}
          />
        </div>
        <div className={styles.formContainer}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Message"
            cols="30"
            rows="6"
            className={styles.textarea}
          ></textarea>
          <Button url={"#"} text={"Submit"} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
