"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import {
  clearUser,
  setAuthenticated,
} from "@/redux/slices/userSlice/userSlice";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const router = useRouter();
  const dispatch = useDispatch();
  let isAdmin = true;
  const isAuthenticated = useSelector((state) => {
    isAdmin = state.user.isAdmin;
    return state.user.authenticated;
  });
  console.log(isAuthenticated);

  const logOutHandler = () => {
    dispatch(clearUser());
    dispatch(setAuthenticated(false));
    localStorage.removeItem("user");
    router.push("/login");
  };

  // const isAuthenticated = !!user;

  return (
    <>
      {isAuthenticated ? (
        <>
          {isAdmin && (
            <Link href="/write" className={styles.link}>
              Write
            </Link>
          )}
          <span className={styles.link} onClick={logOutHandler}>
            Logout
          </span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {isAuthenticated ? (
            <>
              {isAdmin && (
                <Link href="/write" className={styles.link}>
                  Write
                </Link>
              )}
              <span className={styles.link} onClick={logOutHandler}>
                Logout
              </span>
            </>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
