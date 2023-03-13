import { useState } from "react";
import { AddCategory } from "./components/AddCategory/AddCategory";
import { GifGrid } from "./components/GiftGrid/GifGrid";
import { Title } from "./components/StyleH1";

export const GifExpertApp = () => {
  
  const [categories, setCategories ] = useState([ '' ]);
  
  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes( newCategory)) return;

    setCategories([ newCategory ,...categories]);

  };
 

  const resetCategory = () => {
    setCategories(['']);
  };

    return (
    <>
    <Title>Buscador de Gifs</Title>
    <AddCategory 
    onNewCategory={ (e) => onAddCategory(e) }
    />
    <button onClick={ resetCategory }>Limpiar Busquedas</button>

    {
        categories.map( (category) => (
            <GifGrid 
            key={ category }
            category={ category }
            />
        ))
    }


    </>
  )
}
