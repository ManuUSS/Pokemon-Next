import { useRouter } from "next/router";
import { SmallPokemon } from 'types';


interface Props {
    pokemon: SmallPokemon
}

const PokemonDetail = () => {

    const { query } = useRouter();

  return (
    <div>PokemonDetail</div>
  )
}

export default PokemonDetail;