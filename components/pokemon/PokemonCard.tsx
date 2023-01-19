import { FC } from 'react'
import { Grid, Card, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from 'types';

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard:FC<Props> = ({ pokemon }) => {
  return (
    <Grid 
              key={ pokemon.id }
              xs={ 6 }
              sm={ 3 }
              md={ 2 }
              xl={ 1 }
            >
              <Card isHoverable isPressable>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image 
                    src={ pokemon.img }
                    width="100%"
                    height={ 140 }
                    alt={ pokemon.name }
                  />
                </Card.Body>
                <Card.Footer>
                  <Row justify="space-between">
                    <Text transform="capitalize" b>{ pokemon.name }</Text>
                    <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>#{ pokemon.id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
  )
}
