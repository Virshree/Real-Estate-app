import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { Toaster } from "react-hot-toast"


function App() {

  return (
    <>
      <div>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
    
         
        </Routes>
        <Toaster
        position="top-right"
        toastOptions={{
          success: {
            style: {
              background: "#1E3A8A",
              color: "#fff",
            },
          },
          error: {
            style: {
              background: "#DC2626",
              color: "#fff",
            },
          },
        }}
        
          reverseOrder={false}/>
          /
       </BrowserRouter>
      
      </div>
      
    </>
  )
}

export default App
