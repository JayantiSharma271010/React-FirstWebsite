import React,{useState} from 'react'
import serviceApi from './api-folder/services_api'

const Services = () => {
    const [serviceData , setServiceData] = useState(serviceApi)
  return (
    <div>
        <section className='service-main-container'>
            <div className="container service-contaienr">
                <h1 className='main-heading text-center'> How to send money</h1>

              

<div className="row">

    {serviceData.map((curElem)=>{
        const {id,logo,title,info} = curElem
        return (
            <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv" key={id}>
                <i className={`fontawesome-style ${logo}`}></i>
            <h2 className='sub-heading'>{title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illat unde excepturi fugiat enim assumenda eum ab numquam fuga!</p>
        </div>
    

        )
    })}
                       
               </div>
            </div>
        </section>
    </div>
  )
}

export default Services