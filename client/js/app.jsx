import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Main from './Pages/Main'
import Header from './Components/Header'
import Admin from './Pages/Admin'
import Data from './Pages/Data'

export default function App(){
     return (
         <>
         <Header/>
         <Switch>
            <Route path="/admin" component={Admin}/>
            <Route path="/data" component={Data}/>
            <Route path="/" component={Main}/>
         </Switch>
         </>
     )
}