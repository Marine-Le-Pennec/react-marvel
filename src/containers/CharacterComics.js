import React from "react";

import CharacterComicsElements from "../components/CharacterComicsElements";

import { useLocation } from "react-router-dom";

const CharacterComics = () => {
  const location = useLocation();
  const { character } = location.state;

  console.log(character.comics.items);
  return (
    <section className="container main">
      <h2>{character.name} comics list :</h2>
      <ul className="comics-section">
        {character.comics.items.length !== 0 ? (
          character.comics.items.map((e, index) => {
            return (
              <CharacterComicsElements
                id={e.resourceURI.split("comics/")[1]}
                key={index}
                index={index}
              />
            );
          })
        ) : (
          <p>Does not appear in any comics</p>
        )}
      </ul>
    </section>
  );
};

export default CharacterComics;
