import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Home, Login, Register, Settings } from '../pages'
import { ChangePassword, LanguageAndTheme } from '../components'

function Navigations() {
    return (
        <Routes>
            <Route path='/' element={<Login></Login>}/>
            <Route path='/Home' element={<Home></Home>}/>
            <Route path='/Login' element={<Login></Login>} />
            <Route path='/Register' element={<Register></Register>} />


            <Route path='/Settings' element={<Settings></Settings>}>
            <Route path='changePassword' element={<ChangePassword></ChangePassword>}/>
            <Route path='displaysettings' element={<LanguageAndTheme></LanguageAndTheme>}/>
            </Route>
        </Routes>
    )
}

export default Navigations