import Image from "next/image";
import styles from "./page.module.css";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
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

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogItem = async ({ params }) => {
  const data = await getData(params.id);
  console.log(data);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.content}>
          <h1 className={styles.title}>{data.title}</h1>

          <p className={styles.subtitle}>{data.desc}</p>

          <div className={styles.autherContainer}>
            <Image
              className={styles.authimg}
              src={data.img}
              width={50}
              height={50}
              alt=""
            />
            <p className={styles.authName}>{data.auther}</p>
          </div>
        </div>
        <div className={styles.ImageContainer}>
          <Image className={styles.img} src={data.img} fill={true} alt="" />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p className={styles.bottomtext}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogItem;
