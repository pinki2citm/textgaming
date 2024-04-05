import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Link, BrowserRouter as Router, Routes } from 'react-router-dom'  

function App() {
  const [mode,setMode]=useState('dark');
 const [alert,setAlert]= useState(null);
 const showAlert =(message, type)=>
 {
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(()=>
  {
   setAlert(null);
  },1500)
  
 }
  const toggle=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.background='#042743';
      showAlert("Dark mode is enabled","success");
     document.title="TextGaming / Dark Mode";
    }
    else
    {
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode is enabled","success");
      document.title="TextGaming / Light Mode";
    }
  }

  return (
    <>
    <Router>
   <Navbar title="TextGaming" About="About" togglemode={toggle} mode={mode} />
   <Alert alert={alert}/>

   <Routes>
  
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/" element={<Text heading="Enter text here"
     showAlert={showAlert}/>}/>
   </Routes>

</Router>
   
  
   </>
  );
}

export default App;
