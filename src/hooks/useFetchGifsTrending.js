import { useState, useEffect } from 'react';
import { getGifsTrending } from '../api/getGifs';

export const useFetchGifsTrending = () => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifsTrending();
        setImages( newImages );
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();

    }, [] );

    return {
        images,
        isLoading
  }   
}
