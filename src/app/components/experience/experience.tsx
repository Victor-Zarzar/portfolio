import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p>Software Developer, in company XLabs Security.</p>
          <p>March 2023 - Present</p>
          <div className="experience-time">
            <Skill image="/react.png" measure={2} years=""/>
            <Skill image="/js.png" measure={3} years=""/>
            <Skill image="/flutter.png" measure={1} years=""/>
            <Skill image="/ts.png" measure={4} years=""/>           
          </div>
        </div>
    )
}