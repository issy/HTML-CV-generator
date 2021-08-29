import List from "./list";
import Link from "./hyperlink";

interface Props {
  title: string,
  company: {
    name: string,
    website: string,
    location: string
  },
  startDate: string,
  endDate: string,
  about: string,
  highlights?: string[]
}

export default function Job(props: Props) {
  return (
    <div key={' '}>
      <div className="py-1">
        <h3 className="text-2xl font-bold print:py-1 print:text-base">{props.title}</h3>
        <div className="italic flex">
          <p className="text-left flex-1"><Link href={props.company.website}>{props.company.name}</Link>,<br />{props.company.location}</p>
          {props.startDate && props.endDate ? <p className="text-right flex-1">{props.startDate} - {props.endDate}</p> : null}
        </div>
      </div>
      <p>{props.about}</p>
      <div className="my-2">
        {
          props.highlights.length
            ? (
              <>
                <h3 className="text-xl print:text-xs font-bold">Highlights</h3>
                <List items={props.highlights} />
              </>
            )
            : null
        }
      </div>
    </div>
  );
}