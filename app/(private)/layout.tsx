"use client"

import { useAppSelector } from '@/redux/hooks';
import { LayoutType } from '@/types';
import { useRouter } from 'next/navigation';
import { Fragment, useEffect,  } from "react";
// import { useSelector } from 'react-redux';

export default function PrivateLayout({ children }: LayoutType) {
  const router = useRouter();
  const { user, isAuth } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!(user?.role && isAuth)) {
      router.push("/login");
    }
  });
  console.log(user, isAuth);
  return (
    <Fragment>
      <header>Admin header</header>
      <main>{children}</main>
      <footer>Admin footer</footer>
    </Fragment>
  );
}
