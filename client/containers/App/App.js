import React from 'react'
import { Route } from 'react-router-dom'
import '../../static/styles/styles.scss'
import './App.scss'

import SiteHeader from '../../components/header/Header'
import PageCalculator from '../pages/PageCalculator'


const App = () => {
  return (
    <div className="app">
      <SiteHeader/>
      <Route exact path={`/`} component={ PageCalculator }/>
    </div>
  )
}

export default App