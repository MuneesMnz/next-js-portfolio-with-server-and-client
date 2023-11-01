import Image from "next/image";
import styles from "./page.module.css";

const BlogItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          </h1>

          <p className={styles.subtitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            quibusdam consequatur doloremque necessitatibus vitae deserunt ipsum
            voluptatibus incidunt sequi! Iure quia modi mollitia nostrum
            quibusdam ex labore laboriosam hic dolorem!
          </p>

          <div className={styles.autherContainer}>
            <Image
              className={styles.authimg}
              src="https://images.pexels.com/photos/4006576/pexels-photo-4006576.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={50}
              height={50}
              alt=""
            />
            <p className={styles.authName}>John Doe</p>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <Image
            className={styles.img}
            src={
              "https://images.pexels.com/photos/3932976/pexels-photo-3932976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            fill={true}
            alt=""
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.bottomtext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          maiores consequuntur distinctio ipsam necessitatibus eum atque sit
          quos. Quia, voluptatum, ipsum qui deleniti dicta debitis suscipit nemo
          autem velit, beatae quaerat rem nam minima corrupti officiis ducimus
          nisi! Modi temporibus dolor tenetur ipsam, facilis perspiciatis magni
          deserunt sequi sunt quidem.
        </p>
        <p className={styles.bottomtext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          maiores consequuntur distinctio ipsam necessitatibus eum atque sit
          quos. Quia, voluptatum, ipsum qui deleniti dicta debitis suscipit nemo
          autem velit
        </p>
        <p className={styles.bottomtext}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          maiores consequuntur distinctio ipsam necessitatibus eum atque sit
          quos. Quia, voluptatum, ipsum qui deleniti dicta debitis suscipit nemo
          autem velit, beatae quaerat rem nam minima corrupti officiis ducimus
          nisi! Modi temporibus dolor tenetur ipsam, facilis perspiciatis magni
          deserunt sequi sunt quidem. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Porro modi pariatur ut. Porro dolores quia delectus
          pariatur sunt iusto tempore quibusdam voluptatibus sequi commodi,
          quaerat inventore tempora quo tenetur repellendus!
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
