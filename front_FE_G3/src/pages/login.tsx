import { Button, TextField } from '@mui/material';
import LoginIcon from '../assets/login.svg';
import PersonAddIcon from '../assets/person_add.svg';

const login = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-cyan-200 to-blue-200">
      {/* Left Section - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-md p-10">
        <h2 className="text-3xl font-bold mb-8">Iniciar sesión</h2>
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
            startIcon={<LoginIcon />}
            style={{ backgroundColor: '#33c4b3' }}
          >
            Ingresar
          </Button>
          <Button
            variant="contained"
            fullWidth
            color="secondary"
            startIcon={<PersonAddIcon />}
            style={{ backgroundColor: '#ffeb3b', color: '#000' }}
          >
            Registrar
          </Button>
        </div>
      </div>

      {/* Right Section - Illustration */}
      <div className="w-1/2 flex justify-center items-center">
        <img src="/mnt/data/imagen.png" alt="Ilustración" className="max-w-md" />
      </div>
    </div>
  )
}

export default login
