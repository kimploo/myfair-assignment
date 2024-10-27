'use client'

import { Global, css } from '@emotion/react';

export const GlobalStyles = () => (
  <Global
    styles={css`
        @import 'node_modules/modern-normalize/modern-normalize.css';
        * {
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        
        html, body{
          margin: 0;
          height: 100%;
        }
      `}
  />
);
