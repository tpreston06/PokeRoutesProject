import { useLoaderData, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { Image, Badge, Container } from "react-bootstrap";

export default function Pokemon(){
    const pokemonData = useLoaderData();

    console.log(pokemonData);

    return (
        <Container>
            <Link to={`/`}><Button>Home</Button></Link>
            <p>Name: {pokemonData.name}</p>
            <p>Weight: {pokemonData.weight}lbs</p>
            <ul>Abilities: {pokemonData.abilities.map((ability) => (
                <li>{ability.ability.name}</li>
            )
            )}</ul>
            {pokemonData.types.map((pokemonType) => (
                <Badge>{pokemonType.type.name}</Badge>
            ) )}
            <p>Sprites: <Image src={pokemonData.sprites.front_default} /></p>
            <Link to={`/pokemon/${pokemonData.id-1}`}><Button>Previous</Button></Link>
            <Link to={`/pokemon/${pokemonData.id+1}`}><Button>Next Pokemon</Button></Link>
        </Container>
    )
}