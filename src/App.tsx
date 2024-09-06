import { ChangeEvent, useCallback, useState } from "react";
import "./App.css";
import { CardSuperHeroe } from "./components/CardSuperHeroe";
import { ListSearch } from "./components/ListSearch";
import { useSuperheores } from "./hooks/useSuperheores";
import { SearchIcon } from "./ui/icons/SearchIcon";
import debounce from "just-debounce-it";


function App() {

const {  response, superHero, selectSuperHeroe, getSuperHeroes, loading } = useSuperheores()
const [query, setQuery] = useState("");

const debouncedSuperHeroes = useCallback(
  debounce((query:string) => {
    getSuperHeroes({query})
  }, 300), []
)

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  const newQuery = event.target.value;
  if (newQuery.startsWith(" ")) return;
  setQuery(newQuery);
  debouncedSuperHeroes(newQuery)
  //getSuperHeroes();
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  //getSuperHeroes({query})
  //console.log(query);
};

const [ isFocus, setIsFocus ] = useState(false)

  return (
    <div className="bg-gradient-to-r from-blue-500 via-violet-500 to-red-500 flex flex-row justify-center lg:min-h-screen">
      <div className="bg-zinc-900 my-7 rounded-2xl w-80 lg:w-3/4 lg:max-h-[550px] lg:max-w-5xl">
        <header className="flex flex-col justify-between items-center px-1 my-3 lg:flex-row lg:h-20 lg:px-5 lg:w-11/12 lg:mx-auto">
          <h1 className="text-white text-xl ml-3 font-bold lg:text-3xl">
            Super<span className="text-red-400">Heroes</span>
          </h1>
          <div className="relative" onFocus={()=>setIsFocus(true)} onBlur={() => {setTimeout(() =>  {setIsFocus(false)}, 100)}}>
            <form onSubmit={handleSubmit} className="flex">
              <input autoComplete="on" value={query} type="text" onChange={handleChange} className="bg-zinc-900 text-zinc-200 w-[280px] border-2 border-zinc-700 rounded-l-xl px-2" />
              <button type="submit" className="bg-zinc-700 p-2 rounded-r-lg">
                { loading ? <div className="spinner"></div> : <SearchIcon />}
              </button>
            </form>
              {
                isFocus && response.length > 0 &&  <ListSearch superHeroes={response} selectSuperHeroe={selectSuperHeroe} />            
              }        
          </div>
          
        </header>

        <main className="w-11/12 flex flex-col mx-auto justify-center">
          <CardSuperHeroe superhero={superHero} />
        </main>
      </div>
    </div>
  );
}

export default App;
