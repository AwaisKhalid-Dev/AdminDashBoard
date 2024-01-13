import React from 'react'
import CardData from '../../assets/DataJsons/CardData.json';
import { SlCallIn } from "react-icons/sl";
import { GrInProgress } from "react-icons/gr";
import { MdOutlineSecurityUpdateGood } from "react-icons/md";
import { PiEscalatorUp } from "react-icons/pi";
export default function index() {
//   const cardData = [
    
//     { cardType: "Total Calls", totalSales: "30K", percentage: "+5%", history:"/ last week",icon:<SlCallIn className='w-75'/>},
//     { cardType: "Solved", totalSales: "2500", percentage: "+10%", history:"/ last month",icon:<MdOutlineSecurityUpdateGood className='w-75'/>},
//     { cardType: "Open", totalSales: "500", percentage: "+15%", history:"/ last month",icon:<GrInProgress className='w-75' />},
//     { cardType: "Escalate", totalSales: "1050", percentage: "+100%", history:"/ last month",icon:<PiEscalatorUp className='w-75'/>},
// ];
return (
  <div className="w-100 ml-auto p-3 d-flex flex-wrap justify-content-between">
      {CardData.map((item, index) => (
          <div key={index} className="rounded-3 bg-white p-3" style={{ width: '23%' }}>
              <div className="d-flex justify-content-between text-secondary">
                  <div>
                      <h5 className=" text-secondary">{item.cardType}</h5>
                      <h1 className="fs-4 fw-bold text-gradient-primay ">{item.totalSales}</h1>
                      <span className="fs-5 fw-semibold text-success">{item.percentage}</span>
                      <span className="fs-6  ms-2">{item.history}</span>
                  </div>
                  <div className={`${index === 0 ? 'bg-gradient-primary' : index === 1 ? 'bg-gradient-success' : index === 2 ? 'bg-gradient-danger' : index === 3 ? 'bg-gradient-warning' : ''} p-2 d-flex justify-content-center fs-2 text-white rounded-circle`} style={{ width: '50px', height: '50px' }}>
                  {index === 0 ? <SlCallIn className='w-75'/> : 
                   (index === 1 ? <MdOutlineSecurityUpdateGood className='w-75'/> : 
                   (index === 2 ? <GrInProgress className='w-75'/> : <PiEscalatorUp className='w-75'/>)
                   ) 
                  }
                  </div>
              </div>
          </div>
      ))}



  </div>


);
      }