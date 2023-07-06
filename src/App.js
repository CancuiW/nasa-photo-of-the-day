import React,{useState,useEffect}from "react";
import "./App.css";
import axios from "axios";
import NasaPhoto from "./components/NasaPhoto";


function App() {
  const [originData,setOriginData]=useState()

  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
          .then (res=>{
            console.log(res.data)
            setOriginData(res.data)
          })
          .catch(err=>{
            console.error(err)
          })

  },[])



  return (
    <div className="App">
     {originData && <NasaPhoto datas={originData} />}
    </div>
  );
}

export default App;

