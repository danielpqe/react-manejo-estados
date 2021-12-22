import React from 'react'

const SECURITY_CODE = 'paradigma'

function UseState({ name }) {
    // const [error, setError] = React.useState(false)
    // const [value, setValue] = React.useState('')
    // const [loading, setLoading] = React.useState(false)
    const [state, setState] = React.useState({
        value: '',
        loading: false,
        error: false,
        deleted: false,
        confirmed: false,
    })
    const { value, loading, error, confirmed, deleted } = state
    const onConfirm = () => {
        setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
        })
    };
    const onError = () => {
        setState({
            ...state,
            loading: false,
            error: true
        })
    };
    const onWrite = (event) => {
        setState({
            ...state,
            value: event.target.value,
        })
    };
    const onCheck = () => {
        setState({
            ...state,
            loading: true,
        })
    };
    const onDelete = () => {
        setState({
            ...state,
            deleted: true
        })
    };
    const onReset = () => {
        setState({
            ...state,
            confirmed: false,
            deleted: false,
            value: ''
        })
    }

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                if (value === SECURITY_CODE) {
                    onConfirm()
                } else {
                    onError()
                }
            }, 1000)
        }
    }, [loading])

    if (!confirmed && !deleted) {
        return (
            <div>
                <h2>Eliminar {name}</h2>
                <p>Ingrese el código de seguridad</p>
                {(error && !loading) && (
                    <p>Error!, Código incorrecto</p>
                )}
                {loading && (
                    <p>Cargando...</p>
                )}
                <input
                    value={value}
                    onChange={(event) => {
                        onWrite(event)

                    }}
                    placeholder="Código de seguridad"
                />
                <button
                    onClick={
                        () => {
                            //   setError(false)
                            onCheck()
                        }
                    }
                >Comprobar</button>

            </div>
        )
    } else if (confirmed && !deleted) {
        return (
            <React.Fragment>
                <p>Seguro quieres eliminar?</p>
                <button
                    onClick={() => {
                        onDelete()
                    }}
                >Si</button>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >No</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Eliminado</p>
                <button
                    onClick={() => {
                        onReset()
                    }}
                >Resetear</button>
            </React.Fragment>
        )

    }
}

export { UseState }










