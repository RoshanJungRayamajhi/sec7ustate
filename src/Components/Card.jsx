import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
const Card = () => {
  const [value, setvalue] = useState(true)
  return (
    <div className="w-full h-screen bg-zinc-300 flex justify-center items-center">
      <div className="w-60 h-32 bg-zinc-500 rounded-md flex  relative overflow-hidden">
        <img
          className={`shrink-0 w-full h-full transition-transform duration-300	 ${value ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover object-center`}
          src="https://images.unsplash.com/photo-1682687982470-8f1b0e79151a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          className={`shrink-0 w-full h-full transition-transform duration-300	 ${value ? "-translate-x-[0%]" : "-translate-x-[100%]"} object-cover object-center`}
          src="https://images.unsplash.com/photo-1702988319113-051682d600a4?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span onClick={()=>setvalue(()=>!value)} className="w-14 h-14 rounded-full absolute left-1/2 bottom-[-30px] bg-[#dadada7b]  -translate-x-[50%] -translate-y-[50%] flex items-center justify-center">
          <FaArrowRight size={"1em"} />
        </span>
      </div>
    </div>
  );
};

export default Card;
