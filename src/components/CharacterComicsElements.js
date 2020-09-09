import React, { useEffect, useState } from "react";

import axios from "axios";

const CharacterComicsElements = ({ id, index }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = `https://marvel-myproject-backend.herokuapp.com/comics/${id}`;
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
      <div key={index} className="comics-section-element">
        <img
          src={data.thumbnail.path + `.${data.thumbnail.extension}`}
          alt=""
        />
        <div>
          <h2>{data.title}</h2>
          <p>{data.description}</p>
        </div>
      </div>
    )
  );
};

export default CharacterComicsElements;
