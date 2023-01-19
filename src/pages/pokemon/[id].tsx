import { pokeApi } from "api";
import { Layout } from "components/layouts";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { PokemonResponse } from 'types';


interface Props {
    pokemon: PokemonResponse
    
}

const PokemonDetail:NextPage<Props> = ({ pokemon }) => {

    const { query } = useRouter();

  return (
    <Layout title="Algún Pokemón">
        <h1>{ pokemon.name }</h1>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    
    const totalPokemons = [ ...Array( 151 ) ].map( ( value, index ) => `${ index + 1 }` );

    return {
        paths: totalPokemons.map( ( id ) => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id } = params as { id: string };

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ id }`);
    
    return {
        props: {
            pokemon: data
        }
    }
}

export default PokemonDetail;