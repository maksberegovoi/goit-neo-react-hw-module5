import './App.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.jsx";
import Navigation from "./components/Navigation/Navigation.jsx";


function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default App
