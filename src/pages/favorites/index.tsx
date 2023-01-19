import { useEffect, useState } from 'react';

import { Layout } from 'components/layouts';
import { NoFavorites } from 'components/pokemon';
import { localFavorites } from 'utils';
import { Card, Grid } from '@nextui-org/react';
import { PokemonFavorite } from 'components/pokemon/PokemonFavorite';

const FavoritePage = () => {
  
  const [ favoritePokemons, seFavoritePokemons ] = useState<number[]>([]);

  useEffect(() => {
    seFavoritePokemons( localFavorites.pokemons );
  }, [])
  
  
  return (
    <Layout title='Pokémons - Favoritos'>
      {
        ( favoritePokemons.length === 0 ) 
        ? <NoFavorites />
        : (
          <PokemonFavorite favoritePokemons={ favoritePokemons } />
        ) 
      }
    </Layout>
  )
}

export default FavoritePage