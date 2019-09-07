/** @jsx jsx */
import React from "react";
import { Global, css, jsx } from "@emotion/core";

const Layout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            margin: 0;
          }

          html,
          body {
            margin: 0;
            color: #555;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            font-size: 18px;
            line-height: 1.4;
            background: #121212;

            > div {
              margin-top: 0;
            }
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;
          }
          strong {
            color: #222;
          }
          li {
            margin-top: 0.25rem;
          }
        `}
      />
      <main
        css={css`
          background: #121212;
        `}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
