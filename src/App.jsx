import React, {useState, useEffect} from 'react';
import NavBar from './componentes/Navbar';
import Login from './componentes/Login';
import Admin from './componentes/Admin';
import Reset from './componentes/Reset';
import Portafolio from './Home/Portafolio';
import Contactame from './Home/Contactame';
import {auth} from './firebase'
import Estudios from './Home/Estudios';
import Pokemones from './componentes/Pokemones';
import generateStore from './redux/store'
import {Provider} from 'react-redux'

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Skills from './componentes/Skills';
import AboutMe from './componentes/AboutMe';


function App() {

  const [firebaseUser, setFirebaseUser] = useState(false);

  useEffect(() => {
      auth.onAuthStateChanged(user => {
        console.log(user)
        if(user){
          setFirebaseUser(user);
        }else{
          setFirebaseUser(null);
        }
      })
  }, []);

  const store = generateStore();

  const RutaPrivada = ({component, path, ...rest}) => { 
    
    if (localStorage.getItem('usuario')) {
      const usuarioStorage = JSON.parse(localStorage.getItem('usuario'))
      console.log(usuarioStorage.uid)
      if (usuarioStorage.uid === firebaseUser.uid){
        return <Route component={component} path={path} {...rest} />
      }else{
        return <Redirect to="/login" {...rest}/>
      }

    }else{
      return <Redirect to="/login" {...rest}/>
    }

  }

  return firebaseUser !== false ? (
    
    <Router>
      <div>
      <Provider store={store}>
          <NavBar firebaseUser={firebaseUser}/>
      </Provider>
        
        
          <Switch>
            <Route path="/contactame">
              <Contactame/>
            </Route>
            <Route component={Estudios} path="/estudios"/>
            <Route component={Skills} path="/skills"/>
            <Route component={AboutMe} path="/aboutMe"/>
          <Provider path="/login" store={store}>
            <Login/>
          </Provider>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/reset">
            <Reset />
          </Route>
          <RutaPrivada component={Portafolio} path="/portafolio" />
          <div className="container mt-3">
          <Provider store={store}>
            <Pokemones/>
          </Provider>

          </div>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  )
}

export default App;
