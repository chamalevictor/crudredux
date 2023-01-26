import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editarProductoAction } from '../actions/productoActions'

const EditarProducto = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // nuevo state producto
  const [producto, guardarProducto] = useState({
    nombre: '',
    precio: ''
  })

  // Producto a editar
  const productoEditar = useSelector((state) => state.productos.productoEditar)

  useEffect(() => {
    guardarProducto(productoEditar)
  }, [productoEditar])

  // Leer los datos del formulario
  const onChangeFormulario = (e) => {
    guardarProducto({
      ...producto,
      [e.target.name]: e.target.value
    })
  }

  const { nombre, precio } = producto

  const submitEditarProducto = (e) => {
    e.preventDefault()
    dispatch(editarProductoAction(producto))
    navigate('/')
  }

  return (
    <div className='row justify-content-center'>
      <div className='clo-md-8'>
        <div className='card-body'>
          <h2 className='text-center mb-4 font-weight-bold'>Editar Producto</h2>
          <form onSubmit={submitEditarProducto}>
            <div className='form-group'>
              <label htmlFor=''>Nombre Producto</label>
              <input
                type='text'
                className='form-control'
                placeholder='Nombre Producto'
                name='nombre'
                value={nombre}
                onChange={onChangeFormulario}
              />
            </div>
            <div className='form-group'>
              <label htmlFor=''>Precio Producto</label>
              <input
                type='number'
                className='form-control'
                placeholder='Precio Producto'
                name='precio'
                value={precio}
                onChange={onChangeFormulario}
              />
            </div>

            <button
              type='submit'
              className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
            >
              Guardar Cambios
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
export default EditarProducto
