"use client";
import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";

const theme = {
  colors: {
    primary: "#B9E5E8",
    secondary: "#7AB2D3",
    accent: "#4A628A",
    background: "#DFF2EB",
  },
};

interface Props {
  children: React.ReactNode;
}

export default function LayoutTheme({ children }: Props) {
  return (
    <>
      <Global
        styles={css`
          @import "node_modules/modern-normalize/modern-normalize.css";
          * {
            font-family:
              "Pretendard Variable",
              Pretendard,
              -apple-system,
              BlinkMacSystemFont,
              system-ui,
              Roboto,
              "Helvetica Neue",
              "Segoe UI",
              "Apple SD Gothic Neo",
              "Noto Sans KR",
              "Malgun Gothic",
              "Apple Color Emoji",
              "Segoe UI Emoji",
              "Segoe UI Symbol",
              sans-serif;
          }
          html,
          body {
            margin: 0;
            height: 100%;
          }
        `}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
