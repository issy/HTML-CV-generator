interface Props {
  children: React.ReactNode,
  href: string
}

export default function Link(props: Props) {
  return <a href={props.href} className="hover:text-blue-500 print:text-blue-500 print:underline">{props.children}</a>
}