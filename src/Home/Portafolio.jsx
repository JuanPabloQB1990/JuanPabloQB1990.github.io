import React from 'react'
import "./styles/Portafolio.css"
import imagenFondo from "./img/52743.jpg"
import foto from "./img/Foto.jpg"
import imagen1 from "./img/imagen1.jpg"
import imagen2 from "./img/pokeapi.jpg"
import imagen3 from "./img/React.png"
import habilidades from "./img/habilidaes.jpg"
import htmlFoto from "./logos/html.png"
import cssFoto from "./logos/css.png"
import javascriptFoto from "./logos/javascript.jpg"
import reactFoto from "./logos/react.png"
import bootstrapFoto from "./logos/bootstrap.png"
import sassFoto from "./logos/Sass.png"
import phpFoto from "./logos/php.jpg"
import mysqlFoto from "./logos/MySQL.png"

function mostrarScroll(){
        let card = document.querySelectorAll(".animado");
        let scrollTop = document.documentElement.scrollTop;
        for (var i = 0; i < card.length; i++){
            let alturaCard = card[i].offsetTop;
            
            if(alturaCard - 550 < scrollTop) {
               card[i].style.opacity = 1;
               card[i].classList.add("mostrarArriba");
           }
        }

}
    
window.addEventListener('scroll', mostrarScroll)
    
