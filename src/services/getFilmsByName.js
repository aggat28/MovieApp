export default async function getFilmsByName(name) {
    return fetch(`https://api.themoviedb.org/3/search/movie?&api_key=4caf9d0ca5ded40aec02c7fa72e3f199&query=${name}`)
        .then(response => {
            if(response.ok && response.status === 200)
                return response.json();
            throw({error: 'data not found'})
        })  
}