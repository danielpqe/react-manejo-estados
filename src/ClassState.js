import React from 'react'

class ClassState extends React.Component {
    render() {
        return (
            <div>
                <h2>Eliminar ClassState</h2>
                <p>Ingrese el código de seguridad</p>
                <input type="text" placeholder="Código de seguridad" />
                <button>Comprobar</button>
            </div>
        )
    }
}

export { ClassState }