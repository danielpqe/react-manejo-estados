import React from 'react'

const SECURITY_CODE = 'paradigma'

function UseReducer({ name }) {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    const { value, loading, error, confirmed, deleted } = state

    // Action Creators
    const onConfirm = () => dispatch({ type: actionTypes.confirm });
    const onError = () => dispatch({ type: actionTypes.error });
    const onWrite = (event) => {
        dispatch({
            type: actionTypes.write,
            payload: event.target.value
        })
    };
    const onCheck = () => {
        dispatch({ type: actionTypes.check })
    };
    const onDelete = () => {
        dispatch({ type: actionTypes.delete })
    };
    const onReset = () => {
        dispatch({ type: actionTypes.reset })
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
                    onChange={onWrite}
                    // onChange={(event) => {
                    //     onWrite(event)
                    // }}
                    placeholder="Código de seguridad"
                />
                <button
                    onClick={onCheck}
                >Comprobar</button>

            </div>
        )
    } else if (confirmed && !deleted) {
        return (
            <React.Fragment>
                <p>Seguro quieres eliminar?</p>
                <button
                    onClick={onDelete}
                >Si</button>
                <button
                    onClick={onReset}
                >No</button>
            </React.Fragment>
        )
    } else {
        return (
            <React.Fragment>
                <p>Eliminado</p>
                <button
                    onClick={onReset}
                >Resetear</button>
            </React.Fragment>
        )

    }
}



const initialState = {
    value: '',
    loading: false,
    error: false,
    deleted: false,
    confirmed: false,
}

const actionTypes = {
    confirm: 'CONFIRM',
    delete: 'DELETE',
    write: 'WRITE',
    check: 'CHECK',
    write: 'WRITE',
    error: 'ERROR',

}

// const reducer = ( state, action )=> {
// }


// const reducer = (state, action) => {
//     if (action.type === 'ERROR') {
//         return {
//             ...state,
//             error: true,
//             loading: false
//         }
//     } else if (action.type === 'CHECK') {
//         return {
//             state,
//             loading: true
//         }
//     } else {
//         return {
//             ...state
//         }
//     }
// }

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'ERROR':
//             return {
//                 ...state,
//                 error: true,
//                 loading: false
//             };
//         case 'CHECK':
//             return {
//                 ...state,
//                 loading: true
//             };
//         default:
//             return {
//                 ...state
//             }
//     }
// }

const reducerObject = (state, payload) => ({
    [actionTypes.error]: {
        ...state,
        error: true,
        loading: false
    },
    [actionTypes.check]: {
        ...state,
        loading: true
    },
    [actionTypes.confirm]: {
        ...state,
        loading: false,
        error: false,
        confirmed: true,
    },
    [actionTypes.delete]: {
        ...state,
        deleted: true
    },
    [actionTypes.reset]: {
        ...state,
        confirmed: false,
        deleted: false,
        value: ''
    },
    [actionTypes.write]: {
        ...state,
        value: payload
    },

})

const reducer = (state, action) => {
    if (reducerObject(state)[action.type]) {
        return reducerObject(state, action.payload)[action.type]
    } else {
        return state
    }
}


export { UseReducer }
