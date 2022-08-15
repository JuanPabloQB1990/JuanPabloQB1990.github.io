import React from 'react'
import './styles/Estudios.css'
import css from "./Certificados/curso css.JPG"
import html from "./Certificados/curso html.JPG"
import js from "./Certificados/curso javascript.JPG"
import certiCSS from "./Certificados/Certificado CSS.pdf"
import certiHTML from "./Certificados//Certificado HTML.pdf"
import certiJS from "./Certificados/Certificado Javascript.pdf"
import Button from 'react-bootstrap/Button';

const Estudios = () => {

    let tituloEstudios = {
        textAlign: "center",
        paddingTop: "4rem",
        fontSize:"5rem",
        textShadow: "5px 5px 7px black",
        color:"rgb(59, 137, 246)",
    }

  return (
    <div className="font-estudios">
    <h1 style={tituloEstudios}>Estudios</h1>
    <section className="container-edu">
        <div className="certificados">
            <img src={css} alt="css"/>
            <a rel="noreferrer" download="certificado CSS" href={certiCSS}><Button size="lg" className="btn btn-primary "type="submit">Descargar <i className="bi bi-download"></i></Button></a>
        </div>
        <div className="certificados">
            <img src={html} alt="html"/>
            <a rel="noreferrer" download="certificado HTML" href={certiHTML}><Button size="lg" className="btn btn-primary"type="submit">Descargar <i className="bi bi-download"></i></Button></a>
        </div>
        <div className="certificados">
            <img src={js} alt="js"/>
            <a rel="noreferrer" download="certificado JavaScript" href={certiJS}><Button size="lg"  className="btn btn-primary"type="submit">Descargar <i className="bi bi-download"></i></Button></a>
        </div>
        <div className="certificados">
            <img src={js} alt="js"/>
            <a rel="noreferrer" download="certificado JavaScript" href={certiJS}><Button size="lg"  className="btn btn-primary"type="submit">Descargar <i className="bi bi-download"></i></Button></a>
        </div>
        <div className="certificados">
            <img src={js} alt="js"/>
            <a rel="noreferrer" download="certificado JavaScript" href={certiJS}><Button size="lg"  className="btn btn-primary "type="submit">Descargar <i className="bi bi-download"></i></Button></a>
        </div>
        
    </section>
    </div>
  )
}

export default Estudios