

interface Props {
  aspect: string,
  value: string | string[]
  icon: React.ReactNode
}

export const AppearanceCard = ({aspect, value, icon}: Props) => {
  return (
    <li className="flex justify-between py-2 px-1 rounded-md border-b-2 border-x-1 border-zinc-950">
      <span className="flex items-center gap-1 font-semibold text-lg"><span className="text-yellow-500">{icon}</span>{aspect}</span>
      {
        Array.isArray(value) 
        ? <span className="font-bold text-md">{value[1]}</span>
        : <span className={`font-bold text-md ${value === 'Male' ? 'text-blue-500' : value === 'Female' ?'text-red-500' : '' }`}>{value}</span>
      }
    </li>
  )
}
