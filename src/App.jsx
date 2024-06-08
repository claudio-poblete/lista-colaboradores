import { Col, Container, Row } from 'react-bootstrap'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Buscador from './components/Buscador'
import Listado from './components/Listado'
import Alerta from './components/Alerta'
import { baseColaboradores } from './database/baseColaboradores'
import { useState } from 'react'
import Formulario from './components/Formulario'

function App () {
  const [empleados, setEmpleados] = useState(baseColaboradores)
  const [alerta, setAlerta] = useState({ show: false, message: '', type: '' })

  const handleAddEmployee = (nuevoEmpleado) => {
    setEmpleados([...empleados, nuevoEmpleado])
  }

  const handleSearch = (term) => {
    if (!term) {
      setEmpleados(baseColaboradores)
      return
    }

    const colaboradoresFiltrados = empleados.filter((empleado) =>
      Object.values(empleado).some((value) =>
        value.toString().toLowerCase().includes(term.toLowerCase())
      )
    )

    setEmpleados(colaboradoresFiltrados)
  }

  const showAlert = (message, type) => {
    setAlerta({ show: true, message, type })
    setTimeout(() => {
      setAlerta({ ...alerta, show: false })
    }, 3000)
  }

  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col>
            <Buscador onSearch={handleSearch} />
          </Col>
        </Row>
        <Row className='mt-4'>
          <Col className='px-4'>
            <Listado colaboradores={empleados} />
          </Col>
          <Col className='px-4'>
            <Formulario agregarEmpleado={handleAddEmployee} showAlert={showAlert} />
            {alerta.show && <Alerta message={alerta.message} type={alerta.type} />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default App
