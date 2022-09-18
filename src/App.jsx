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
          <Route exact path="/login" component={Login} store={store}/>
          <Route path="/contactame" component={Contactame}/>
          <Route component={Estudios} path="/estudios"/>
          <Route component={Skills} path="/skills"/>
          <Route component={AboutMe} path="/aboutMe"/>
          <Route path="/admin" component={Admin}/>
          <Route path="/reset" component={Reset}/>
          
          <RutaPrivada component={Portafolio} path="/portafolio" />
          <div className="container mt-3">
            <RutaPrivada path="/pokemones" component={Pokemones} store={store}/>
          </div>
        </Switch>
      </div>
    </Router>
  ) : (
    <p>Cargando...</p>
  )
}

export default App;
