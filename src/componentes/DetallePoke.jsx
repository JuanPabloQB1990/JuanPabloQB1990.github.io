import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {PokeDetalleAccion} from '../redux/pokeDucks'
import "../Home/styles/DetallePoke.css"
import {useEffect} from 'react'

const DetallePoke = () => {



    const dispatch = useDispatch()

    useEffect(() => {
        const fetchData = () => {
            dispatch(PokeDetalleAccion())
        }

        fetchData()

    }, [dispatch]);

    const pokemon = useSelector(store => store.pokemonesApi.unPokemon)

    return pokemon ? (
        <>
            <div className="modal-dialog">
                <div className={`modal-content card_poke ${pokemon.tipoPoke[0].type.name}`}>
                    <div className="modal-header">
                        <h4 className=" nombre-poke modal-title text-uppercase text-center" id="exampleModalLabel">{pokemon.nombre}</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="estadisticas">
                            <h5>
                                {pokemon.estadisticas.map((el,index)=>{
                                    return (<p key={index}>{el.stat.name}: {el.base_stat}</p>)
                                })}
                            </h5>
                        </div>
                    <img src={pokemon.foto} alt="pokemon" className="imagen-poke"/>
                    <h5 className="tipo">{pokemon.tipoPoke.map((tipo,index)=>{
                        return (<p key={index}>{tipo.type.name}</p>)})}
                    </h5>
                        
                    </div>
                    
                </div>
            </div>
        </>
    ) : null
                
                
}

export default DetallePoke