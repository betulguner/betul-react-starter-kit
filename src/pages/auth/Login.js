import { useAuth } from "../../context/AuthContext2";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import {useFormik, Formik, Form, Field} from "formik";

export default function Login(){
    
    const navigate = useNavigate()
    const location = useLocation()
    const {setUser} = useAuth()

    console.log(location)

    const loginHandle = () => {
        setUser({
            id:1,
            userName: 'duhanaktan'
        })
        navigate(location?.state?.return_url || '/' , {
            replace: true,
            state:{
                name:'betül'
            }
        })
    }

    const {handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: values => {
            setUser({values})
            navigate(location?.state?.return_url || '/' , {
                replace: true
            })
        }
    
    })

    //<button onClick={loginHandle}>Giriş yap</button>  //return içindeki loginPage yazısı altındaydı
    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            Login Page <br/>

            <Formik initialValues={{
                username: '',
                password: ''
            }} onsubmit={values => {
                console.log(values)
            }}>
                {({ values }) => (
                    <Form>
                        <Field name='username'/> <br/>
                        <Field name= 'password' type= 'password'/> <br/>
                        <button type='submit'>Giriş yap</button>
                    </Form>
                )}
            </Formik>

            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>kullanıcı adı</label>
                <input type='text' id='username' value={values.username} onChange={handleChange}/> <br/>

                <label htmlFor='password'>Password</label>
                <input type="password" id='password' value={values.password} onChange={handleChange} ></input> <br/>

                <button type='submit'> Giriş yap</button>
            </form>
        </div>
    )
}