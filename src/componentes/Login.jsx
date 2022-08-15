import React, {useState} from 'react'
import {auth, db} from "../firebase"
import {withRouter} from 'react-router-dom'

const Login = (props) => {

const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

const [error, setError] = useState(null);
const [registro, setRegistro] = useState(false);


  const registrarDatos = (e) => {
    e.preventDefault();

    if(!email.trim()) {
      setError('ingrese Email')
      return
    }

    if(!pass.trim()) {
      setError('ingrese password')
      return
    }

    if(pass.length < 6) {
      setError('ingrese password mayor a 6 caracteres')
      return
    }

    setError(null)

    if(registro) {

      registrar()
    }else{
      Login()
    }

    setError(null)
    setPass("")
    setEmail("")
  }

  // login de usuario

  const Login = React.useCallback (async () => {
    try {
      const res = await auth.signInWithEmailAndPassword(email, pass)
      console.log(res.user)

      setError(null)
      setPass("")
      setEmail("")

      localStorage.setItem('usuario', JSON.stringify({
        uid: res.user.uid,
        name: res.user.displayName,
        email: res.user.email,
        photo: res.user.photoURL
    }))

      props.history.push('/portafolio')

    } catch (error) {
      console.log(error.code)
      if(error.code ==="auth/invalid-email") {
        setError("Email no valido")
      }
      if(error.code ==="auth/user-not-found") {
        setError("Email no registrado")
      }
      if(error.code ==="auth/wrong-password") {
        setError("Contraseña incorrecta")
      }

      

    }
  },[email, pass, props.history])


  

  const registrar = React.useCallback (async () => { 
      try {
            const res = await auth.createUserWithEmailAndPassword(email, pass)
            //console.log(res.user)
            await db.collection("usuarios").doc(res.user.email).set({
              email: res.user.email,
              uid: res.user.uid
            })

            localStorage.setItem('usuario', JSON.stringify({
              uid: res.user.uid,
              email: res.user.email
          }))

          

            setError(null)
            setPass("")
            setEmail("")

            localStorage.setItem('usuario', JSON.stringify({
              uid: res.user.uid,
              name: res.user.displayName,
              email: res.user.email,
              photo: res.user.photoURL
          }))

            props.history.push('/portafolio')

      } catch (error) {
        
        //console.log(error.code)

        if(error.code ==="auth/invalid-email") {
          setError("Email no valido")
        }

        if(error.code === "auth/email-already-in-use") {
          setError("Este Email ya esta registrado")
        }

      }
  }, [email, pass,  props.history])

  return (
    <div className="mt-5">
        <h2 className="text-center">{registro ? "Registro de Usuario" : "Inicio Sesión"}</h2>
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
                    <input 
                    type="password" 
                    className="form-control mb-2" 
                    placeholder='ingrese un Password'
                    name="password"
                    onChange={(e)=>setPass(e.target.value)}
                    value={pass}
                    />
                    <button 
                    type="submit"
                    className="btn btn-dark btn-lg w-100 mb-2">
                      {registro ? "Registrarse":"Ingresar"}
                    </button>
                    <button 
                    className="btn btn-info btn-sm w-100"
                    type="button"
                    onClick={()=> setRegistro(!registro)}
                    >
                      {registro ? "¿Ya estas registrado?" : "¿No tienes cuenta?"}
                    </button>
                    {
                      !registro ? (
                        <button
                          className="btn btn-lg btn-danger btn-sm mt-2"
                          type="button"
                          onClick={()=> props.history.push('/reset')}
                        >
                          Recuperar Contraseña
                        </button>
                      ) : null
                    }
                </form>
            </div>
        </div>
    </div>


  )
}

export default withRouter(Login)