import styled,{keyframes} from 'styled-components';

const StatsPoke = ({data}) => {

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
        100%{width: ${data.base_stat}%};
    `;

    const Progreso = styled.div`
        width: ${data.base_stat}%;
        height:100%;
        background-color: black;
        border-radius: 10px;
        animation: ${anime} 5s ease;
        text-align: center;
    `;

    
  return (
    <div style={{display: "flex"}}>
        <p>{data.stat.name}: {data.base_stat}</p>
        <Barra className="barra">
            <Progreso className="progreso"><span>{data.base_stat} %</span></Progreso>
        </Barra>
    </div>
  )
}

export default StatsPoke