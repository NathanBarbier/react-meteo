const Layout = ({children}) => {
    return ( 
        <>
            <div>
                <header></header>
                <body>{children}</body>
                <footer></footer>
            </div>
        </>
     );
}
 
export default Layout;