import React from "react";

import Cookies from "js-cookie";

const ComicsElements = ({ index, comics }) => {
    return (
        <div className="comics-section-element" key={index}>
            {comics.thumbnail.path !==
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" && (
                <img
                    src={
                        comics.thumbnail.path + `.${comics.thumbnail.extension}`
                    }
                    alt=""
                />
            )}
            <div>
                <h2>{comics.title}</h2>
                {comics.description && <p>{comics.description}</p>}
            </div>
        </div>
    );
};

export default ComicsElements;
