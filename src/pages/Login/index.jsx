/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";

import "./index.css";
import { Icone } from './../../components/cabeçalho/index';


function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function addCount() {
    setCount((count) => count + 1);
  }
  //precisa de uma função e array de dependencias
  // useEffect(() => {
  //   alert('bem vindo')
  // }, [count, password]);

  
  return (
       
    <div className="login-container">
      <div className="login-box">
        <Icone />
      </div>
      <div className="form-group">      
        <Input className='textoPagina' onChang={(e) => setEmail(e.target.value)} title={"Username or email address"} />
        </div>
        <div className="form-group">
        <Input className = 'textoPagina' onChang={(e) => setPassword(e.target.value)} title={"Password"} />
      </div>
      <div>
        <button onClick={addCount}>Sign in</button>
        </div>
      </div>
    
  );
}

export default App;
