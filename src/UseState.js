import React from 'react'

function UseState({ name }) {
    const [error, setError] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        if (loading) {
            setTimeout(() => {
                setLoading(false)
            }, 1000)
        }
    }, [loading])

    return (
        <div>
            <h2>Eliminar {name}</h2>
            <p>Ingrese el código de seguridad</p>
            {error && (
                <p>Error!, Código incorrecto</p>
            )}
            {loading && (
                <p>Cargando...</p>
            )}
            <input type="text" placeholder="Código de seguridad" />
            <button
                onClick={() => setLoading(true)}
            >Comprobar</button>

        </div>
    )
}

export { UseState }