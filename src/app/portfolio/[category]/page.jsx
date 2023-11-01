import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere quisquam pariatur! Suscipit, nostrum? At tempora sed mollitia
            facilis nisi nemo reprehenderit perferendis voluptate nam ipsa
            voluptatibus ducimus aspernatur vel temporibus in hic optio,
            explicabo, laudantium harum. Aperiam suscipit atque, quae earum
            eveniet, laborum aspernatur ipsum veritatis neque voluptate minima!
          </p>

          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere quisquam pariatur! Suscipit, nostrum? At tempora sed mollitia
            facilis nisi nemo reprehenderit perferendis voluptate nam ipsa
            voluptatibus ducimus aspernatur vel temporibus in hic optio,
            explicabo, laudantium harum. Aperiam suscipit atque, quae earum
            eveniet, laborum aspernatur ipsum veritatis neque voluptate minima!
          </p>

          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere quisquam pariatur! Suscipit, nostrum? At tempora sed mollitia
            facilis nisi nemo reprehenderit perferendis voluptate nam ipsa
            voluptatibus ducimus aspernatur vel temporibus in hic optio,
            explicabo, laudantium harum. Aperiam suscipit atque, quae earum
            eveniet, laborum aspernatur ipsum veritatis neque voluptate minima!
          </p>

          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1>Creative portfolio</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            facere quisquam pariatur! Suscipit, nostrum? At tempora sed mollitia
            facilis nisi nemo reprehenderit perferendis voluptate nam ipsa
            voluptatibus ducimus aspernatur vel temporibus in hic optio,
            explicabo, laudantium harum. Aperiam suscipit atque, quae earum
            eveniet, laborum aspernatur ipsum veritatis neque voluptate minima!
          </p>

          <Button text="See More" url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/1418595/pexels-photo-1418595.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
