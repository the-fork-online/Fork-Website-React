// Components
// Core Components
import React from "react"
import { BrowserRouter, Route } from 'react-router-dom';

// Style Components
import 'bootstrap/dist/css/bootstrap.min.css';

// Page Components
import Footer from '../components/Footer/Footer'
import About from '../components/About/About'
import Team from "./Team"

// Style
import './style.css'

export default () => <div>
    
    <About />
    <BrowserRouter>
        <div>
            <Route path="/Team" component={Team} />
        </div>
    </BrowserRouter>
    <Footer />
</div>