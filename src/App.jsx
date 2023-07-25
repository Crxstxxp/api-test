import React, { useEffect, useState } from "react";
import echo from "./WebSocket";

function App() {
  const data = {
    client_id: "2",
    client_secret: "hzyNyTpKfOOyGVAkI1pTAv7bMhYptz5qIWvubVgM",
    username: "911@gmail.com",
    password: "123456",
    grant_type: "password",
    scope: "*",
  };

  const login = async () => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    console.log(formData)
  };

  // const [datos, setDatos] = useState({})

  // window.Pusher = Pusher

  // useEffect(() => {
  //   echo.channel('incidentes').listen('IncidentesActualizados', (event)=> {
  //     //console.log(event.incidentes)
  //     setDatos(event.incidentes)
  //   })
  // }, []);

  // const incidentesData = async () => {
  //   const response = await fetch('http://localhost:8000/api/incidentes')

  //   const data = await response.json()
  //   console.log(data)
  //   setDatos(data)
  // }

  return (
    <div>
      <button onClick={login}> aaaa </button>
    </div>
  );
}

export default App;
