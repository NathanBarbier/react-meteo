import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Meteo from "../pages/Meteo";
import Layout from '../components/layout/Layout';

const Routeur = () => {
    return ( 
        <>
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Meteo/>}/>
                </Routes>
            </Layout>
        </Router>
    </>
     );
}
 
export default Routeur;