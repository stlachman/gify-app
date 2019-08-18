/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      css={css`
        background: #0e467f;
      `}
    >
      <nav
        css={css`
          max-width: 910px;
          margin: 0 auto;
        `}
      >
        <ul
          css={css`
            padding-left: 0;
          `}
        >
          <li
            css={css`
              margin-top: 0;
              list-style: none;
            `}
          >
            <Link
              css={css`
                color: #fff;
                font-weight: bold;
                text-decoration: none;
              `}
              to="/"
            >
              Home
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
