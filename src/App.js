//import logo from "./logo.svg" //şu anda logo dizin altında olmadığı için çalışmadı
// <img src={logo} alt=""> </img>    bunu div in içinde tanımlıyoruz.

import {createElement, useState, useEffect} from "react"
//import './style.scss';
import './tailwind.css'
import Button from "./components/Button";
import Tab from "./components/Tab"


function App() {

  /*
  const h1 = createElement('h1',null,'BD STORE')
  const todos = ['todo1','todo2','todo3']

  return createElement('main',{
    className: 'test',
    id: 'main'
  }, h1)
  
  
  return (
    <main id='main' className="test">
      <h1>BD Store</h1>

      <ul>
        {todos.map(todo => (
          <li>
            {todo}
          </li>
        ))}
      </ul>
    </main>
  );

  const searchFunction = () => {
    alert('hello!')
  }*/


  const [activeTab, setActiveTab] = useState(1)

  return(
    <>
      <div style={{padding:20}}>
        <button onClick={() => setActiveTab(2)}>Active tab ı değiştir</button>
        <Tab activeTab={activeTab} setActiveTab={setActiveTab}>
          <Tab.Panel title="Profil">1.Tab</Tab.Panel>
          <Tab.Panel title="Hakkında">2.Tab</Tab.Panel>
          <Tab.Panel title="Ayarlar">3.Tab</Tab.Panel>
        </Tab>
      </div>


      <div style = {{padding:20}}>
        <Button text="button örneği" />
        <Button text="button örneği" variant = "success"/>
        <Button text="button örneği" variant = "danger"/>
        <Button text="button örneği" variant = "warning"/>

      </div>      
    </>
  )
}

export default App; 
