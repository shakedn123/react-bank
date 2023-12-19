import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Manege(props) {
    const nav=useNavigate();

    return (
        <div>
<h1> manege</h1>

            {props.persons.map((val) => {

                return (
                    <div style={{width:300  , height:100}}>
                       <span>id: {val.id}</span> <br />
                     <span>user:  {val.user}</span>  <br />
                       <span>money: {val.money}</span> 
                    </div>
                )
            })}

            <button onClick={()=>{nav('/')}}>home page</button>
        </div>
    )
}
