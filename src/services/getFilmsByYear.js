export default async function getFilmsByYear(year, page) {
    
 
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=${year}&api_key=4caf9d0ca5ded40aec02c7fa72e3f199&page=${page}`)
        .then(response => {
            if(response.ok && response.status === 200)
                return response.json();
            throw({error: 'data not found'})
        })  
}