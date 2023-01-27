import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2";

export const getPokemon = async() => {
    try{
        const apiResponse = await axios.get(`${API_URL}/pokemon`);
        
        const data = apiResponse.data;

        return data;
    } catch(e){
        console.log(e);
        return "Failed to fetch pokemon"
    }
}

export const getSpecificPokemon = async (name) => {
    try{
        const apiResponse = await axios.get(`${API_URL}/pokemon/${name}`);
        
        const data = apiResponse.data;

        return data;
    } catch(e){
        console.log(e);
        return "Failed to fetch a pokemon"
    }
}

export const getPokemonByID = async (id) => {
    try{
        const apiResponse = await axios.get(`${API_URL}/pokemon/${id}`);
        
        const data = apiResponse.data;

        return data;
    } catch(e){
        console.log(e);
        return "Failed to fetch a pokemon"
    }
}