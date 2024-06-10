import React from 'react'
import experience from './Data/experience.json'

const Experience = () => {
  return (
    <>
    <div className="container experience " id='experience'>
      <h1>EXPERIENCE</h1>
      <h2>Personal Projects</h2>
      {
        experience.map((data) => {
          return (
            <>
            <div key={data.id} className='ex-items text-center my-5'>
              <div className="left">
                <img src={`/Images/${data.imageSrc}`} alt="" />
              </div>
              <div className="right">
                <h2>{data.role}</h2>
                <h5 style={{color:"yellow"}}>{data.experiences[0]}</h5>
                <h5 style={{color:"yellow"}}>{data.experiences[1]}</h5>
              </div>
            </div>
            
            </>
          )
      })
      }
    </div>
    </>
  )
}


export default Experience

