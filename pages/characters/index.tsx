import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import MainLayout from "../../components/layouts/MainLayout";
import CharactersList, { ICharacter } from "../../components/lists/CharactersList";

export default function CharactersPage() {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setCharacters([
        {
          id: uuidv4(),
          name: "Исильдур",
          class: {
            name: "Волшебник",
          },
        },
        { id: uuidv4(), name: uuidv4() },
        { id: uuidv4(), name: uuidv4() },
        { id: uuidv4(), name: uuidv4() },
      ]);
    }, 200);
  }, []);

  return (
    <MainLayout>
      <CharactersList characters={characters} />
    </MainLayout>
  );
}
