import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'
import { PokemonFavoriteCard } from './PokemonFavoriteCard'

interface Props {
    favoritePokemons: number[]
}

export const PokemonFavorite:FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
        favoritePokemons.map( ( id ) => (
            <PokemonFavoriteCard id={ id } />
        ))
    }
    </Grid.Container>
  )
}
