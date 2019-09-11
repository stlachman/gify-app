/** @jsx jsx */
import Card from "../Card/Card";
import { css, jsx } from "@emotion/core";

const GifList = ({ gifs, storeLiked }) => {
  return (
    <div
      css={css`
        display: grid;
        grid-gap: 2rem 4rem;
        @media (min-width: 450px) {
          grid-template-columns: repeat(2, 1fr);
        }
      `}
    >
      {gifs &&
        gifs.map(gif => {
          return <Card gif={gif} storeLiked={storeLiked} key={gif.id} />;
        })}
    </div>
  );
};

export default GifList;
