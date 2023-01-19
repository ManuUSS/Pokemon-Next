import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { Button, Card, Container, Grid, Image, Text } from "@nextui-org/react";
import confetti from "canvas-confetti";
import { getPokemonInfo } from '../../../utils/getPokemonInfo';
import { pokeApi } from 'api';
import { PokemonListResponse, PokemonResponse } from "types"
import { Layout } from "components/layouts";
import { localFavorites } from "utils";

interface Props {
    pokemon: PokemonResponse
}

const PokemonByNamePage:NextPage<Props> = ({ pokemon }) => {
    
    const [ isInfavorites, setIsInfavorites ] = useState(localFavorites.pokemonIsFavorite( pokemon.id ));

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite( pokemon.id );
        setIsInfavorites( !isInfavorites );

        if( isInfavorites ) return;

        confetti({
            zIndex: 100,
            particleCount: 150,
            spread: 150,
            angle: -150,
            origin: {
                x: 1,
                y: 0
            }
        })

    }

  return (
    <Layout title={ pokemon.name }>
        <Grid.Container
            css={{ marginTop: '5px' }}
            gap={ 2 }
        >
            <Grid xs={ 12 } sm={ 4 }>
                <Card isHoverable css={{ padding: '30px' }}>
                    <Card.Body>
                        <Card.Image 
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                            alt={ pokemon.name }
                            width="100%"
                            height={ 200 }
                        />
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs={ 12 } sm={ 8 }>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text transform="capitalize" h1>{ pokemon.name }</Text>
                        <Button
                            color="success"
                            ghost={ !isInfavorites }
                            onClick={ onToggleFavorite }
                        >
                            { isInfavorites ? 'Eliminar de favoritos' : 'Guardar en favoritos' }
                        </Button>
                    </Card.Header>
                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container direction="row" display="flex">
                            <Image
                                src={ pokemon.sprites.front_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_default }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.front_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                            <Image
                                src={ pokemon.sprites.back_shiny }
                                alt={ pokemon.name }
                                width={ 100 }
                                height={ 100 }
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    </Layout>
  )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const { data } = await pokeApi.get<PokemonListResponse>(`/pokemon?limit=151` );

    const pokemonsName: string[] = data.results.map( ( pokemon ) => ( pokemon.name ))


    return {
        paths: pokemonsName.map(  name  => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { name } = params as { name: string };

    
    return {
        props: {
            pokemon: await getPokemonInfo( name )
        }
    }
}



export default PokemonByNamePage