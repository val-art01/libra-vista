import React, {useState} from "react";
import "./../assets/css/hero.css"
import {searchBooks} from "./../services/api.tsx"
import Heading from "./../contexts/Heading.tsx";

interface SearchBarProps {
    onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) =>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault(); // Empêcher le formulaire de se soumettre normalement

        try {
            const books = await searchBooks(searchTerm)
            console.log(searchTerm)
            onSearch(books);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    }

    return(
        <>
            <section className='hero'>
                <div className="container">
                    <Heading title="Search your next Home" subtitle="Find new & featured property locoted in your local city"/>
                    <form onSubmit={handleSearch} className="flex">
                        {/*<div className="box">*/}
                        {/*    <span>Categories</span>*/}
                        {/*<select>*/}
                        {/*    <option selected>Open this select menu</option>*/}
                        {/*    <option value="1">Tout</option>*/}
                        {/*    <option value="2">titre</option>*/}
                        {/*    <option value="3">auteur</option>*/}
                        {/*    <option value="4">texte</option>*/}
                        {/*    <option value="5">theme </option>*/}
                        {/*</select>*/}
                        {/*</div>*/}
                        <div className="box">
                            <span>search</span>
                            <input type='text' placeholder="Search for books..." value={searchTerm}
                                   onChange={(e) => setSearchTerm(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn">
                            <i className="fa fa-search"></i>
                        </button>
                    </form>
                </div>
            </section>
        </>
    );
}
export default SearchBar;