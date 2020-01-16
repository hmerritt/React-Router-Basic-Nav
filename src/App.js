import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route } from 'react-router-dom';

const App = () => (
    <div>
        <Navigation />

        {/* Routes */}
        <Route path="/" exact  />
        <Route path="/about"   />
        <Route path="/contact" />
    </div>
);

export default App;
