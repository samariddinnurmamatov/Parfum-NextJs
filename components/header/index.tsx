"use client";

import React from "react";
import Link from "next/link";
import { logout } from "@/redux/slices/authSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks"; // Import the correct hooks
import { useRouter } from "next/navigation"; // Import useRouter

import "./header.css"; // Import CSS module

const Header: React.FC = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter(); // Use useRouter

   const handleLogout = () => {
     dispatch(logout());
     router.push("/"); // Foydalanuvchi Logout bo'lgach bosh sahifaga o'tishi
   };
  return (
    <header>
      <div className="header_flex container">
        <div>
          {isAuth ? (
            <Link href="/">Vodiy Parfum</Link>
          ) : (
            <Link href="/">Parfum</Link>
          )}
        </div>
        <div className="header_linklar">
          <Link href="/">Home</Link>
          <Link href="/product">Product</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/cart">Cart</Link>
          {isAuth ? (
            <Link className="login" href="/account">
              Account
            </Link>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <Link className="login" href="/register">
                Register
              </Link>
              <Link className="login" href="/login">
                Login
              </Link>
            </div>
          )}
          {isAuth && (
            <button className="login" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
