const Layout = ({children}) => {
    return ( 
        <>
            <div className="App">
                <header></header>
                <body>
                    <div className="App-main">
                       {children} 
                    </div>
                </body>
                <footer></footer>
            </div>
        </>
     );
}
 
export default Layout;