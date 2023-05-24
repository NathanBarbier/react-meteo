import {Link, useLocation} from 'react-router-dom'

const Error404 = () => {
let location = useLocation();

    return ( 
    <>
        <div>
            <h2>Error404</h2>
            <h3>Nothing to see here !</h3>
            <p>Page : {location.pathname}</p>
        </div>

        <Link to='/'>Home</Link>
    </> 
    );
}
 
export default Error404;