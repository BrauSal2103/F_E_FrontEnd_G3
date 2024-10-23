import { UserRoundPlus, LogIn, CircleUserRound } from "lucide-react"
import { Button, TextField } from "@mui/material"
import mapaMundo from "../assets/Mapa_mundo.png"
import logoSW from "../assets/Logo_SOFTWORK.png"
import contract from "../assets/Contract.png"

const login = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-r place-content-center from-sky-400 to-emerald-300">
      <div className="container relative size-10/12 bg-cover m-auto" style={{backgroundImage: `url(${mapaMundo})`}}>
        <img className="absolute" src={logoSW} alt="Logo Softwork"></img>
        <div className="w-1/2 flex flex-row m-auto justify-center items-center min-h-full">
          <div className="flex flex-row m-auto bg-sky-300 bg-cover shadow-lg rounded-xl">
            {/* Login */}
            <div className="w-1/2 flex flex-col m-auto bg-white shadow-md p-10 rounded-xl">
              <h2 className="text-3xl font-bold mb-4 text-center">Iniciar sesión</h2>
              <CircleUserRound className="m-auto size-16"/>
              <div className="w-80">
                <TextField
                  label="Usuario"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Ingrese su usuario"
                />
                <TextField
                  label="Contraseña"
                  variant="outlined"
                  fullWidth
                  type="password"
                  margin="normal"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="flex flex-col items-center mt-6 space-y-4 w-80">
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  startIcon={<LogIn />}
                  style={{ backgroundColor: '#33c4b3' }}
                >
                  Ingresar
                </Button>
                <Button
                  variant="contained"
                  fullWidth
                  color="secondary"
                  startIcon={<UserRoundPlus />}
                  style={{ backgroundColor: '#ffeb3b', color: '#000' }}
                >
                  Registrar
                </Button>
              </div>
            </div>
            {/*Dibujo*/}
            <div className="w-3/5 flex flex-row justify-center items-center">
              <img src={contract} alt="contract" className="max-w-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
