import React, {useState} from 'react'
import {auth} from '../firebase'
import {withRouter} from 'react-router-dom'

const Reset = (props) => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    

    const registrarDatos = (e) => {
        e.preventDefault();
    
        if(!email.trim()) {
          setError('ingrese Email')
          return
        }
    
        setError(null)
        recuperar()
    }

    const recuperar = React.useCallback(async() => { 
        try {
            await auth.sendPasswordResetEmail(email)
            //console.log('correo enviado')
            props.history.push('/login')
        } catch (error) {
            //console.log(error.code)
            if(error.code ==="auth/user-not-found") {
                setError("Email no registrado")
              }
            
        }
     }, [email,props.history])

  return (
    <div className="mt-5">
        <h2 className="text-center">Recuperar Contraseña</h2>
        <hr />
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                <form onSubmit={registrarDatos}>
                  {
                      error ? (
                        <div className="alert alert-danger">
                          {error}
                        </div>
                      ) : null
                  }
                    <input 
                    type="email" 
                    className="form-control mb-2" 
                    placeholder='ingrese un Email'
                    name="email" 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    />
                    
                    <button 
                    type="submit"
                    className="btn btn-dark btn-lg w-100 mb-2">
                      Enviar Correo
                    </button>
                    
                </form>
            </div>
        </div>
    </div>
  )
  
}

export default withRouter(Reset)