import axios from 'axios';

const getCharacters = () => {
    let url = "https://rickandmortyapi.com/api/character";
    axios.get(url).then(x=>{return(x.data)}).catch(err=>{return(err)});
}

const getLocations = () => {
    let url = "https://rickandmortyapi.com/api/locations";
    return axios.get(url);
}

const getEpisodes = () => {
    let url = "https://rickandmortyapi.com/api/episodes";
    return axios.get(url);
}

export {getCharacters,getLocations,getEpisodes}

