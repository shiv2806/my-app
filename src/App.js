import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1700);
  }


  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode Enable","success")
      document.title = "TextUtils : Dark Mode Enable"
      
      // setInterval(() => {
      //   document.title = "wow"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "use Now"
      // }, 1500);


    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enable","success")
      document.title = "TextUtils : light Mode Enable"
     
    }
  }
  return (
    <>
      

     
      <Navbar about="About US" mode={mode} toggleMode={toggleMode} title="TextUtils"/>
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} title='Enter your text ' mode={mode}/>
      <br /><br />
      <About/>
        


      
    </>
  );
}

export default App;
