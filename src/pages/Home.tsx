import {useState} from 'react';
import SearchBar from "../components/SearchBar.tsx";
import Result from "../components/books/Result.tsx";

const Home = () => {
    const [searchResults, setSearchResults] = useState<BookType[]>([]);

    const handleSearch = (results: BookType[]) => {
        // console.log(`searchResults: ${searchResults}`)
        setSearchResults(results);
    };

    return(
        <>
            <SearchBar onSearch={handleSearch}/>
            <Result searchResults={searchResults}/>
        </>
    );
};

export default Home;