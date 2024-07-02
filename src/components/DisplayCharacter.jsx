import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DisplayCharacter() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:4242/characters/${id}`)
      .then((res) => res.json())
      .then((res) => console.log(res) || setCharacter(res));
  }, []);
  return (
    <div>
      je suis dans dSChara {id}
      <p>{character.name}</p>
    </div>
  );
}
export default DisplayCharacter;
