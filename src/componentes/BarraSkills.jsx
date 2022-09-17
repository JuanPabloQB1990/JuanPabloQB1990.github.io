import styled,{keyframes} from 'styled-components';

const BarraSkills = ({width}) => {

    const Barra = styled.div`
        margin: auto;
        width: 200px;
        height:20px;
        background-color: rgba(255,255,255,0.5);
        border-radius: 10px;
        box-shadow: 20px 25px 45px rgba(0,0,0,0.4)
    `;

    const anime = keyframes`
        0%{width: 20%};
        100%{width: ${width}%};
    `;

    const Progreso = styled.div`
        width: ${width}%;
        height:100%;
        background-color: red;
        border-radius: 10px;
        animation: ${anime} 5s ease;
        text-align: center;
    `;

    

  return (
    <Barra className="barra">
        <Progreso className="progreso"><span styled={{padding:"5px"}}>{width} %</span></Progreso>
    </Barra>
    
  )
}

export default BarraSkills