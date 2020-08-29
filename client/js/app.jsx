import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Main from './Pages/Main'
import Header from './Components/Header'

export default function App(){
     return (
         <>
         <Header/>
         <Switch>
            <Route path="/" exact={true} component={Main}/>
         </Switch>
         </>
     )
}