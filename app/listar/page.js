'use client';
import { useState, useEffect } from 'react'

const list = () => {
    const [users, setEmail] = useState(['']);

    useEffect(
        () => {
            fetch('/api/register', {
                method: 'GET'
            }).then((res) => res.json())
                .then((data) => {
                    setEmail(JSON.parse(data))
                    console.log(JSON.parse(data))
                })
        }, []
    )
    return (
        <section className="bg-auto bg-center bg-repeat min-h-screen flex items-center justify-center" style={{ backgroundImage: "url('/assets/background/body.jpg')" }}>
        <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
            <h1 className="text-2xl text-center mb-4">Usuarios Registrados</h1>
                <ul>
                {users?.map((email, index) => {
                    return (<li key={index}>{email.users} </li>)
                            }
                        )
                    }
                </ul>
        </div>
        </section>
    )
}

export default list