interface Props {
  items: string[]
}

export default function List({ items }: Props) {
  return (
    <ul className="list-inside list-disc">
      {
        items.map((item, index) => (
          <li key={index} className="my-1">
            {item}
          </li>
        ))
      }
    </ul>
  )
}