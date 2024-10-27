import localFont from "next/font/local";
import React from "react";

import LayoutRecoil from "./layout.recoil";
import { GlobalStyles } from "../util/GlobalStyles";

export const metadata = {
  title: "myfair front pre-course",
  description: "todolist",
};

const pretendard = localFont({
  src: [
    {
      path: "./fonts/Pretendard-Regular.woff",
      weight: "400",
    },
    {
      path: "./fonts/Pretendard-Bold.woff",
      weight: "700",
    },
  ],
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GlobalStyles></GlobalStyles>
      <body className={`${pretendard.variable} font-pretendard`}>
        <LayoutRecoil>{children}</LayoutRecoil>
      </body>
    </html>
  );
}
