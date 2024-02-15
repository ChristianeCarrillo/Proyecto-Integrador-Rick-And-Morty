import { Link } from "react-router-dom";
import SearchBar from "./SearchBar"

export default function Nav({ onSearch, link }) {
    console.log(onSearch)
    return (
        <div>
            <Link className={link} to='/home'>Home</Link>
            <Link className={link} to='/about'>About</Link>
            <SearchBar onSearch={onSearch} />
        </div>
    );
}