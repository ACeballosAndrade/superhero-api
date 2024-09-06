

interface Props {
  aspect: string,
  value: string | string[],
}

export const BiographyCard = ({aspect, value}: Props) => {
  return (
    <li className="flex flex-col">
      <span className="font-bold mt-3 text-blue-400">{aspect}</span>
      {
       Array.isArray(value) 
       ? value.map(key => (
        <span className="text-zinc-100 text-base " key={key}>{key}, </span>
       )) 
       :<span className="text-zinc-100 text-base border-b-2 border-zinc-800" >{value}</span>
      }
    </li>
  )
}
