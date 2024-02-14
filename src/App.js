//import logo from "./logo.svg" //şu anda logo dizin altında olmadığı için çalışmadı
// <img src={logo} alt=""> </img>    bunu div in içinde tanımlıyoruz.

import {createElement, useState, useRef, forwardRef, useReducer, useCallback, useMemo} from "react"
//import './style.scss';
import './tailwind.css'
import Button from "./components/Button";
import Tab from "./components/Tab"
import Test from "./test"
import Header from "./Header"
import AddTodo from "./addTodo";
import Todos from "./Todos";

import Homee from "./Homee";
import SiteContext from './context/SiteContext';


/*function Input(props, ref){
  return <input ref = {ref} type="text" {...props} />
}
Input = forwardRef(Input)


function reducer(state, action){
  switch(action.type){
    case 'SET_TODO':
      return{
        ...state,
        todo: action.value
      }
      case 'ADD_TODO':
        return{
          ...state,
          todo: ' ',
          todos:[
            ...state.todos,
            action.todo
        ]
      }

      case 'SET_SEARCH':
        return{
          ...state,
          search: action.value
        }
  }
}*/

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

  /*const [activeTab, setActiveTab] = useState(1)
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
  )*/

  /*const [show,setShow] = useState(false)
  return(
    <>
    <button onClick = {() => setShow(show => !show)}> {show ? 'Gizle' : 'Göster'} </button>
      
    {show && <Test/>}
    </>
  )*/

  /*const inputRef = useRef()
  const focusInput = () => {
    inputRef.current.focus()
  }

  return(
    <>
      <h1>useRef()</h1>
      <input style = {{backgroundColor: "pink",color: "blue"}} type="text" ref ={inputRef} />
      <button onClick={focusInput}>Focusss</button>

    </>
  )*/

  /*return(
    <>
      <h1>useForward()</h1>
      <Input style = {{backgroundColor: "pink",color: "blue"}} ref ={inputRef} />
      <button onClick={focusInput}>Focusss</button>
    </>
  )*/

  /*
  //TODO UYGULAMASI
  const [state,dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
    search: ''
  });

  const submitHandle = useCallback(
    e => {
      e.preventDefault()
      //setTodos([...todos, todo])
      //setTodo(' ')
      dispatch({
        type: 'ADD_TODO',
        todo: state.todo
      })
    },[state.todo]
  )

  const onChange = useCallback(
    e => {
      //setTodo(e.target.value)
      dispatch({
        type:'SET_TODO',
        value: e.target.value
      })
    },[])

  const searchHandle = e => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(()=>{
    return state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')) )
  },[state.todos, state.search])


  console.log('app rendered')
  const [count, setCount] = useState(0)

  return(
    <>
      <Header/>
      <h3>{count}</h3>
      <button onClick={() => setCount(count => count+1)}> Arttır </button>
      <hr/>

      <h1> TODO APP()</h1>
      <input type="text" value = {state.search} placeholder="ToDo da ara" onChange={searchHandle}></input>
      {state.search}
      <hr/>
      <AddTodo onChange={onChange} submitHandle={submitHandle} todo={state.todo}/>
      <Todos todos={filteredTodos}/>

    </>
  )*/

  /*
    const [name,setName] = useState('')
    const [inputVal, setInputVal] = useState(''); 
    const [description, setDescription] = useState(''); 
    const  [gender,setGender] = useState('2');

    const categoryList = [
      {key:1, value:'PHP'},
      {key:2, value:'JavaScript'},
      {key:3, value:'CSS'},
      {key:4, value:'HTML'}
    ]
    const [categories, setCategories] = useState([])

    const [rules,setRules] = useState(true)

    return(
      <>
        <button onClick = {()=>{setName(inputVal)}}>Change Name</button>
        <input type="text" value={inputVal} onChange={(e) => setInputVal(e.target.value)} style={{backgroundColor:'pink',margin:'20px',}}/>
        <br/>
        {name}
        <br/>
        

        <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
        <br/>
        {description}


        <select value={gender} onChange={e => setGender(e.target.value)}>
          <option value=" ">Seçin</option>
          <option value="1">Erkek</option>
          <option value="2">Kadın</option>
        </select>
        <br/>
        {gender}<br/>


        <select value={categories} multiple = {true} onChange={(e) => setCategories([...e.target.selectedOptions].map(option => +option.value))}>
          {categoryList.map(category => (
            <option value={category.key.toString()} key={category.key} >{category.value}</option>
          ))}          
        </select>
        <br/>
        <pre>{JSON.stringify(categories,null,2)}</pre>


        <label>
          <input type="checkbox" checked={rules} onChange={e => setRules(e.target.checked)}/>
          Kuralları kabul ediyorum
        </label>
        <br/>
        <button disabled={!rules}>Devam et</button> 
      </>
    );*/

  

  return(
    <SiteContext.Provider>
      <div class="App">
        <Homee/>
      </div>

    </SiteContext.Provider>
  );
 } 

export default App; 
