import React from 'react'
//import User from './components/User';
import('./App.css')
function App() {

  
  return (
    <div className='App'>
    {/* //component inside it created */}
  {/* <User name ="simchew" age={24} email ="smith122129@gmail.com" />
  <User name ="simchew" age={24} email ="smith122129@gmail.com" />
  <User name ="simchew" age={24} email ="smith122129@gmail.com" />
     */}


     {/* // render from anather component using props */}
 <User  salary ={1500}  postion ="IT oficer" Campany ="imagin one day"/>
<User  salary ={1500}  postion ="sotware engineer" Campany ="imagin one day"/>
<User  salary ={1500}  postion ="IT support specialist" Campany ="imagin one day"/> 


<User />
<User />

    </div>
  );
}
const  User =(props) =>{
   return(
   <div>
    
     <h1>{props.name}</h1>
     <p>{props.age}</p>
     <p>{props.email}</p>
     </div>
   )
 }

  

export default App


