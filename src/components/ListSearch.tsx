
//import { useSuperheores } from '../hooks/useSuperheores'
import { Result } from '../types'

interface Props {
  superHeroes: Result[],
  selectSuperHeroe: (id: string) => void
}

export function ListSearch({superHeroes, selectSuperHeroe}: Props) {

  //const { selectSuperHeroe } = useSuperheores()

  return (
    <ul className='absolute bg-zinc-200 w-full'>
      {
        superHeroes.slice(0, 5).map(heroe => (
          <li 
          key={heroe.id} 
          className='flex items-center gap-3  border-b-[1px] border-zinc-400 hover:bg-zinc-300 cursor-pointer'
          onClick={() => selectSuperHeroe(heroe.id)}
          >
            <img src={heroe.image.url} alt={heroe.name} className={`h-14`} />
            <span>{heroe.name}</span>
          </li>
        ))
      }
    </ul>
  )
}
