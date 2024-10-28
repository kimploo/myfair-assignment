import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    breakpoint: {
      mobile: string;
    };
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
      todo: string;
      inProgress: string;
      done: string;
    };
  }
}