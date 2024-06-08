import { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const Formulario = ({ agregarEmpleado, showAlert }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: ''
  })

  const handleSubmit = (event) => {
    event.preventDefault()

    for (const key in formData) {
      if (!formData[key].trim()) {
        showAlert('Por favor, llena todos los campos', 'danger')
        return
      }
    }

    const nameRegex = /^[a-zA-ZÀ-ÿ'-]+\s+[a-zA-ZÀ-ÿ'-]+$/
    if (!nameRegex.test(formData.nombre)) {
      showAlert('Por favor, introduce al menos un nombre y un apellido', 'danger')
      setFormData((prevData) => ({
        ...prevData, nombre: ''
      }))
      return
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!emailRegex.test(formData.email)) {
      showAlert('Por favor, introduce un correo electrónico válido', 'danger')
      setFormData((prevData) => ({
        ...prevData, email: ''
      }))
      return
    }

    const edad = parseInt(formData.edad)
    if (isNaN(edad) || edad < 18) {
      showAlert('El colaborador debe tener al menos 18 años para registrarse. Por favor, introduce una edad válida', 'danger')
      setFormData((prevData) => ({
        ...prevData, edad: ''
      }))
      return
    }

    const phoneRegex = /^\d{9}$/
    if (!phoneRegex.test(formData.telefono)) {
      showAlert('Por favor, introduce un número de teléfono válido con 9 dígitos.', 'danger')
      setFormData((prevData) => ({
        ...prevData, telefono: ''
      }))
      return
    }

    const nuevoEmpleado = {
      id: Date.now().toString(),
      ...formData
    }

    agregarEmpleado(nuevoEmpleado)

    setFormData({
      nombre: '',
      email: '',
      edad: '',
      cargo: '',
      telefono: ''
    })

    showAlert('¡Colaborador ingresado correctamente!', 'success')
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData, [name]: value
    }))
  }

  return (
    <>
      <h4>Nuevo Colaborador</h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='forNombre'>
          <Form.Label>Nombre del colaborador</Form.Label>
          <Form.Control
            type='text'
            name='nombre'
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email del colaborador</Form.Label>
          <Form.Control
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='forEdad'>
          <Form.Label>Edad del colaborador</Form.Label>
          <Form.Control
            type='number'
            name='edad'
            value={formData.edad}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='forCargo'>
          <Form.Label>Cargo del colaborador</Form.Label>
          <Form.Control
            type='text'
            name='cargo'
            value={formData.cargo}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formTelefono'>
          <Form.Label>Teléfono del colaborador</Form.Label>
          <Form.Control
            type='tel'
            name='telefono'
            value={formData.telefono}
            onChange={handleChange}
          />
        </Form.Group>

        <div className='d-grid mb-3'>
          <Button variant='primary' type='submit'>
            Agregar Colaborador
          </Button>
        </div>
      </Form>
    </>
  )
}

export default Formulario
