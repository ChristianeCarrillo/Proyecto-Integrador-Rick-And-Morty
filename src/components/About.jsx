import styled from "styled-components";

const Contenedor = styled.div`
padding: 16px;
border: 1px solid #ddd;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
margin: 16px;
text-align: center;
position: relative;
color: white;
`

export default function About({}){
    return (
        <Contenedor>
            <h1>ESTO ES EL ABOUT!!!</h1>
        </Contenedor>
    );
}