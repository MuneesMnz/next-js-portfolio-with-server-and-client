"use client";

import { signIn } from "next-auth/react";
import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

const Login = () => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
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
        <button className={styles.button}>Login</button>
      </form>
      {error && <div>something went wrong</div>}
      <Link href={"/dashboard/login"}>Already exist? Login here</Link>
      <button className={styles.button} onClick={() => signIn("google")}>
        Loggin with google
      </button>
    </div>
  );
};

export default Login;
