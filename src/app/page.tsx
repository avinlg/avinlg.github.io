import resume from "./data/resume.json"
import Header from "./components/resume/header"
import Contacts from "./components/resume/contacts"
import ProfileDetails from "./components/resume/profile_details"
import Skills from "./components/resume/skills"
import TechSkills from "./components/resume/tech_skills"
import Communications from "./components/resume/communications"
import Qualifications from "./components/resume/qualifications"

export default function Home() {
  return (
    <main className="max-w-a4 bg-white flex flex-col min-h-screen items-center print:m-0 mx-auto">
      <Header {...resume.data} />
      <Contacts {...resume.data.personaDetails.contact} />
      <ProfileDetails className="hidden" {...resume.data.personaDetails} />
      <Skills {...resume.data.competencies.skills}/>
      <TechSkills {...resume.data.competencies.tech_skills}/>
      <Communications {...resume.data.competencies.communications}/>
      <Qualifications {...resume.data.qualifications}/>
    </main>
  );
}
