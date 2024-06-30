"use client";
import { useState } from "react"

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  function handleFormSubmit(e){
    e.preventDefault();
    fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers: {'Content-Type': 'application/json'}
    }
    )
  }
  return (
    <section className="bg-auto bg-center bg-repeat min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/assets/background/body.jpg')" }}>
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h1 className="text-2xl text-center mb-4">Registro</h1>
        <form className="block mx-auto max-w-xs" onSubmit={handleFormSubmit}>
          <input type="email" placeholder="Escribe tu Email" defaultValue={email} onChange={ e => setEmail(e.target.value)}/>
          <input type="password" placeholder="Escribe Clave" defaultValue={password} onChange={ ev => setPassword(ev.target.value)}/>
          <button className= "grid bg-yellow-800 text-white rounded-full px-4 py-1" type="submit"> Registrar </button>
        </form>
      </div>
    </section>
  )
}

export default page