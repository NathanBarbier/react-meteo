const Layout = ({children}) => {
    return ( 
        <>
            <div className="App">
                <header></header>
                <main>
                    <div className="App-main">
                       {children} 
                    </div>
                </main>
                <footer></footer>
            </div>
        </>
     );
}
 
export default Layout;