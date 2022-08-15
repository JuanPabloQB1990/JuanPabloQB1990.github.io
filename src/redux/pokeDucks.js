import axios from 'axios'

//constantes   
const dataInicial = {
    count:0,
    next: null,
    results: [],
    previous: null
}

// TIPOS DE ACCIONES
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO";
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO";
const POKE_INFO_EXITO= "POKE_INFO_EXITO";


//reducer   

export default function pokeReducer(state=dataInicial, action) {
    switch (action.type) {
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        
        case SIGUIENTE_POKEMONES_EXITO:
            return {...state, ...action.payload}

        case POKE_INFO_EXITO:
            return {...state, unPokemon: action.payload}
    
        default:
            return state
    }
}

//acciones   

export const obtenerPokemonesAccion = () => async(dispatch, getState) => {

    if(localStorage.getItem('offset=0')) {
        
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }

    try {
        
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        //console.log(res)
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: res.data
        })

        localStorage.setItem('offset=0',JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }
}

export const siguientePokemonesAccion = () => async(dispatch, getState) => {

    const next = getState().pokemonesApi.next;
    
    if(localStorage.getItem(next)) {
        
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {
        
        const res = await axios.get(next)
        dispatch({
            type:SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

        localStorage.setItem(next,JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonesAccion = () => async(dispatch, getState) => {

    const {previous} = getState().pokemonesApi

    if(localStorage.getItem(previous)) {
        
        dispatch({
            type:OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
        const res = await axios.get(previous)
        dispatch({
            type:SIGUIENTE_POKEMONES_EXITO,
            payload: res.data
        })

        localStorage.setItem(previous,JSON.stringify(res.data))

    } catch (error) {
        console.log(error)
    }

}

export const PokeDetalleAccion = (url= 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) => { 

    /* if (localStorage.getItem(url)){
        dispatch({
            type: POKE_INFO_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })
        return
    } */

    try {
        const res = await axios.get(url)
        
        
        
        dispatch({
            type: POKE_INFO_EXITO,
            payload: {
                nombre: res.data.name,
                foto:res.data.sprites.other.dream_world.front_default,
                tipoPoke: res.data.types,
                estadisticas: res.data.stats
            }
        })

        /* localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            ancho: res.data.weight,
            alto: res.data.height,
            foto:res.data.sprites.front_default,
            tipo: res.data.types[1].type.name ? res.data.types[1].type.name : res.data.types[0].type.name
        })) */
        
    } catch (error) {
        console.log(error)
    }
}