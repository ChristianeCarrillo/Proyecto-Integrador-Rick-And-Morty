import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Cards from './components/Cards.jsx';
import characters, { Rick } from './data.js';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Detail from './components/Detail.jsx';
import Form from './components/Form.jsx';



function App() {

   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const { pathname } = useLocation();
   const [access, setAccess] = useState(false);
   const EMAIL = 'christiane@mail.com';
   const PASSWORD = '123456';

   //character = [] //memoria1

   function login(userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) => {
      //crea un nuevo arreglo sin el personaje
      const filteredState = characters.filter((char) => char.id !== id);
      setCharacters(filteredState)
   };

   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(
         (response) => {
            if (response.data.name) {
               setCharacters((oldChars) => [...oldChars, response.data]);
            } else {
               window.alert(`¡No hay personajes con ID: ${id}`);
            }
         }
      );
   };
   //character = [characterSearched] //memoria2

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>

            {/*FORM*/}
            <Route path='/' element={
               <Form login={login}/>
            }/>

            {/*HOME*/}
            <Route path='/home' element={
               <Cards characters={characters} onClose={onClose} />
            }/>

            {/*ABOUT*/}
            <Route path='/about' element={
               <About />
            }/>

            {/*DETAIL*/}
            <Route path='/detail/:id' element={
               <Detail />
            }/>
         </Routes>
         
         {/* <Card
            id={Rick.id}
            name={Rick.name}
            status={Rick.status}
            species={Rick.species}
            gender={Rick.gender}
            origin={Rick.origin.name}
            image={Rick.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
         /> */}
      </div>
   );
}

export default App;
