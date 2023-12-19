import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Register(props) {
    const [id, setId] = useState('')
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [money, setMoney] = useState('')
    const[conpPass,setConpPass]=useState('')
    const nav=useNavigate()

    const isAllGood=()=>{
        if(allCheck()==false){
            return false
        }
        if(props.flag=='edit'){
            props.edit(id, user, pass, money,[],props.theIndex)
        }
        else{
            { props.addPerson(id, user, pass, money,[])};
        }
console.log(props.persons)
nav(`/this${user}`)
    }
    
const allCheck=()=>{
    if(id.length!=9){
        alert('id is 9 letters')
        return false
    }
    if(user.length<4){
        alert('user too short')
        return false
    }
    if(pass.length<6){
        alert('pass to short')
        return false
    }
    if(pass!=conpPass){
        alert('not the same pass')
        return false
    }
    if(money.length<=0||money.length>7){
        alert('money not good')
        return false
    }
}


const showButton=()=>{
      if(props.flag == 'edit')
      {
        return <button onClick={()=>{ isAllGood()}}>edit</button>
      }
      else{
        return <button onClick={()=>{isAllGood()}}>add</button>
      }
    }

     useEffect(()=>{
    if(props.flag == 'edit'){
    let id=   document.getElementById('id').value= props.persons[props.theIndex].id;
    let user= document.getElementById('user').value= props.persons[props.theIndex].user;
     let pass=  document.getElementById('pass').value= props.persons[props.theIndex].pass;
     let money= document.getElementById('money').value= props.persons[props.theIndex].money;
     setId(id);setUser(user);setPass(pass);setMoney(money)
    }
    else{
        document.getElementById('id').value= ''
        document.getElementById('user').value=''
        document.getElementById('pass').value= ''
        document.getElementById('money').value=''
     
    }
 
},[props.flag])


    return (
        <div>
            <h1>Register</h1>
            <span>id</span><input id='id' type="number" onChange={(e) => { setId(e.target.value) }} />
            <br />
            <span> user name</span><input id='user' type="text" onChange={(e) => { setUser(e.target.value) }} />
            <br />
            <span> password</span><input id='pass' type="password" onChange={(e) => { setPass(e.target.value) }} />
            <br />
            <span> conp pass</span><input type="password" onChange={(e) => { setConpPass(e.target.value) }} />
            <br />
            <span> money</span><input id='money' type="text" onChange={(e) => { setMoney(e.target.value) }} />
            <Link to='/'><button>back</button></Link>

            
{showButton()}

        </div>
    )
}
