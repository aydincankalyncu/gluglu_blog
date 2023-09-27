"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const page = () => {
  const {data, status} = useSession();
  const router = useRouter();

  console.log(data, status);
  if(status === "loading"){
    return <div className={styles.loading}>Loading...</div>
  }

  if(status=== "authenticated"){
    router.push("/");
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", {email, password});
  }
  
  return <div className={styles.container}>
    <div className={styles.wrapper}>
    <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          required
          placeholder="email"
          className={styles.input}
        />
        <input
          type="password"
          required
          placeholder="password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      {/* <button onClick={() => signIn("google")}>Login with Google</button> */}
      
    </div>
  </div>;
};

export default page;
