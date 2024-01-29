import { Title } from './components';
import Bootstrap from "./bootsrap";
import Tailwind from "./tailwind";
import'./tailwind.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'



function Styles()
{
    return(
        <div className="App">
      
        <Title>{process.env.NODE_ENV}</Title>
        <Title theme = 'dark'>{process.env.NODE_ENV}</Title>
  
  
        <p className='env'>
          {process.env.REACT_APP_API_URL}
          <span>test</span>
        </p>
  
        {process.env.NODE_ENV == 'production' && (
          <img src="/logo192.png"></img>
        )}
  
        <Bootstrap/>
        <Tailwind/>
  
  
  
      </div>
    )

}

export default Styles