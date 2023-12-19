import './App.css';
import{BrowserRouter,Routes,Route}from "react-router-dom"
import Index from './comp/Index';
import { useState } from 'react';
import Register from './comp/Register';
import Costomer from './comp/Costomer';
import Manege from './comp/Manege';

function App() {


const[persons,setPersons]=useState([])

class People{
  constructor(id,user,pass,money,pay){
this.id=id
this.user=user
this.pass=pass
this.money=Number(money)
this.pay=pay
  }

}
const addPerson=(id,user,pass,money,pay)=>{
let costomer=new People(id,user,pass,money,pay)
setPersons([...persons,costomer])
}

const edit=(id,user,pass,money,pay,index)=>{
  let arr=persons
 arr.splice(index,1)
 let costomer=new People(id,user,pass,money,pay)
 setPersons([...arr,costomer])
}

const[theIndex,setTheIndex]=useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Index persons={persons}/>}/>
        <Route path='/register' element={<Register flag='rg' theIndex={theIndex} addPerson={addPerson} persons={persons}/>}/>
        {persons.map((val,index)=>{
return( <Route path={`/this${val.user}`} element={<Costomer val={val} setTheIndex={setTheIndex}  index={index}/>}/>)
        })}
        <Route path='/manege' element={<Manege persons={persons}/>}/>
        <Route path='/edit' element={<Register flag='edit' theIndex={theIndex} edit={edit} persons={persons}/>}/>
      </Routes>
      
      </BrowserRouter>
   
    </div>
  );
}

export default App;
