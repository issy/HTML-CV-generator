import List from "./list";
import Link from "./hyperlink";

interface Props {
  title: string,
  about: string,
  link?: string,
  tools?: string[]
}

export default function Job({ title, about, link, tools }: Props) {
  return (
    <div key={title}>
      <div className="py-1">
        <h3 className="text-2xl font-bold print:py-1 print:text-base">{title}</h3>
        {
          link
            ? <Link href={link}>{link.replace("https://", "")}</Link>
            : null
        }
      </div>
      <p>{about}</p>
      {
        tools ? (
          <div className="my-2">
            <h3 className="text-xl font-bold">Tools used</h3>
            <List items={tools} />
          </div>
        ) : null
      }
    </div>
  )
}