import { FC } from 'react';
import { ICharacter } from '../models/character.ts';

type CharacterProps = {
  character: ICharacter;
  children: string;
};

export const CharacterComponent: FC<CharacterProps> = ({ character, children }) => {
  return (
    <>
      <div className="flex justify-between mb-4">
        <img src={character.photo} alt={character.name} className="w-32 h-48" />
        <div>
          <h2 className="text-2xl text-amber-400 mb-2">
            {character.name} {character.surname}
          </h2>
          <p>Age: {character.age}</p>
        </div>
      </div>
      <p className="text-xs">{children}</p>
    </>
  );
};
