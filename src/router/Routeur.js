import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import Layout from '../components/layout/Layout';
import Error404 from '../error/Error404';

const Routeur = () => {
    return ( 
        <>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='*' element={<Error404/>}/>
                </Routes>
            </Layout>
        </Router>
    </>
     );
}
 
export default Routeur;