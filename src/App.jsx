import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes , Route} from 'react-router-dom'
import PaymentPage  from './pages/paymentPage'
import CalendarPage  from './pages/calendarPage'

function App() {

  let component
  switch (window.location.pathname) {
    case "/":
      component = <PaymentPage />
      break
    case "/calendar":
      component = <CalendarPage />
      break
  }

  return (
    <>
      {component}
    </>
  );
  
}

export default App
