import { useLoaderData, Link } from "react-router-dom";

export default function AllPokemon(){
    const pokeData = useLoaderData();
    console.log(pokeData);

    return (
        <div>
        {
            pokeData ?
            <ul>
                {
                    pokeData.results.map((pokemon) =>(
                        <li>
                            <Link to={`/pokemon/${pokemon.name}`}>
                                {pokemon.name}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            :
            <div>Pokemon data is still loading</div>
        }
        </div>
    )
}