import { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Characters.css";
import { Link } from "react-router-dom";
function Characters() {
  const [dataCharacters, setDataCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4242/characters")
      .then((res) => res.json())
      .then((res) => setDataCharacters(res));
  }, []);

  return (
    <div>
      <Header />
      {dataCharacters.map((character) => {
        // const urlLink = `/characters/${character.id}`;
        return (
          <div key={character.id}>
            <p>{character.name}</p>
            <Link to={`/characters/${character.id}`}>
              <input type="button" value="voir details" />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Characters;
