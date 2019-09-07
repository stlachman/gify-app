/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const Loader = ({ isLoading }) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      <main
        css={css`
          background: #121212;
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <div
          css={css`
            padding: 20px 10px;
          `}
        >
          <HashLoader
            css={override}
            sizeUnit={"px"}
            size={50}
            color={"#123abc"}
            loading={isLoading}
          />
        </div>
      </main>
    </>
  );
};

export default Loader;
