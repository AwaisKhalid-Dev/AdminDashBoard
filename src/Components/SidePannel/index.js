import React from 'react';
import { RxDashboard } from "react-icons/rx";
import { FaTable } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { MdCorporateFare } from "react-icons/md";




function Index() {
  
  const sideBarLinks =[{
    title:"Dashboard",
    icon:<RxDashboard/>,                                                    
  },
  {
    title:"Tables",
    icon:<FaTable/>,
  },
  {
    title:"Bills",
    icon:<RiBillLine/>,
  },
 
]

  return (
       <>
           <div className='b-rounded-lg position-fixed mt-3 mx-3 col-2 bg-light page-height  p-3'>
              <div className='d-flex align-items-center '>
               <MdCorporateFare className='fs-3 m-2'/>
               <span>Globiz Systems</span>
              </div>
              <hr />
                    {sideBarLinks.map((item,index) => (
        <div className="d-flex align-items-center  mx-2 px-1 rounded my-4 cursor-pointer tab" key={index}>
          
            <div className="border-radius-md text-center me-2 mb-1">
            <i className={`${index === 0 ? 'text-primary' : index === 1 ? 'text-warning' : index === 2 ? 'text-success' : ''} text-lg opacity-10 ${item.icon}`}>
            {item.icon} 
            </i>

            </div>
            <span className="nav-link-text ms-2">{item.title}</span>
          
        </div>))}
        </div>

      </>
  );
}

export default Index;
