import { ICharacter } from '../models/character.ts';
import { FC } from 'react';
import CharacterComponent from './CharacterComponent.tsx';

type FamilyProps = {
  characters: ICharacter[];
};

const FamilyComponent: FC<FamilyProps> = ({ characters }) => {
  return (
    <ul className="flex flex-wrap gap-3 justify-center mb-4">
      {characters.map((character, index) => (
        <li key={index} className="w-96 border rounded-2xl p-4 border-amber-400">
          <CharacterComponent character={character}>{character.info}</CharacterComponent>
        </li>
      ))}
    </ul>
  );
};

export default FamilyComponent;
