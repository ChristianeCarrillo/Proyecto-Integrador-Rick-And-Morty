import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
width: 250px;
padding: 16px;
border: 1px solid #ddd;
border-radius: 8px;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(10px);
margin: 16px;
text-align: center;
position: relative;
`;

const CloseButton = styled.button`
border: none;
border-radius: 99px;
height: 25px;
width: 25px;
text-align: center;
background-color: #dfe4ed;
cursor: pointer;
color: #2a2c2e;
position: absolute;
right: 8px;
top: 8px;
`;

const CardHeading = styled.h2`
margin-top: 12px;
`;

const CardText = styled.h3`
margin-top: 12px;
`;

const CardImage = styled.img`
width: 100%;
border-radius: 4px;
margin-top: 12px;
`;

export default function Detail() {
    //crear estado local
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    //toma la informacion apartir del ID del API
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
            ({ data }) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            }
        );
        return setCharacter({});
    }, [id]);

   return (
      <CardContainer>
         {/* <CloseButton onClick={() => (onClose(id))}>X</CloseButton> */}
         <CardHeading>{character.name}</CardHeading>
         <CardText>{character.status}</CardText>
         <CardText>{character.species}</CardText>
         <CardText>{character.gender}</CardText>
         <CardText>{character.origin?.name}</CardText>  
         <CardImage src={character.image} alt='' />
      </CardContainer>
   );
}
