import { useFetchGifs } from '../../hooks/useFetchGifsTrending';
import { GifItem } from '../GifItem/GifItem';
import { LoadingMessage } from '../LoadingMessage/LoadingMessage';
import { TitleCategory } from '../StyleH1';


export const GifGrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs( category );

console.log(category);

// if( category.)
  return (
    <>
    
        <TitleCategory>{ category }</TitleCategory>
        <LoadingMessage isLoading={ isLoading } />
        <div className='card-grid'>
            {
                images.map( ( image ) => (
                    <GifItem 
                    key={ image.id }
                    { ...image }
                    />
                ))
            }
        </div>
    </>
  )
  }