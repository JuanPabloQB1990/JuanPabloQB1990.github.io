import { combineReducers, applyMiddleware, compose} from 'redux'
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import pokeReducer from './pokeDucks'
import usuarioReducer,{ leerUsuarioActivoAccion} from './UsuarioDucks'

const rootReducer = combineReducers({
    pokemonesApi: pokeReducer,
    usuario:usuarioReducer
    
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) )
    leerUsuarioActivoAccion()(store.dispatch)
    return store
}