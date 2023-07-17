import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Software Developer, in companys XLabs Security.</p>
          <p>March 2023 - Present</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years="6 months"/>
            <Skill image="/js.png" measure={3} years="6 months"/>
            <Skill image="/flutter.png" measure={1} years="4 months"/>
            <Skill image="/ts.png" measure={4} years="1 month"/>           
          </div>
        </div>
    )
}