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
        <CharacterComponent key={index} character={character}>
          {character.info}
        </CharacterComponent>
      ))}
    </ul>
  );
};

export default FamilyComponent;
