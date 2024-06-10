import React from "react";
import skills from "./Data/skills.json";

export default function Skills() {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items" >
          {skills.map((data) => (
            <>
              <div className="item" key={data.id} data-aos="flip-up" data-aos-duration="500">
                <img src={`/Images/${data.imageSrc}`} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
