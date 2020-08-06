import React, { useEffect, useState } from "react";

import axios from "axios";

const FavoritesCharactersElements = ({ index, id }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async () => {
            let apiUrl = `http://localhost:4000/characters/${id}`;
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

    !isLoading && console.log(data);

    return (
        !isLoading && (
            <div key={index} className="favorite-character-element">
                <img
                    src={data.thumbnail.path + `.${data.thumbnail.extension}`}
                    alt=""
                />
                <div>
                    <h3>{data.name}</h3>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    );
};

export default FavoritesCharactersElements;
