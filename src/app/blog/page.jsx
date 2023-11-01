import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const BlogItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18867498/pexels-photo-18867498/free-photo-of-london-city-fox.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill={true}
            className={styles.img}
            alt=""
          />
        </Link>
        <div className={styles.content}>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum
            quos eaque consectetur laudantium tempora aliquid velit corporis
            soluta explicabo suscipit ducimus sit veritatis, sint numquam ea
            esse beatae iure.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18443847/pexels-photo-18443847/free-photo-of-light-bulbs-outdoors-at-night.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill={true}
            className={styles.img}
            alt=""
          />
        </Link>
        <div className={styles.content}>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum
            quos eaque consectetur laudantium tempora aliquid velit corporis
            soluta explicabo suscipit ducimus sit veritatis, sint numquam ea
            esse beatae iure.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/15547144/pexels-photo-15547144/free-photo-of-a-snowy-mountain-with-trees-on-top.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill={true}
            className={styles.img}
            alt=""
          />
        </Link>
        <div className={styles.content}>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum
            quos eaque consectetur laudantium tempora aliquid velit corporis
            soluta explicabo suscipit ducimus sit veritatis, sint numquam ea
            esse beatae iure.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18925457/pexels-photo-18925457/free-photo-of-a-snowy-village-in-the-middle-of-the-ocean-with-mountains-in-the-background.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill={true}
            className={styles.img}
            alt=""
          />
        </Link>
        <div className={styles.content}>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum
            quos eaque consectetur laudantium tempora aliquid velit corporis
            soluta explicabo suscipit ducimus sit veritatis, sint numquam ea
            esse beatae iure.
          </p>
        </div>
      </div>
      <div className={styles.blogContainer}>
        <Link href="/blog/testId" className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/18695215/pexels-photo-18695215/free-photo-of-legs-and-shoes-of-person-standing-on-stone-blocks-over-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            }
            fill={true}
            className={styles.img}
            alt=""
          />
        </Link>
        <div className={styles.content}>
          <h2>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
            eveniet
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui earum
            quos eaque consectetur laudantium tempora aliquid velit corporis
            soluta explicabo suscipit ducimus sit veritatis, sint numquam ea
            esse beatae iure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
