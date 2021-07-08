import React from 'react';
import Router from './router/Router';
import './App.scss';
import Layout from './components/Layout/Layout';
function App() {
    return (
        <Layout>
            <Router></Router>
        </Layout>
    );
}

export default App;
