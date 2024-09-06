

interface Props {
  aspect: string,
  digit: string,
  icon: React.ReactNode
}

export const PowerStatsCard= ({aspect, digit, icon}: Props) => {
  return (
    <li className="flex justify-between py-1 px-1 rounded-md border-b-2 border-x-1 border-zinc-950">
      <span className="flex items-center gap-1 font-semibold text-lg"><span className="text-blue-500">{icon}</span>{aspect}</span>
      <span className="text-red-400 font-bold text-md">{digit}</span>
    </li>
  )
}
