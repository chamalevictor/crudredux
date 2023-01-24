import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
// Redux
import { useDispatch } from 'react-redux'
import { borrarProductoAction } from '../actions/productoActions'

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto
  const dispatch = useDispatch()

  // Confirmar si desea eliminarlo
  const confirmarEliminarProducto = (id) => {
    //Preguntar al usuario
    Swal.fire({
      title: 'Estas seguro?',
      text: 'Una vez eliminado, este producto no se podrá recuperar.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        // pasarlo al action
        dispatch(borrarProductoAction(id))
      }
    })
  }

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className='font-weight-bold'>${precio}</span>
      </td>
      <td className='acciones'>
        <Link to={`/productos/editar/${id}`} className='btn btn-primary mr-2 '>
          Editar
        </Link>
        <button
          type='button'
          className='btn btn-danger'
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Producto
