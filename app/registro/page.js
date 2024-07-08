"use client";
import { useState } from "react"
import Link from "next/link";

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
          <input className="mb-2" type="email" placeholder="Escribe tu Email" defaultValue={email} onChange={ e => setEmail(e.target.value)}/>
          <input className="mb-4" type="password" placeholder="Escribe Clave" defaultValue={password} onChange={ ev => setPassword(ev.target.value)}/>
          <button className= "grid bg-yellow-800 text-white rounded-full px-4 py-1 mb-4" type="submit"> Registrar </button>
            <div className="flex flex-wrap justify-between">
            <a href='/listar' className= "grid bg-yellow-800 text-white px-4 py-1 mr-2"> listar usuarios </a>
            <a href='' className= "grid bg-yellow-800 text-white px-4 py-1"> borrar usuarios </a>
            </div>
        </form>
      </div>
    </section>
  )
}

export default page