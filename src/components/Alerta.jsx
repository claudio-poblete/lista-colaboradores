import { Alert } from 'react-bootstrap'

const Alerta = ({ message, type }) => {
  return (
    <Alert variant={type}>{message}</Alert>
  )
}

export default Alerta
