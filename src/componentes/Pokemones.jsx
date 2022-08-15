import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {obtenerPokemonesAccion, siguientePokemonesAccion, anteriorPokemonesAccion, PokeDetalleAccion} from '../redux/pokeDucks'
import DetallePoke from './DetallePoke'

const Pokemones = () => {

    let boton = {
        color: 'white',
        border:"none",
        borderRadius:"3px",
        margin:"1rem 1rem",
        backgroundColor:"black"
    }

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemonesApi.results)
    const next = useSelector(store => store.pokemonesApi.next)
    const previous = useSelector(store => store.pokemonesApi.previous)
    
  return (
    <div className="container d-flex flex-column flex-sm-row"> 
        <div className="lista w-100">

            <h1 className="text-center">Lista de Pokemones</h1> 

            <ul className="list-group mt-5">
                    {pokemones.map(item => (
                        <li key={item.name} className="list-group-item text-capitalize">{item.name}
                            <button 
                            type="button"
                            className="btn btn-sm float-end btn-info"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            onClick={()=>dispatch(PokeDetalleAccion(item.url))}
                            >Info</button>
                        </li>

                    ))}
            </ul> 
        
            {
                previous && <button style={boton} onClick={()=>dispatch(anteriorPokemonesAccion())}>Anterior</button>
            }
            {
                pokemones.length === 0 && <button style={boton} onClick={()=>dispatch(obtenerPokemonesAccion())}>Ver Pokemons</button>
            }
            
            {
                next && <button style={boton} onClick={()=>dispatch(siguientePokemonesAccion())}>Siguiente</button>
            }

        </div>
        
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
             <DetallePoke />
            </div>
            
        
        </div>
  )
}

export default Pokemones