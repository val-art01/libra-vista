// import React from "react";
import {constructCoverImageUrl} from "./../../services/api.tsx";

const ReslutBooks = (searchResults) => {
    return (
        <>
            <div className='content grid3 mtop'>
                {searchResults.searchResults.length > 0 ? (
                    searchResults.searchResults.map((result, index) => (
                        <div className='box shadow' key={index}>
                            <div className='img'>
                                {result.cover_i && (
                                    <img src={constructCoverImageUrl(result.cover_i)} alt="Book Cover"/>
                                )}
                            </div>
                            <div className='text'>
                                <div className='category flex'>
                                    {/*<h1>{result.key}</h1>*/}
                                    <h3>{result.title}</h3>
                                </div>
                                <h4>par {result.author_name}</h4>
                                <p>en {result.first_publish_year} </p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )
                }
            </div>
        </>
    )
}

export default ReslutBooks