import axios from 'axios';

const searchBooks = async (searchTerm: string) => {
    try {
        const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
        return response.data.docs;
    } catch (error) {
        console.error('Error fetching search results:', error);
        throw error; // Rejeter l'erreur pour la gérer à l'endroit où la fonction est appelée
    }
};

const constructCoverImageUrl = (coverId: number | null) => {
    if (coverId) {
        return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
    } else {
        // Si aucun identifiant de couverture n'est disponible, retourner une URL par défaut
        return 'URL_PAR_DEFAUT_OU_IMAGE_GENERIQUE';
    }
};

export { searchBooks, constructCoverImageUrl};