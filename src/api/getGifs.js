import { SEARCH_BASE_URL, API_KEY, TRENDING_BASE_URL } from '../config';


export const getGifs = async(category) => {
    const url = `${SEARCH_BASE_URL}${API_KEY}&q=${ category }&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    return gifs;
};

export const getGifsTrending = async() => {
    const url = `${TRENDING_BASE_URL}${API_KEY}&limit=20`
    const resp = await fetch( url );
    const { data } = await resp.json();
    
    const gifs = data.map( img => ({

        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url

    }));
    return gifs;
};
