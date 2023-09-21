import React,{useState} from 'react'
import howtouse from './HowToUse'

const AboutUs = () => {
    const [aboutData, setAboutData] = useState(howtouse)
  return (
    <div>
        <section className='common-section our-services'>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-5 text-center our-serivces-leftSide-img">
                        <img src="./img/download.jpeg" alt="" />
                    </div>
                    <div className="col-12 col-lg-7 our-services-list">
                    <h3 className="mini-title"> --Available  a Google and ios app store only</h3>
                    <h1 className="main-heading">How to use the App?</h1>
                    {aboutData.map((curElem)=>{
                        const {id,title,info}= curElem
                        return(
                            <div className='row our-services-info' key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                                <h2>{title}</h2>
                                <p className='main-hero-para'>{info}</p>
                            </div>
                         
                        </div>
                        )
                    })}
                   
                    <br />
                    <button className='btn-style btn-style-border btn mt-3'>learn more</button>
                    </div>
                </div>
            </div>
        </section>

            {/* right sie of about us */}
            <section className='common-section our-services our-services-rightside'>

            <div className="container mt-5">
                <div className="row">
                 
                    <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-content-center flex-column">
                    <h3 className="mini-title"> --Support in any language </h3>
                    <h1 className="main-heading">World class support is <br/> is available 24/7 </h1>
                    {aboutData.map((curElem)=>{
                        const {id,title,info}= curElem
                        return(
                            <div className='row our-services-info' key={id}>
                            <div className="col-1 our-services-number">{id}</div>
                            <div className="col-10 our-services-data">
                                <h2>{title}</h2>
                                <p className='main-hero-para'>{info}</p>
                            </div>
                         
                        </div>
                        )
                    })}
                   
                    <br />
                    <button className='btn-style btn-style-border btn mt-3'>learn more</button>
                    </div>
                    <div className="col-12 col-lg-5  our-serivces-rightside-img">
                        <img src="./img/img.jpg" alt="" />
                    </div>
                </div>
            </div>
            </section>
    </div>
  )
}

export default AboutUs

