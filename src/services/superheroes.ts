
const APIKEY = '97fb370a8baf035ba77e2140e8a8a3c2'

interface Props {
  query: string
}

export const searchSuperheroes = async({query}: Props) => {
  //if(query === '') return null
  try {
    const response = await fetch(`/api/api/${APIKEY}/search/${query}`)
    const json = await response.json()
    
    if( json.response == 'error'){ 
      console.log("No hay superheroes con ese nombre", json.response);
      return []
    }else{
      const superHeroes = json.results
      return superHeroes
    }
  } catch (error) {
    throw new Error(`Error buscando los superheroes: ${error}`)
  }
}

 export const getSuperHeroe = async (idSH: string)  => {
   if(idSH !== ''){
     try {
       const response = await fetch(`/api/api//${APIKEY}/${idSH}`)
       const heroe = await response.json()
       return heroe
     } catch (error) {
       throw new Error(`Ocurrió un error, ${error}`)
     }  
   }
 }