//import logo from "./logo.svg" //şu anda logo dizin altında olmadığı için çalışmadı
// <img src={logo} alt=""> </img>    bunu div in içinde tanımlıyoruz.

import {createElement, useState, useRef, forwardRef, useReducer, useCallback, useMemo, useEffect} from "react"
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
import AuthProvider from './context/AuthContext';
import { getPosts, getPostDetail,newPost } from "./services";
import {Routes, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/blog/404";
import Profile from "./pages/blog/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";

import "./style.css";


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
  
  /*         
  return(
    <SiteContext.Provider>
      <AuthProvider>
        <div class="App">
          <Homee/>
        </div>
      </AuthProvider>
    </SiteContext.Provider>
  );
  */

/*const [name, setName] = useState('duyan') 
const [avatar, setAvatar] = useState(false) 
const [users,setUsers] = useState(false)

const addPost = data => {

  const headers = new Headers()
  headers.append('Content-type', 'application/json')
  headers.append('Authorization', 'Bearer duhan123abc')

  const formData = new FormData()
  formData.append('userId',data.userID)
  formData.append('title',data.title)
  formData.append('body',data.body)


  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    //body: JSON.stringify(data),
    body: formData,
    headers: headers
    }
  )
  .then(res => res.json)
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if(res.ok && res.status == 200){
      return res.json()
    }
  })
  .then(data => setUsers(data))
  .catch(err => console.log(err))

  addPost({
    userID: 3,
    title: 'love of duyan',
    body:'Content of the post'
  })
}, [])

const submitHandle = e => {
  e.preventDefault()
  const data = {name,avatar}
  const formData = new FormData()
  formData.append('name',name)
  formData.append('avatar',avatar)

  fetch(('https://jsonplaceholder.typicode.com/users'),{
    method:'POST',
    body:formData
  })
  console.log('submit edildi')
}

 return(
  <>

    <form onSubmit={submitHandle}>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/> <br/>
      <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])}/> <br/>
      <button type="submit" disabled={!name || !avatar}>Kaydet</button> <br/>     
    </form>

      <h1>User List</h1>
      <ul>
      {users && users.map(user => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>

  </>
 )*/


  /*useEffect(() => {
    getPosts().then(res => console.log(res))
    getPostDetail(2).then(res => console.log(res))
    newPost({
      userId: 3,
      title: 'test',
      body: 'testt'
    }).then(res => console.log(res))
 })

  return(
    <>
      App
    </>
  )*/


  return(
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blog" element={<BlogLayout/>}>
          <Route index={true} element = {<Blog/>}/>
          <Route path="categories" element={<Categories/>}/>
          <Route path="post/:urlll" element={<Post/>}/>
          <Route path="*" element = {<Page404/>}/>
        </Route>
        <Route path="/auth" element={<AuthLayout/>}>
          <Route path = "login" element={<Login/>}/>
        </Route>
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="*" element = {<Page404/>}/>

      </Routes>
    </>
  );
}
export default App; 
