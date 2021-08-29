interface Props {
  children: React.ReactNode;
  className: string;
  title: string;
}

export default function Section({ title, className, children }: Props) {
  return (
    <div className={`${className} py-1`}>
      <div key="section-title" className="flex py-2">
        <div className="flex-initial">
          <h2 className="text-3xl print:text-lg font-bold text-transform uppercase border-b-2 border-blue-500">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  )
}