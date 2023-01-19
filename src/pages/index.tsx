import { FC } from "react"
import { GetStaticProps } from "next";
import { pokeApi } from "api";
import { PokemonListResponse, SmallPokemon } from "types";
import { Layout } from "components/layouts";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { PokemonCard } from "components/pokemon/PokemonCard";
import { PokemonList } from "components/pokemon";

interface Props {
  pokemons: SmallPokemon[]
}

const HomePage: FC<Props> = ({ pokemons }) => {
  return (
    <Layout
      title="Listado de pokemons"
    >
      <PokemonList pokemons={ pokemons } />   
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
