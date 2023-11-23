import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Screen from './Components/Screen'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Screen/>} />
          </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
