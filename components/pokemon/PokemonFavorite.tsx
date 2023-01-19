import { Card, Grid } from '@nextui-org/react'
import React, { FC } from 'react'

interface Props {
    favoritePokemons: number[]
}

export const PokemonFavorite:FC<Props> = ({ favoritePokemons }) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start'>
    {
        favoritePokemons.map( ( id ) => (
        <Grid xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } key={ id }>
            <Card
            isHoverable
            isPressable
            css={{ padding: 10 }}
            >
            <Card.Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                width={ '100%' }
                height={ 140 }
            />
            </Card>
        </Grid>
        ))
    }
    </Grid.Container>
  )
}
