import htmlFoto from "../Home/logos/html.png"
import cssFoto from "../Home/logos/css.png"
import javascriptFoto from "../Home/logos/javascript.png"
import reactFoto from "../Home/logos/react.png"
import bootstrapFoto from "../Home/logos/bootstrap.png"
import sassFoto from "../Home/logos/sass.png"
import nodeFoto from "../Home/logos/node.png"
import phpFoto from "../Home/logos/php.png"
import mysqlFoto from "../Home/logos/MySQL.png"
import styledComponents from "../Home/logos/styled-components.png"
import "../Home/styles/Skills.css"
import BarraSkills from './BarraSkills'


const Skills = () => {
  return (
    <div className="skills">
            <h2 className="title-skills">Habilidades</h2>
            <p>Mis actuales habilidades como desarrollador en formación son en el lado del Frontend, cuento con certificados de UdeMY nivel avanzado en HTML5, CSS, JavaScript y React</p>
            <figure className="images">
                <div className="logos">
                    <img src={htmlFoto} alt="foto"/>
                    <p>HTML</p>
                    <BarraSkills width={90}/>
                </div>
                <div className="logos">
                    <img src={cssFoto} alt="foto"/>
                    <p>CSS</p>
                    <BarraSkills width={80}/>
                </div>
                <div className="logos">
                    <img src={javascriptFoto} alt="foto"/>
                <p>JavaScript</p>
                <BarraSkills width={85}/>
                </div>
                <div className="logos">
                    <img src={reactFoto} alt="foto"/>
                <p>React</p>
                <BarraSkills width={60}/>
                </div>
                <div className="logos">
                    <img src={nodeFoto} alt="foto"/>
                    <p>Node</p>
                    <BarraSkills width={80}/>
                </div>
                <div className="logos">
                    <img src={phpFoto} alt="foto"/>
                    <p>PHP</p>
                    <BarraSkills width={45}/>
                </div>
                <div className="logos">
                    <img src={mysqlFoto} alt="foto"/>
                    <p>MySQL</p>
                    <BarraSkills width={50}/>
                </div>
                <div className="logos">
                    <img src={bootstrapFoto} alt="foto"/>
                    <p>Bootstrap</p>
                    <BarraSkills width={70}/>
                </div>
                <div className="logos">
                    <img src={sassFoto} alt="foto"/>
                    <p>Sass</p>
                    <BarraSkills width={40}/>
                </div>
                <div className="logos">
                    <img src={styledComponents} alt="foto"/>
                    <p>Styled-Components</p>
                    <BarraSkills width={55}/>
                </div>
            </figure>
        </div>
    
  )
}

export default Skills