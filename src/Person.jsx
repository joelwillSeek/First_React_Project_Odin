import { useState } from "react"


function Person() {

    let [first_name,set_first_name]=useState("")
    let [last_name,set_last_name]=useState("")

    /**
     * 
     * @param {Event} event 
     * @returns 
     */
    let change_first=(event)=>
        set_first_name(event.target.value)

        let change_last=(event)=>
        set_last_name(event.target.value)
    

   return (
      <>
         <input type="text" placeholder="First Name" onChange={change_first}/>
         <input type="text" placeholder="Last Name" onChange={change_last}/>
            <h1>Full Name: {first_name} {last_name} </h1>
      </>
   )
} 

export default Person