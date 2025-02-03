import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home, Login, Register, Settings } from '../pages'
import { UpdatePassword, LanguageAndTheme } from '../components'

function Navigations() {
    return (
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/Home' element={<Home></Home>} />
            <Route path='/Login' element={<Login></Login>} />
            <Route path='/Register' element={<Register></Register>} />

            <Route path='/Settings' element={<Settings></Settings>}>
                <Route path='updatePassword' element={<UpdatePassword></UpdatePassword>} />
                <Route path='displaysettings' element={<LanguageAndTheme></LanguageAndTheme>} />
            </Route>

        </Routes>
    )
}

export default Navigations