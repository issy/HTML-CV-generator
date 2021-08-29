interface Props {
  title: string,
  name: string
}

export default function Header({ name, title }: Props) {
  return (
    <div className="bg-blue-500 print:bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="items-center border-b-22 py-8 print:py-2">
          <div className="text-center text-white print:text-black">
            <h1 className="text-6xl print:text-2xl py-1">{name}</h1>
            <h2 className="text-4xl print:text-xl py-1">{title}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}