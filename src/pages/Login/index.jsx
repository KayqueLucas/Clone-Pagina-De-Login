
import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import "./index.css";
import { Icone } from "./../../components/cabeçalho/index";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logar, setLogar] = useState(false);
  
  const emailSalvo = "email@email.com";
  const senhaSalva = "12345";


  function clickButton() {
    setLogar(!logar);
  }
  useEffect(() => {
    if (logar) {
      setLogar(false)
      if (email === emailSalvo && password === senhaSalva) {
        alert('Logado com Sucesso')
      } else {
        alert('Email ou senha incorretos')
      }
    }
  }, [logar]);

  return (
    <div className="login-container">
      <div className="login-box">
        <Icone />
      </div>
      <div className="form-group">
        <Input
          type = "email"
          className="textoPagina"
          title={"Username or email address"} 
          onChange={(e) => setEmail(e.target.value)} 
          value={email}
        />

        <Input
          type="password"
          className="textoPagina"
          title={"Password"} 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={clickButton}>Sign in</button>
      </div>
    </div>
  );
}

export default App;