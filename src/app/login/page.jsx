"use client";
import React from "react";
import styles from "./loginPage.module.css";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "@/redux/slices/userSlice/userSlice";
import { useRouter } from "next/navigation";
import axios from "axios";

const findUser = async (email, password) => {
  const result = await axios.post("http://localhost:3000/user/signin", {
    email: email,
    password: password,
  });
  return result.data.data;
};

const page = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const user = await findUser(email, password);
    if(user && user.isPasswordMatches){
      localStorage.setItem('user', JSON.stringify(user.user));
      dispatch(setUser(user.user));
      dispatch(setAuthenticated(true));
      router.push("/");
    }
  };

  return (
    <div className={styles.container}>
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
    </div>
  );
};

export default page;
