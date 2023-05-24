const Layout = ({children}) => {
    return ( 
        <>
            <div className="App">
                <header></header>
                <main>
                    <div className="App-main mx-auto pt-5">
                       {children} 
                    </div>
                </main>
                <footer></footer>
            </div>
        </>
     );
}
 
export default Layout;