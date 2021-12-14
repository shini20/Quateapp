import React ,{useState}from 'react'

import Quatelist from './Users/Quatelist'
import Adduser from './Users/Adduser'
import './App.css'
const App = () => {
  const [usersList,setUserslist]=useState([]);

  const AdduserHandiler = (uquate,uname)=>{
      setUserslist((prev)=>{
        return [...prev ,{ quate:uquate , name:uname,
          id : Math.random().toString()}]
      });
    };
  return (
    <div>
      <Adduser onAdduser={AdduserHandiler}/>
      <Quatelist users={usersList}/>
    </div>
  )
}

export default App
