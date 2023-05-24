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