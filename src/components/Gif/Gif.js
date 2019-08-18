import React, { useState, useEffect } from "react";
import axios from "axios";

const Gif = props => {
  const [gif, setGif] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = props.match.params;

  useEffect(() => {
    axios
      .get(
        `https://api.giphy.com/v1/gifs/${id}?api_key=${
          process.env.REACT_APP_GIF_API
        }&limit=25`
      )
      .then(res => {
        setGif(res.data.data);
        setIsLoading(false);
      })
      .catch(err => console.error(err));
  }, [id, isLoading]);

  if (isLoading) {
    return (
      <div>
        <h2>Loading Gif</h2>
      </div>
    );
  }

  return (
    <div>
      <img src={gif.images.downsized.url} alt={gif.title} />
    </div>
  );
};

export default Gif;
