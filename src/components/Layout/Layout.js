import React from 'react';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
const Layout = ({ children }) => {
    return (
        <>
            <Header></Header>
            <main>
                <Navigation></Navigation>
                {children}
            </main>
        </>
    );
};

export default Layout;
