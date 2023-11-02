import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    // next: {
    //   revalidate: 10,
    // },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
};

const BlogItem = async () => {
  const data = await getData();
  return (
    <div className={styles.container}>
      <div>
        {data.map((item) => {
          return (
            <Link
              href={`/blog/${item._id}`}
              className={styles.blogContainer}
              key={item._id}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={item.img}
                  fill={true}
                  className={styles.img}
                  alt=""
                />
              </div>
              <div className={styles.content}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BlogItem;
