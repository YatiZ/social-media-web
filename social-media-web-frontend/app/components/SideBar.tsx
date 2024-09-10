'use client'
import { sidebarLinks } from "@/constant";
import React, { useState } from "react";


const SideBar = () => {
    const[SideBarOpen, setSideBarOpen] = useState(false)

  return (
    <div className="border-r h-screen md:w-[250px] overflow-hidden">
    
      <div className="flex md:flex-col lg:flex-col">
        {sidebarLinks.map((link, index) => (
          <div className=" hover:bg-slate-200 h-14" key={index}>
            <div className="font-bold active:text-pink-600 hover:text-pink-600 px-8 pt-8 flex gap-3">
                {link.svg}
              <h3>{link.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
