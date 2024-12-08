import { useState } from "react";


function Contacto() {

 const [valores , setValores] = useState({
  nombre: "",
  email :"",
  texto : ""
 })   

const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(valores);
}

const handleValores =(e) => {
  // console.log(e.target.name)
  setValores ({
    ...valores,
    [e.target.name]: e.target.value
  })
}

  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <form onSubmit={handleSubmit} className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Contacto</h2>

    
    <input 
      type="text" 
      placeholder="Ingresá Tu Nombre" 
      className="w-full px-4 py-2 mb-4 text-gray-700 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300"
      value={valores.nombre}
      onChange={handleValores}
      name="nombre"
    />

    
    <input 
      type="email" 
      placeholder="Ingresá tu E-mail" 
      className="w-full px-4 py-2 mb-6 text-gray-700 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300"
      value={valores.email}
      onChange={handleValores}
      name="email"

    />

<input
  type="textarea"
  placeholder="Detalla tu consulta sobre estampados"
  className="w-full min-h-[150px] px-4 py-2 mb-6 text-gray-700 border border-blue-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition duration-300"
  value={valores.texto}
  onChange={handleValores}
  name="texto"
/>

    
    <button 
      type="submit" 
      className="w-full px-4 py-2 text-white bg-blue-600 font-medium rounded-lg hover:bg-red-600 transition-all duration-300 hover:animate-bounce"
    >
      Enviar
    </button>
  </form>
</div>

  )
}

export default Contacto
