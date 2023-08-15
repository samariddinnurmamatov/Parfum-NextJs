"use client"

import React from 'react';
import { Inter } from 'next/font/google'
import '../globals.css';

const inter = Inter({ subsets: ['latin'] })

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReduxProvider from '@/redux/provider';


type RootLayoutTypes = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutTypes) {
  return (
      <html lang="en">
        <head>
          <title>E-commerce</title>
          <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
            />
        </head>
        <body className={inter.className}>
          <ReduxProvider>{children}</ReduxProvider>
        </body>
      </html>
  )
}
