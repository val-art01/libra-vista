// import React from "react";
//
// interface SearchResultProps  {
//     "title": string;
//     "author": string;
//     "published_date": string;
//     "summary": string;
//     "genre": string[];
//     "cover_image_url": string; //"https://example.com/book1-cover.jpg"
// }
//
//
// interface SearchResultsProps {
//     results: SearchResultProps[];
// }
//
// const SearchResults: React.Fc<SearchResultsProps> = ({results}) => {
//     return (
//         <div className="search-results">
//             {results.map((result, index) => (
//                 <div key={index}>
//                     <h2>{result.title}</h2>
//                     <p>Author: {result.author}</p>
//                     <p>Published Date: {result.published_date}</p>
//                     <p>Summary: {result.summary}</p>
//                     <p>Genre: {result.genre.join(', ')}</p>
//                     {result.cover_image_url && <img src={result.cover_image_url} alt="Book Cover" />}
//                 </div>
//             ))}
//         </div>
//     );
// };
//
// export default SearchResults;