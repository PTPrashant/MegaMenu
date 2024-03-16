import  {useState, useEffect} from "react";
import AppContext from "./Context"
import axios from "axios";

const ContextProvider = ({children}) =>{
    


    const [contextGenre, setcontextGenre]= useState(null)

    let genreURL='https://api.themoviedb.org/3/genre/movie/list?api_key=ff16ea4bba5e1d3b0b2ef3f3adc3be2c'
    async function getGenre(){
        const response = await axios.get(genreURL)
        // console.log(response.data)
        setcontextGenre(response.data.genres)

    }
    useEffect(()=>{

        getGenre()
    },[])


    return(

        <AppContext.Provider value={{
            contextGenre, setcontextGenre
        }}>
            {children}
        </AppContext.Provider>

    )
}

export default ContextProvider
