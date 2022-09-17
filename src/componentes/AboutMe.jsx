import habilidades from "../Home/img/habilidaes.jpg"
import '../Home/styles/aboutMe.css'
import HojadeVida from './HojadeVida2022.pdf'

const AboutMe = () => {
  return (
    <section className="slide aboutMe">
            <h2 className="title">Acerca de mi</h2>
            <figure className="card-image">
                <img src={habilidades} alt="foto"/>
            </figure>
            <p>Mi nombre es Juan Pablo Quintero, actualmente cursando la carrera tecnológica de Análisis y Desarrollo de Sistemas de Información, con un gran deseo y anhelo de iniciarme en esta gran artistica y maravillosa carrera. Me caracterizo por grandes capacidades de resolución en problemas dentro del área en que me desempeño. Soy una persona Proactiva y Comprometida con los deberes asignados, responsable, puntual, creativa y con muy buena disposición para cualquier tarea que se me asigne. Laboralmente me he destacado como Técnico en Mantenimiento de PC y tengo 4 años de experiencia este campo.</p>
            <a rel="noreferrer" href={HojadeVida} download="Hoja de Vida 2022" ><button className="btn-cv"type="submit">Descarga mi CV</button></a>
    </section>
  )
}

export default AboutMe