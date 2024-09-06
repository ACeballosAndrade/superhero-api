
interface Props {
  aspect: string,
  value: string 
}

export const ConnectionsCard = ({aspect, value}: Props) => {
  return (
    <li className="flex flex-col">
      <span className="font-bold mt-3 text-blue-400 text-xl">{aspect}</span>
      
          <span className="text-lg text-zinc-200 border-b-2 border-zinc-800">
            {value}
          </span>
    </li>
  )
}
