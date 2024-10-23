/*
Ejercicio 1: Tarjeta de Usuario
Objetivo: Crea una tarjeta que muestre la información de un usuario.

Requisitos:

La tarjeta debe tener un ancho fijo y un margen.
Debe incluir una imagen de perfil (puedes usar una URL de imagen de ejemplo).
Debe mostrar el nombre del usuario en un tamaño de texto más grande y en negrita.
Debe mostrar una breve descripción o biografía en un tamaño de texto más pequeño.
Un botón que diga "Ver Perfil".
*/

const UserCardCustom = () => {
  return (
    <div className="max-w-md items-center border border-gray-400 rounded-lg shadow-lg m-4 p-4 bg-white">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjRz5yvC9DPkBwpshka2Lv2TK-6hhN_0OeeA&s" alt="STAR WARS" className="rounded-full border border-blue-400 px-5 py-4 w-50 h-50 mx-auto" />
        <h2 className="text-center text-2xl font-black">Darth Vader</h2>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae esse, quis facere quo odit dolor illo corporis similique quod voluptatibus repellendus saepe velit! Ullam numquam earum iure facere nihil.</p>
        <button className="mt-4 text-xl text-white bg-blue-700 p-2 rounded-lg cursor-pointer hover:bg-slate-500">See profile</button>
    </div>
  )
}

export default UserCardCustom