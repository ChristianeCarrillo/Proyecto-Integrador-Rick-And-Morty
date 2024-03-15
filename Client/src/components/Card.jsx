import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addFav, removeFav } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

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

/* export default function Card(props) {
   return (
      <CardContainer>
         <CloseButton onClick={props.onClose}>X</CloseButton>
         <CardHeading>{props.name}</CardHeading>
         <CardText>{props.status}</CardText>
         <CardText>{props.species}</CardText>
         <CardText>{props.gender}</CardText>
         <CardText>{props.origin.name}</CardText>
         <CardImage src={props.image} alt='' />
      </CardContainer>
   );
} */


//de igual forma se puede deconstruir el argumento exportado en lugar de poner props, ejemplo:
export default function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const [isFav, setIsFav] = useState(false);

   const dispatch = useDispatch();
   const myFavorites = useSelector((state)=>state.myFavorites);

   const myChar = {
      name: name,
      gender: gender,
      species: species,
      id: id,
      image: image,
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(removeFav(id)) //mandar id de personaje como argumento
      } else {
         setIsFav(true);
         dispatch(addFav(myChar)) //mandar personaje como arg
      }
   }
   return (
      <CardContainer>
         <CloseButton onClick={() => (onClose(id))}>X</CloseButton>
         {/* BTN DE FAV */}
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <Link to={`/detail/${id}`}>
            <CardHeading>{name}</CardHeading>
         </Link>
         <CardText>{status}</CardText>
         <CardText>{species}</CardText>
         <CardText>{gender}</CardText>
         <CardText>{origin.name}</CardText>
         <CardImage src={image} alt='' />
      </CardContainer>
   );
}
