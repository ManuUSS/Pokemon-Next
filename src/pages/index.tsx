import { FC } from "react"
import { GetStaticProps } from "next";
import { pokeApi } from "api";
import { PokemonListResponse, SmallPokemon } from "types";
import { Layout } from "components/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: FC<Props> = ({ pokemons }) => {
  return (
    <Layout
      title="Listado de pokemons"
    >
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( ( pokemon ) => (
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
          ))
        }  
      </Grid.Container>      
    </Layout>
  )
}



//Solo se ejecuta del lado del Server
//Solo se puede usar desde las páginas
export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');


  const pokemons: SmallPokemon[] = data.results.map( ( pokemon, index ) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ index + 1 }.svg`
  }))

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;
