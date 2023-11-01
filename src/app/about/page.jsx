import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src={
            "https://images.pexels.com/photos/3184589/pexels-photo-3184589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          fill={true}
          alt="cover-img"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContaniner}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p  className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quae
            quas odio ratione est blanditiis quibusdam soluta pariatur non enim?
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            reprehenderit ipsum totam ullam omnis quasi in error? Eius,
            consectetur, obcaecati nulla sapiente est earum exercitationem
            sequi, numquam ratione laborum reiciendis?
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
            reprehenderit ipsum totam ullam omnis quasi in error? Eius,
            consectetur, obcaecati nulla sapiente est earum exercitationem
            sequi, numquam ratione laborum reiciendis?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            corrupti praesentium dolorum impedit fuga iste, alias neque a
            quisquam, totam tempora expedita mollitia aliquid molestias suscipit
            error cum doloribus repudiandae.
          </p>
          <p className={styles.desc}>- Creative Illustration</p>
          <p className={styles.desc}>- Dynamic Website</p>
          <p className={styles.desc}>- Creative Illustration</p>
          <Button text={"Contact"} url={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
