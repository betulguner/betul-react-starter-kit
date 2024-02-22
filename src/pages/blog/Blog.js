import { Helmet } from "react-helmet";

export default function Blog(){
    return(
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            
            <ul>
                <li>
                    <a href="#">blog1</a>
                </li>

                <li>
                    <a href="#">blog2</a>
                </li>
            </ul>
        </div>
    )
}