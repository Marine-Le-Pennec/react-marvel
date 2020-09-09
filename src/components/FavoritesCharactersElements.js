import React, { useEffect, useState } from "react";

import axios from "axios";

const FavoritesCharactersElements = ({ index, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = `https://marvel-myproject-backend.herokuapp.com/characters/${id}`;
      try {
        const response = await axios.get(apiUrl);
        setData(response.data.results[0]);
        setIsLoading(false);
      } catch (e) {
        alert("An error occurred");
      }
    };
    fetchData();
  }, [id]);

  return (
    !isLoading && (
      <div key={index} className="character-section-element">
        <img
          src={data.thumbnail.path + `.${data.thumbnail.extension}`}
          alt=""
        />
        <h2>{data.name}</h2>
      </div>
    )
  );
};

export default FavoritesCharactersElements;
