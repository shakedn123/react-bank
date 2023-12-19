import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../style/costomer.css'
export default function Costomer(props) {
    const [see, setSee] = useState(false)
    const [num, setNum] = useState('')
    const [name, setName] = useState('')
    const nav = useNavigate();

    const seeBalance = () => {
        alert(`ur balance is ${props.val.money}`)
    }
    const seeAction = () => {
        if (see == true) {
            return (
                <div style={{ display: 'inline' }}>
                    <span>how mach to pay?</span>
                    <input type="number" onChange={(e) => { setNum(e.target.value) }} />
                    <span>compeny</span>
                    <input type="text" onChange={(e) => { setName(e.target.value) }} />
                    <button onClick={() => { addPay(num, name) }}>pay</button>
                </div>
            )
        }

    }

    const addPay = (num, name) => {
        props.val.pay.push({ num: num, name: name })
        alert('pay was done')
        setName('')
        setNum('')
    }
const[flag,setFlag]=useState(false)
    const seeAllPay = () => {
        if(flag==true){
            let allPay = props.val.pay
            return (
                <div style={{display:'inline'}}>
                    {allPay.map((val) => {
                        return (
                            <p> {val.num}pay to {val.name}</p>
                        )
                    })}
                    
                </div>
            )
        }   
    }
    const edit = () => {
        props.setTheIndex(props.index)
        nav('/edit')
    }

    return (
        <div id='costoDiv'>
            <h1>Costomer:{props.val.user}</h1>
            <button onClick={() => { seeBalance() }}>balance</button>
            <button onClick={() => { setSee(!see) }}>action</button>
            <button onClick={() => {setFlag(!flag) }} >see all action</button>
            <button onClick={() => { edit() }}>edit</button>
            <Link to='/'><button>  back</button> </Link>
            {seeAction()}
            {seeAllPay()}

        </div>
    )


}
