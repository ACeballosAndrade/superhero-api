import {  useState } from "react";
import {getSuperHeroe, searchSuperheroes} from '../services/superheroes'
import { Result } from "../types";
//import debounce from "just-debounce-it";

interface Props {
  query: string
}

const initialValue: Result = {
  id: "",
  name: "",
  powerstats: {
    intelligence: "",
    strength: "",
    speed: "",
    durability: "",
    power: "",
    combat: ""
  },
  biography: {
    "full-name": "",
    "alter-egos": "",
    aliases: [],
    "place-of-birth": "",
    "first-appearance": "",
    publisher: "",
    alignment: ""
  },
  appearance: {
    gender: "",
    race: "",
    height: ["", ""], // Suponiendo que tenga dos valores, puedes cambiarlo si es necesario
    weight: ["", ""],
    "eye-color": "",
    "hair-color": ""
  },
  work: {
    occupation: "",
    base: ""
  },
  connections: {
    "group-affiliation": "",
    relatives: ""
  },
  image: {
    url: ""
  }
};


export function useSuperheores() {
  
  const [response, setResponse] = useState([]);
  const [ superHero, setSuperHero ] = useState(initialValue)
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState('')

  

  const getSuperHeroes = async ({query}: Props) => {
    try {
      setLoading(true)
      const superHeroes = await searchSuperheroes({query})
      setResponse(superHeroes)
      setLoading(false)
    } catch (error) {
      setError((error as Error).message)
      setLoading(false)
    }
  };

const selectSuperHeroe = async (idSH: string) => { //Este método obtiene los datos de un superheroe de la lista
  
  const selectOneSuper = await getSuperHeroe(idSH)
  setSuperHero(selectOneSuper)  
}


  return {  response,  superHero, selectSuperHeroe, getSuperHeroes, loading, error }; //Se exportan las variables y funciones necesarias para la ejecución
}
