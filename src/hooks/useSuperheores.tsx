import {  useState } from "react";
import {getSuperHeroe, searchSuperheroes} from '../services/superheroes'
//import debounce from "just-debounce-it";

interface Props {
  query: string
}

export function useSuperheores() {
  
  const [response, setResponse] = useState([]);
  const [ superHero, setSuperHero ] = useState({})
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(null)

  

  const getSuperHeroes = async ({query}: Props) => {
    try {
      setLoading(true)
      const superHeroes = await searchSuperheroes({query})
      setResponse(superHeroes)
      setLoading(false)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  };

const selectSuperHeroe = async (idSH: string) => { //Este método obtiene los datos de un superheroe de la lista
  
  const selectOneSuper = await getSuperHeroe(idSH)
  setSuperHero(selectOneSuper)  
}


  return {  response,  superHero, selectSuperHeroe, getSuperHeroes, loading, error }; //Se exportan las variables y funciones necesarias para la ejecución
}
