import React from 'react'
import { useThemeContext } from '../lib/context';

export default function Skeleton() {
   const {theme} = useThemeContext()
   return (
     <div
       style={{
         backgroundColor: theme === "dark" ? "#222" : "#ddd",
         maxWidth: "800px",
         margin: "20px auto",
         padding: "div",
         height: "94vh",
         display: "flex",
         borderRadius: "10px",
         gap: "19px",
         flexDirection: "column",
       }}
       className="animated"
     >
       {Array.from({ length: 9 }).map((_, ix) => (
         <span
           key={ix}
           style={{
             width: ix % 4 === 0 ? "60%" : "100%",
             height: "35px",
             backgroundColor: theme === "light" ? "#aaa" : "#333",
             borderRadius: "10px",
           }}
         ></span>
       ))}
     </div>
   );
 }
 
