
function FormEre(){
    return(
    
        <form id="formulario" className="fixed top-40 left-20 right-40  gap-4 p-4 rounded-lg shadow-lg items-center" style={{backgroundColor:"#1C2937"}}>
            <legend className="font-bold text-white self-center">Iniciar Sesión</legend>

            <input
                type="text"
                placeholder="Tu Nombre"
                id="nombre"
                className="p-2 rounded-lg text-sm writing-vertical-rl bg-white"
            />
            <br />

            <input
                type="password"
                placeholder="Tu Password"
                id="password"
                className="p-2 rounded-lg text-sm writing-vertical-rl bg-white"
            />
            <br />

            <input
                type="submit"
                value="Iniciar Sesión"
                className="bg-cyan-500 hover:bg-cyan-600 text-sm uppercase p-2 font-black text-white cursor-pointer"
            />
        </form>

    )
}
export default FormEre