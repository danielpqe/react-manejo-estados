import React from 'react'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: true,
            loading: false
        }
    }

    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({ loading: false })
            }, 1000)
        }
    }

    render() {

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Ingrese el código de seguridad</p>
                {this.state.error && (
                    <p>Error!, Código incorrecto</p>
                )}
                {this.state.loading && (
                    <p>Cargando...</p>
                )}
                <input type="text" placeholder="Código de seguridad" />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }