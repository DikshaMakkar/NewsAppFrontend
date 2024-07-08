import { useState } from "react";
import '../components/Navbar.css';

const Navbar = ({onSearchChange}) => {
    const[searchKeyword, setSearchKeyword] = useState("");
    
    const handleInputChange = (event) => {
        setSearchKeyword(event.target.value.toLowerCase());
        onSearchChange(searchKeyword);
    }

    return(
        <nav className="Navbar">
            <a href="/" className="app-name"> NewsApp</a>
            <input className="search-input" type="text" placeholder="Seach here..." value={searchKeyword} onChange={handleInputChange} />
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/">Guardian News</a></li>
                <li><a href="/">New York Times</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
