import { useState } from 'react'
import { Form } from 'react-bootstrap'

const Buscador = ({ onSearch }) => {
  const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value)
    onSearch(event.target.value)
  }

  return (
    <Form>
      <Form.Group controlId='formBuscar'>
        <Form.Control
          type='tex'
          placeholder='Buscar colaborador...'
          value={term}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  )
}

export default Buscador
