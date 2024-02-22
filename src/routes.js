import Home from "./pages/Home";
import Contact from "./pages/Contact";
import BlogLayout from "./pages/blog";
import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Blog from "./pages/blog/Blog";
import Page404 from "./pages/blog/404";
import Profile from "./pages/blog/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import HomeLayout from "./pages/blog/HomeLayout";
import Login from "./pages/auth/Login";
import PrivateRoute from "./components/PrivateRoute";



/*<Routes>
    <Route path="/" element={<HomeLayout/>} >
        <Route index={true} element = {<Home/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="blog" element={<BlogLayout/>}>
            <Route index={true} element = {<Blog/>}/>
            <Route path="categories" element={<Categories/>}/>
            <Route path="post/:urlll" element={<Post/>}/>
            <Route path="*" element = {<Page404/>}/>
        </Route>
    </Route>
    
    <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
    <Route path="/auth" element={<AuthLayout/>}>
        <Route path = "login" element={<Login/>}/>
    </Route>
    <Route path="*" element = {<Page404/>}/>
</Routes>*/

//yukardaki <Routes> etiketleri arasında tanımlananların routes değişkeninde toplanmış halidir aşağıdaki kodlar.
const routes = [
    {
        path: '/',
        name: 'home',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                name:'index',
                element: <Home/>
            },
            {
                path: 'contact',
                name:'contact',
                element: <Contact/>,
                admin:true
            },
            {
                name:'blog',
                path: 'blog',
                element: <BlogLayout/>,
                children: [
                    {
                        name: 'index',
                        index: true,
                        element: <Blog/>
                    },
                    {
                        name: 'categories',
                        path: 'categories',
                        element: <Categories/>
                    },
                    {
                        name: 'post',
                        path: 'post/:urlll',
                        element: <Post/>
                    },
                    {
                        name: 'notFound',
                        path: '*',
                        element: <Page404/>
                    }
                ]
            },
            {
                name: 'profile',
                path:'profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            },
            {
                name: 'auth',
                path: '/auth',
                element: <AuthLayout/>,
                children: [
                    {
                        name: 'login',
                        path: 'login',
                        element: <Login/>
                    }
                ]
            },
            {
                name: 'notFound',
                path: '*',
                element: <Page404/>
            }

        ]
    }
]

const authMap = routes => routes.map(route => {
    if(route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }
    if(route?.children){
        route.children = authMap(route.children)
    }

    return route
})

export default authMap(routes)