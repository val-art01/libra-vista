// import React, {useState} from 'react';
// import axios from 'axios';
// import SearchResults from "./SearchResults.tsx";
//
// const Search = () => {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [searchResults, setSearchResults] = useState([]);
//
//     const handleSearch = async () => {
//       try {
//           const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
//           setSearchResults(response.data.docs);
//           // setSearchResults(response.data.docs.map(book => ({
//           //     title: book.title,
//           //     author: book.author ? book.author_name[0] : 'Unknown',
//           //     published_date: book.published_date || 'Unknown',
//           //     summary: book.summary ? 'Full text available' : 'Summary not available',
//           //     genre: book.subject ? book.subject.join(', ') : 'Unknown',
//           //     cover_image_url: book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : null
//           // })))
//       }catch (error) {
//           console.error('Error fetching search results:', error);
//       }
//     };
//
//     return (
//         <div>
//             <input
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//
//             <div>
//                 <SearchResults results={searchResults} />
//                 {/*{searchResults.map(book => (*/}
//                 {/*    <div key={book.title}>*/}
//                 {/*        <h2>{book.title}</h2>*/}
//                 {/*        <p>Author: {book.author}</p>*/}
//                 {/*        <p>Published Date: {book.published_date}</p>*/}
//                 {/*        <p>Summary: {book.summary}</p>*/}
//                 {/*        <p>Genre: {book.genre}</p>*/}
//                 {/*        {book.cover_image_url && <img src={book.cover_image_url} alt="Book Cover"/>}*/}
//                 {/*    </div>*/}
//                 {/*))}*/}
//             </div>
//         </div>
//     )
// };
// export default Search;