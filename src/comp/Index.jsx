import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/index.css';

export default function Index(props) {
const[user,setUser]=useState('')
const[pass,setPass]=useState('')
const nav=useNavigate();
const isValidate=()=>{
  if(user=='manege' && pass=='12345'){
    return(
      nav('/manege')
    )
  }

let x=props.persons.find((val)=>{return(val.user==user && val.pass==pass  ) })
    if(x!=undefined){
        console.log(props.persons)
return( 
nav(`/this${user}`)
)
        }
        else{
             return( alert('no user fined')) 
        }
}


  return (
    <div>
<h1>sv bank</h1>
<span>user name</span>
<input type="text" onChange={(e)=>{setUser(e.target.value)}} />
<br />
<span>password</span>
<input type="password" onChange={(e)=>{setPass(e.target.value)}}/>
<br /><br />
 <button onClick={(()=>{nav('/register')})}>new user</button>
<br /><br />
<button onClick={()=>{isValidate()}}>enter</button> 

    </div>
  )
}
