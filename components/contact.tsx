import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "components/hyperlink";


const RegularLink = (address: string) => <Link href={address}>{address.replace("https://", "")}</Link>
const Email = (address: string) => <Link href={`mailto:${address}`}>{address}</Link>
const Location = (address: string) => <Link href={`https://www.google.com/maps/search/${address}`}>{address}</Link>
const Phone = (number: string) => <Link href={`tel:${number}`}>{number}</Link>

const icons = {
  linkedin: { icon: faLinkedin, func: RegularLink },
  github: { icon: faGithub, func: RegularLink },
  email: { icon: faEnvelope, func: Email },
  location: { icon: faMapMarkerAlt, func: Location },
  phone: { icon: faPhoneAlt, func: Phone }
};

interface Props {
  email?: string,
  github?: string,
  location?: string,
  phone?: string,
  linkedin?: string
}

export default function Contact(props: Props) {
  return (
    <div>
      {
        Object.entries(props).map(([service, val], index) => {
          if (!val) return;
          let { icon, func } = icons[service];
          return (
            <div className="flex my-1" key={index}>
              <div className="flex-none print:py-1 pr-3">
                <FontAwesomeIcon icon={icon} />
              </div>
              <div>
                {func(val)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}