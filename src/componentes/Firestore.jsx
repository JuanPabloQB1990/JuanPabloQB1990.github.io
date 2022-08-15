import React, {useEffect, useState} from 'react'
import {db} from "../firebase"

import moment from 'moment'
import 'moment/locale/es'

const Firestore = (props) => {

const [tareas, setTareas] = useState([]);
const [tarea, setTarea] = useState("");
const [modoEdicion, seteModoEdicion] = useState(false);
const [id, setId] = useState("");
const [ultimo, setUltimo] = useState(null);
const [desactivar, setDesactivar] = useState(false);

useEffect(() => {
  
  const obtenerDatos = async() => {

    try {
        
        setDesactivar(true)
        const datos = await db.collection(props.user.uid)
        .limit(2)
        .orderBy('fecha')
        .get()
        
        const arrayData = datos.docs.map(doc => ({id: doc.id, ...doc.data() }))

        setUltimo(datos.docs[datos.docs.length - 1])
        setTareas(arrayData)

        const query = await db.collection(props.user.uid)
        .limit(2)
        .orderBy('fecha')
        .startAfter(datos.docs[datos.docs.length - 1])
        .get()
        if(query.empty){
          //console.log('no hay mas documentos')
          setDesactivar(true)
        }else{
          setDesactivar(false)
        }

    } catch (error) {
        console.log(error)
    }

  }
  obtenerDatos()

}, [props.user.uid]);

const siguiente = async() => { 
  //console.log("siguiente")
  
  try {
    const datos = await db.collection(props.user.uid)
        .limit(2)
        .orderBy('fecha')
        .startAfter(ultimo)
        .get()
        const arrayData = datos.docs.map(doc => ({id: doc.id, ...doc.data() }))
        setTareas([
          ...tareas,
          ...arrayData
        ])

        setUltimo(datos.docs[datos.docs.length - 1])

        const query = await db.collection(props.user.uid)
        .limit(2)
        .orderBy('fecha')
        .startAfter(datos.docs[datos.docs.length - 1])
        .get()
        if(query.empty){
          //console.log('no hay mas documentos')
          setDesactivar(true)
        }else{
          setDesactivar(false)
        }
        
  } catch (error) {
    
  }
}

const agregarTarea = async(e) => { 
  e.preventDefault()

  if (!tarea.trim()) {
    //console.log("esta vacio")
    return
  }

  try {
    
    const nuevaTarea = {
      name: tarea,
      fecha: Date.now()
    }

    const data = await db.collection(props.user.uid).add(nuevaTarea)
    setTareas([...tareas, {...nuevaTarea, id: data.id}])
    setTarea("")

  } catch (error) {
      console.log(error)
  }

}

const eliminarTarea = async (id) => {
  try {
        await db.collection(props.user.uid).doc(id).delete()
        const arrayFiltrado = tareas.filter(item => item.id !== id)
        setTareas(arrayFiltrado)

  } catch (error) {
    console.log(error)
  }
}

const activarEdicion = (item) => { 
    seteModoEdicion(true)
    setTarea(item.name)
    setId(item.id)
 }

const editarTarea = async(e) => { 
  e.preventDefault()

  if (!tarea.trim()) {
    console.log("esta vacio")
    return
  }

  try {
      
        await db.collection(props.user.uid).doc(id).update({
        name: tarea
      })

      const arrayEditado = tareas.map(item => (
        item.id === id ? {id: item.id, fecha: item.fecha, name: tarea} : item
      ))
      
      setTareas(arrayEditado)
      seteModoEdicion(false)
      setTarea("")
      setId("")

  } catch (error) {
    console.log(error)
  }
}

  return (

    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center">Lista de tareas</h2>
          <ul className="list-group">
            {
                tareas.map(item => (
                  <li className="list-group-item px-1 mt-2" key={item.id}><div>{item.name}<button 
                  className="btn btn-danger btn-sm float-end"
                  onClick={()=>eliminarTarea(item.id)}
                  >Eliminar</button></div>
                  
                  <div className="mt-2">{moment(item.fecha).format('LLL')}<button 
                  className="btn btn-warning btn-sm float-end mt-2"
                  onClick={()=>activarEdicion(item)}
                  >Editar</button></div>
                  </li>
                  
                ))
            }
          </ul>
          <button 
          className="btn btn-info w-100 mt-2"
          onClick={()=>siguiente()}
          disabled={desactivar}
          >Mostrar mas</button>
        </div>
        <div className="col-md-6">
          <h2>{modoEdicion ? "Editar tarea" : "Crear tarea"}</h2>
          <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>
            <input 
              type="text" 
              placeholder="ingrese tarea"
              className="form-control mb-2"
              onChange={e => setTarea(e.target.value)}
              value={tarea}
            />
            <button 
            className={modoEdicion ? "btn btn-warning w-100" : "btn btn-primary w-100"}
            type="submit"
            >{modoEdicion ? "Editar" : "Agregar"}</button>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default Firestore