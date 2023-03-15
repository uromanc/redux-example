import { pokemonAPI } from '../../../api/pokemonAPI'
import { setPokemons, startLoadingPokemons } from './pokemonSlice'

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons())

    // -- fetch pokemon api
    // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
    // const data = await resp.json()
    // console.log(data)
    // dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))

    // -- axios pokemon api
    const { data } = await pokemonAPI.get(`/pokemon?limit=10&offset=${page * 10}`)
    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }))
  }
}