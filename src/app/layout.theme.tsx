"use client";
import { css, Global, ThemeProvider } from "@emotion/react";
import React from "react";

const theme = {
  breakpoint: {
    mobile: "640px",
  },
  colors: {
    primary: "#E8390D",
    secondary: "rgb(1, 51, 68)",
    accent: "#4A628A",
    background: "#DFF2EB",
    text: "#333333",
    todo: "rgb(227, 226, 224)",
    inProgress: "rgb(211, 229, 239)",
    done: "rgb(219, 237, 219)",
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
          /*! modern-normalize v3.0.1 | MIT License | https://github.com/sindresorhus/modern-normalize | 일부 수정 */
          /*
            Document
            ========
            Use a better box model (opinionated).
          */

          *,
          ::before,
          ::after {
            box-sizing: border-box;
          }

          html {
            /* Pretendard 적용을 위한 font-family */
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
            line-height: 1.15; /* 1. Correct the line height in all browsers. */
            -webkit-text-size-adjust: 100%; /* 2. Prevent adjustments of font size after orientation changes in iOS. */
            tab-size: 4; /* 3. Use a more readable tab size (opinionated). */
          }

          /*
            Sections
            ========
          */

          body {
            margin: 0; /* Remove the margin in all browsers. */
          }

          /*
            Text-level semantics
            ====================
          */

          /**
            Add the correct font weight in Chrome and Safari.
          */

          b,
          strong {
            font-weight: bolder;
          }

          /**
            1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)
            2. Correct the odd 'em' font sizing in all browsers.
          */

          code,
          kbd,
          samp,
          pre {
            font-family: ui-monospace, SFMono-Regular, Consolas,
              "Liberation Mono", Menlo, monospace; /* 1 */
            font-size: 1em; /* 2 */
          }

          /**
            Add the correct font size in all browsers.
          */

          small {
            font-size: 80%;
          }

          /**
            Prevent 'sub' and 'sup' elements from affecting the line height in all browsers.
          */

          sub,
          sup {
            font-size: 75%;
            line-height: 0;
            position: relative;
            vertical-align: baseline;
          }

          sub {
            bottom: -0.25em;
          }

          sup {
            top: -0.5em;
          }

          /*
            Tabular data
            ============
          */

          /**
            Correct table border color inheritance in Chrome and Safari. (https://issues.chromium.org/issues/40615503, https://bugs.webkit.org/show_bug.cgi?id=195016)
          */

          table {
            border-color: currentcolor;
          }

          /*
            Forms
            =====
          */

          /**
            1. Change the font styles in all browsers.
            2. Remove the margin in Firefox and Safari.
          */

          button,
          input,
          optgroup,
          select,
          textarea {
            font-family: inherit; /* 1 */
            font-size: 100%; /* 1 */
            line-height: 1.15; /* 1 */
            margin: 0; /* 2 */
          }

          /**
            Correct the inability to style clickable types in iOS and Safari.
          */

          button,
          [type="button"],
          [type="reset"],
          [type="submit"] {
            -webkit-appearance: button;
          }

          /**
            Remove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.
          */

          legend {
            padding: 0;
          }

          /**
            Add the correct vertical alignment in Chrome and Firefox.
          */

          progress {
            vertical-align: baseline;
          }

          /**
            Correct the cursor style of increment and decrement buttons in Safari.
          */

          ::-webkit-inner-spin-button,
          ::-webkit-outer-spin-button {
            height: auto;
          }

          /**
            1. Correct the odd appearance in Chrome and Safari.
            2. Correct the outline style in Safari.
          */

          [type="search"] {
            -webkit-appearance: textfield; /* 1 */
            outline-offset: -2px; /* 2 */
          }

          /**
            Remove the inner padding in Chrome and Safari on macOS.
          */

          ::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          /**
            1. Correct the inability to style clickable types in iOS and Safari.
            2. Change font properties to 'inherit' in Safari.
          */

          ::-webkit-file-upload-button {
            -webkit-appearance: button; /* 1 */
            font: inherit; /* 2 */
          }

          /*
            Interactive
            ===========
            Add the correct display in Chrome and Safari.
          */

          summary {
            display: list-item;
          }

          /* 여기까지 reset css */

          html,
          body {
            height: 100%;
          }

          li {
            margin: 0;
            padding: 0;
            list-style: none;
          }

          ul {
            margin: 0;
            padding: 0;
          }

          button {
            all: unset; /* Remove all default styling */
            display: inline-block; /* Ensures button behaves like an inline element */
            box-sizing: border-box; /* Allows padding and border to fit inside width/height */
            padding: 0; /* Removes default padding */
            border: none; /* Removes default border */
            background: none; /* Removes default background */
            color: inherit; /* Inherit text color from parent */
            font: inherit; /* Inherit font styles */
            text-align: center; /* Centers text */
            cursor: pointer; /* Sets the pointer on hover */
          }
        `}
      />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
