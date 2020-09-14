import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routes = () => {
    return(
        <BrowserRouter>
            <Route component={Home} path="/" exact/>
            <Route component={CreatePoint} path="/create-point" />
        </BrowserRouter>
    )
}

//o exect é pra diferenciar os caminhos, pq senao ele checa as barras e cai de volta na home

export default Routes