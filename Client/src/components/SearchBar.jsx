import { useState } from "react";
import styled from "styled-components";

const BarraBusqueda = styled.div`
background-color: rgba(255, 255, 255, 0.5);
backdrop-filter: blur(5px);
padding: 5px;
`

const AgregarButton = styled.button`
border: none;
border-radius: 5px;
margin-left: 1px;
cursor: pointer;
box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleInputChange = (e) => {
      setId(e.target.value);
   }

   console.log( onSearch)
   return (
      <BarraBusqueda>
         <input type='search' value={id} onChange={handleInputChange}/>
         <AgregarButton onClick={()=>onSearch(id)}>Agregar</AgregarButton>
      </BarraBusqueda>
   );
}
