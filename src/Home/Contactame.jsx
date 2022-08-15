import React from 'react'
import "./styles/Contactame.css"

const Contactame = () => {

    let tituloContactame = {
    textAlign: "center",
    paddingTop: "1rem",
    fontSize:"3rem",
    textShadow: "5px 5px 7px black",
    color:"rgb(59, 137, 246)",
    }

  return (
    <div className="font-contactame">
    <h1 style={tituloContactame}>Contáctame</h1>
    <div className="container-contactame">
        <section className="info">
            <h2>Enviame un correo</h2>
            <p>Puedes contactarme también enviándome un correo, enviándome un mensaje si quieres emplearme u obtener mis servicios.</p>
            <h3><b>Teléfono:</b><small> (+57) 324 312 80 49</small></h3>
            <h3>Correo: <small>juanpabloqb1990@gmail.com</small></h3>
            <div className="free-socials">
                <div className="icons">
                    <a className="icon" href="https://www.facebook.com/" rel="noreferrer"  target="_blank"><i class="bi bi-facebook"></i></a>
                    <a className="icon" href="https://www.instagram.com/juan_04041990/?hl=es-la" rel="noreferrer"  target="_blank"><i class="bi bi-instagram"></i></a>
                    <a className="icon" href="https://www.linkedin.com/in/juan-pablo-77a18b233/" rel="noreferrer"  target="_blank"><i class="bi bi-linkedin"></i></a>
                    <a className="icon" href="https://api.whatsapp.com/send?phone=573243128049&text=Hola, escribeme al Whatsapp" rel="noreferrer" target="_blank"><i className="bi bi-whatsapp"></i></a>
                    <a className="icon" href="https://github.com/JuanPabloQB1990" rel="noreferrer" target="_blank"><i className="bi bi-github"></i></a>
                </div>
            </div>
        </section>

        <section className="container-form">
            <form className="contact-form" action="https://formsubmit.co/juanpabloqb1990@gmail.com" method="POST">
                <input name="nombre" type="text" placeholder="ingresa tu nombre"/>
                <input name="correo" type="email" placeholder="ingresa tu E-mail"/>
                <textarea name="mensaje" placeholder="escribe un Mensaje" rows="6"></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    </div>
    </div>
  )
}

export default Contactame