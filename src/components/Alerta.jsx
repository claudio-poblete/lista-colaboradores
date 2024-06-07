import React from 'react'

export default function Alert({alerta}) {

  const { texto, tipo, estado } = alerta;

  return (
    <div className='alert-box col-12 col-lg-4'>
    <div className={`alert  ${estado ? tipo : 'display-none'} `}>
      <span>{texto}</span>
    </div>
    </div>
  )
}