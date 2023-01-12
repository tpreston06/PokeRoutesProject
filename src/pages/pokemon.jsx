import { useLoaderData } from "react-router-dom";
import Button from 'react-bootstrap/Button';

export default function Pokemon(){
    const pokemonData = useLoaderData();

    console.log(pokemonData);

    return (
        <div>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}lbs</p>
            <ul>Abilities: {pokemonData.abilities.map((ability) => (
                <li>{ability.ability.name}</li>
            )
            )}</ul>
            <p>Sprites: <img src={pokemonData.sprites.front_default} /></p>
            <Button>Button</Button>
        </div>
    )
}