import React, { useReducer, useEffect } from 'react'
import AppRouter from './routes/AppRouter'
import { AuthContext } from './auth/AuthContext'
import { AuthReducer } from './auth/AuthReducer'
import 'antd/dist/antd.dark.min.css'

const init = () => {
    return JSON.parse(localStorage.getItem('userQuizPoling')) || { logged: false }
}

const App = () =>{
    const [userQuizPoling, dispatch] = useReducer(AuthReducer, {}, init)

    useEffect(() => {
        localStorage.setItem( 'userQuizPoling', JSON.stringify(userQuizPoling) );
    }, [userQuizPoling]) 

    return(
        <AuthContext.Provider value ={{ userQuizPoling, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default App