import React from 'react'

const SECURITY_CODE = 'paradigma'

class ClassState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            loading: false,
            value: ''
        }
    }
    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
                if (this.state.value === SECURITY_CODE) {
                    this.setState({ loading: false })
                    this.setState({ error: false })

                } else {
                    this.setState({ loading: false })
                    this.setState({ error: true })

                }
            }, 1000)
        }
    }

    render() {

        return (
            <div>
                <h2>Eliminar {this.props.name}</h2>
                <p>Ingrese el código de seguridad</p>
                {(this.state.error && !this.state.loading) && (
                    <p>Error!, Código incorrecto</p>
                )}
                {this.state.loading && (
                    <p>Cargando...</p>
                )}
                <input
                    value={this.state.value}
                    onChange={(event) => {
                        this.setState({ value: event.target.value });
                    }}
                    placeholder="Código de seguridad" />
                <button
                    onClick={() => this.setState({ loading: true })}
                >Comprobar</button>
            </div>
        )
    }
}

export { ClassState }