import Header from "../components/header";
import Job from "../components/job";
import Contact from "../components/contact";
import Section from "../components/section";
import List from "../components/list";
import Project from "../components/project";

export default function Home() {
  return (
    <>
      <Header
        name="" // Your name
        title="" // Job title
      />
      <div className="py-6 print:py-0" />
      <div className="max-w-5xl sm:max-w-6xl grid grid-cols-3 gap-4 px-10 mx-auto text-lg print:text-xs pb-16">

        {/* Left column */}
        <div className="col-span-2 col-start-1 col-end-3">

          <Section title="Profile" className="col-span-2"> {/* Short personal statement */}
            Here is a brief summary about myself. Lorem ipsum dolor sit amet...
          </Section>

          <Section title="Work" className="col-span-2">
            <Job
              title="" // Job title
              company={{
                name: "", // Company name
                website: "", // Company website
                location: "" // Job location
              }}
              startDate="" // Recommended date format is MMM YYYY eg. May 2020
              endDate=""
              about="" // A brief description of your place in the company
              highlights={[ // A list of notable things you did at this job. 5 items recommended

              ]}
            />
          </Section>

          <Section title="Projects" className="col-span-2">
            These are projects I've worked on in my own time or notable projects at work.

            <Project
              title="" // Project title
              link="" // A link to more information on this project
              about={` `} // A description of the project
              tools={[ // A list of tools/languages/libraries you used to make this project

              ]}
            />

          </Section>

        </div>
        {/* End left column */}

        {/* Right column */}
        <div className="col-span-1 col-start-3 col-end-4 px-6">

          <Section title="Contact" className="col-span-1">
            <Contact
              email=""
              github="" // Your GitHub username
              location="" // City, country
              phone=""
              linkedin=""
            />
          </Section>

          <Section title="Skills" className="col-span-1">
            <List items={[ // A bullet-point list of your primary skills

            ]} />
          </Section>

          <Section title="Education" className="col-span-1">
            <List items={[ // Notable educational qualifications you've achieved (university degree, A-level subjects, etc)

            ]} />
          </Section>

          <Section title="Certificates" className="col-span-1">
            <List items={[ // Professional certificates you've achieved (eg. Azure Developer certificates, CCNA)

            ]} />
          </Section>

          <Section title="Languages" className="col-span-1">
            <List items={[ // Languages (programming or spoken word) that you're proficient in

            ]} />
          </Section>

        </div>
        {/* End right column */}

      </div>

    </>
  )
}
