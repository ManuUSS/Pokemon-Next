import { pokeApi } from "api";
import { PokemonResponse } from "types";

export const getPokemonInfo = async ( nameOrdId: string ) => {

    const { data } = await pokeApi.get<PokemonResponse>(`/pokemon/${ nameOrdId }`);
    
     
    return {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }


}
