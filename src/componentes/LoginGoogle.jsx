import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {ingresoUsuarioAccion} from '../redux/UsuarioDucks'
import {withRouter} from 'react-router-dom'

const LoginGoogle = (props) => {
    

const dispatch = useDispatch()

const Loading = useSelector(store => store.usuario.loading)
const activo = useSelector(store => store.usuario.activo)


useEffect(() => {
    if(activo){
        props.history.push('/portafolio')
    }
}, [activo, props.history]);
  return (
    <>

    <div className="mt-5 text-center">
        <h2>Ingreso con Google</h2>
        <hr />
        <button 
        className="btn btn-primary"
        onClick={()=>dispatch(ingresoUsuarioAccion())}
        disabled={Loading}
        >Acceder</button>
    </div>
    
    </>
  )
}

export default withRouter(LoginGoogle)