import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { getPokemon, getPokemonByID, getSpecificPokemon } from "./api";
import AllPokemon from './pages/pokemon-all';
import Pokemon from './pages/pokemon';
import ErrorPage from './pages/error';
import 'bootstrap/dist/css/bootstrap.min.css';
import IdPokemon from './pages/pokemon-id';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AllPokemon />,
    errorElement: <ErrorPage />,
    loader:() => {
      return getPokemon();
    }
  },
  {
    path: "/pokemon/:name",
    element: <Pokemon />,
    errorElement: <ErrorPage />,
    loader: ({ params }) => {
      const pokemonName = params.name;

      return getSpecificPokemon(pokemonName);
    }
  },
  {
    path: "/pokemon/:id",
    element: <IdPokemon />,
    loader: ({ params }) => {
      return getPokemonByID(params.id)
    }
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
