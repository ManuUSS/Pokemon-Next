import { Grid } from '@nextui-org/react';
import { SmallPokemon } from 'types';
import { PokemonCard } from './PokemonCard';
import { FC } from 'react';

interface Props {
    pokemons: SmallPokemon[]
}

export const PokemonList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
            <PokemonCard  key={ pokemon.id } pokemon={ pokemon } />
          ))
        }  
      </Grid.Container>    
  )
}