const Portafolio = () => {

    let tituloPpal = {
        backgroundImage: `url(${imagenFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        height: "100vh",
        textAlign: "center",
        paddingTop:"1rem",
        color: "white",
        lineHeight: "5rem",
    }

return (
<div>
    <main className="slides container-all" >
    <section className="slide container-title" style={tituloPpal}>
        <h1 className="title-1">
            <span>H</span>
            <span>o</span>
            <span>l</span>
            <span>a</span>
            <span>,</span>
            <span> </span>
            <span>s</span>
            <span>o</span>
            <span>y</span>
            <span> </span>
            <span>J</span>
            <span>u</span>
            <span>a</span>
            <span>n</span>
            <span> </span>
            <span>P</span>
            <span>a</span>
            <span>b</span>
            <span>l</span>
            <span>o</span>
            <span>.</span>
            <span>.</span>
            <span>.</span>
        </h1>
        <h2 className="title-2">
            <span>D</span>
            <span>e</span>
            <span>s</span>
            <span>a</span>
            <span>r</span>
            <span>r</span>
            <span>o</span>
            <span>l</span>
            <span>l</span>
            <span>a</span>
            <span>d</span>
            <span>o</span>
            <span>r</span>
            <span> </span>
            <span>W</span>
            <span>e</span>
            <span>b</span>
        </h2>
        <figure className="card-foto">
            <img src={foto} alt="foto"/>
        </figure>
    </section>
    <section className="slide briefcase">
        <h2 className="title">Proyectos</h2>
        <div className="container__card">
            <div className="card__father">
                <div className="card ">
                    <div className="card__front" style={{backgroundImage: `url(${imagen1})`}}>
                        <div className="bg"></div>
                        <div className="body__card_front">
                            <h1>Lista de Tareas</h1>
                        </div>
                    </div>
                    <div className="card__back" style={{backgroundColor: '#00BFFF'}}>
                        <div className="body__card_back">
                            <h1>Lista de Tareas</h1>
                            <p>Esta es una Aplicación para crear, modificar y eliminar tareas con su fecha y hora respectiva de creación.</p>
                            <a href="/admin" rel="noreferrer">Tareas</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card__father">
                <div className="card">
                    <div className="card__front" style={{backgroundImage: `url(${imagen2})`, backgroundPosition:"cover"}}>
                        <div className="bg"></div>
                        <div className="body__card_front">
                            <h1>API de Pokemons</h1>
                        </div>
                    </div>
                    <div className="card__back" style={{backgroundColor: '#00BFFF'}}>
                        <div className="body__card_back">
                            <h1>Pokemons</h1>
                            <p>Esta es una Aplicación de Pokemons haciendo peticion hacia una PokeAPI.</p>
                            <a href="/pokemones" rel="noreferrer">Pokemons</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card__father">
                <div className="card">
                    <div className="card__front" style={{backgroundImage: `url(${imagen3})`}}>
                        <div className="bg"></div>
                        <div className="body__card_front">
                            <h1>React</h1>
                        </div>
                    </div>
                    <div className="card__back" style={{backgroundColor: '#00BFFF'}}>
                        <div className="body__card_back">
                            <h1>Codigo React</h1>
                            <p>haz click en este link y podras ver el codigo del proyecto hecho con la libreria de React.</p>
                            <a href="https://github.com/JuanPabloQB1990/CrudFetch" rel="noreferrer" target="_blank">Github</a>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
        <section className="slide aboutMe">
            <h2 className="title">Acerca de mi</h2>
            <figure className="card-image">
                <img src={habilidades} alt="foto"/>
            </figure>
            <p className="animado">Mi nombre es Juan Pablo Quintero, actualmente cursando la carrera tecnológica de Análisis y Desarrollo de Sistemas de Información, con un gran deseo y anhelo de iniciarme en esta gran artistica y maravillosa carrera. Me caracterizo por grandes capacidades de resolución en problemas dentro del área en que me desempeño. Soy una persona Proactiva y Comprometida con los deberes asignados, responsable, puntual, creativa y con muy buena disposición para cualquier tarea que se me asigne. Laboralmente me he destacado como Técnico en Mantenimiento de PC y tengo 4 años de experiencia este campo.</p>
            <a download="hoja-de-vida" href="./Hoja de vida 2022.pdf"><button className="btn-cv"type="submit">Descarga mi CV</button></a>
        </section>

        <section className="slide skills">
            <h2 className="title">Habildades</h2>
            <p>Mis actuales habilidades como desarrollador en formación son en el lado del Frontend, cuento con certificados de UdeMY nivel avanzado en HTML5, CSS, JavaScript y React</p>
            <figure className="images">
                <div className="logos">
                    <img src={htmlFoto} alt="foto"/>
                    <p>HTML</p>
                </div>
                <div className="logos">
                    <img src={cssFoto} alt="foto"/>
                    <p>CSS</p>
                </div>
                <div className="logos">
                    <img src={javascriptFoto} alt="foto"/>
                <p>JavaScript</p>
                </div>
                <div className="logos">
                    <img src={reactFoto} alt="foto"/>
                <p>React</p>
                </div>
                <div className="logos">
                    <img src={bootstrapFoto} alt="foto"/>
                    <p>Bootstrap</p>
                </div>
                <div className="logos">
                    <img src={sassFoto} alt="foto"/>
                    <p>Sass</p>
                </div>
                <div className="logos">
                    <img src={phpFoto} alt="foto"/>
                    <p>PHP</p>
                </div>
                <div className="logos">
                    <img src={mysqlFoto} alt="foto"/>
                    <p>MySQL</p>
                </div>
            </figure>
        </section>
        <section className="slide footer">
            <h2 className="title">Encuentrame también aquí</h2>
            <div className="icons">
                <a className="icon" href="https://www.facebook.com/" rel="noreferrer" target="_blank"><i className="bi bi-facebook"></i></a>
                <a className="icon" href="https://www.instagram.com/juan_04041990/?hl=es-la" rel="noreferrer" target="_blank"><i className="bi bi-instagram"></i></a>
                <a className="icon" href="https://www.linkedin.com/in/juan-pablo-77a18b233/" rel="noreferrer" target="_blank"><i className="bi bi-linkedin"></i></a>
                <a className="icon" href="https://github.com/JuanPabloQB1990" rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                <a className="icon" href="https://api.whatsapp.com/send?phone=573243128049&text=Hola, escribeme al Whatsapp" rel="noreferrer" target="_blank"><i className="bi bi-whatsapp"></i></a>
            </div>
            <h3>Soy Juan Pablo Quintero, y esta pagina fue creada en base a mis propios conocimientos. Hecha con todo el <span className="span"></span> </h3>
        </section>
    </main>
</div>
  )
}

export default Portafolio