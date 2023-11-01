import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products.
        </h1>
        <p className={styles.discription}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          necessitatibus assumenda voluptatibus corporis quae similique non
          quidem provident distinctio itaque.
        </p>
        <Button text="See our works" url="/portfolio" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
