import Card from './Card';
import styled from "styled-components";

const CardsContainer = styled.div`
height: 100%;
display: flex;
flex-wrap: wrap;
`

export default function Cards({characters, onClose}) {
   console.log(characters)
   return <CardsContainer>
      {
         characters.map(({id, name, status, species, gender, origin, image})=>
           <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={()=> onClose(id)}
         />
         )
      }
   </CardsContainer>;
}
