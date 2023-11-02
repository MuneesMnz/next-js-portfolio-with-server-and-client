"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(true);
      console.log(err.message);
    }
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className={styles.input}
          required
        />
        <input
          type="email"
          placeholder="email"
          className={styles.input}
          required
        />
        <input
          type="password"
          placeholder="password"
          className={styles.input}
          required
        />
        <button className={styles.button}>Register</button>
      </form>
      {error && <div>something went wrong</div>}
      <Link href={"/dashboard/login"}>Already exist? Login here</Link>
    </div>
  );
};

export default Register;
