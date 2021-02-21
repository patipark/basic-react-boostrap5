import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    // <Home />
    <Switch>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  )
}

export default App
