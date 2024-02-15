import { useSelector } from "react-redux";
import Card from "./Card";

export default function Favorites(){
    const myFavorites = useSelector((state)=>state.myFavorites);
    return(
        <div>
            {myFavorites?.map((fav)=>(
                <Card
                    id={fav.id} 
                    name={fav.name} 
                    status={fav.status}
                    species={fav.species} 
                    gender={fav.gender} 
                    origin={fav.origin} 
                    image={fav.image}
                />
            ))}
        </div>
    )
}