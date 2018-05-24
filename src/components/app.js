import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './home';
import Nav from './nav';
import About from './about';
import SecretDoc from './secret_doc';
import OperativesList from './operative_list';
import auth from '../hoc/auth';
import SignUp from './sign_up';

import {Route} from 'react-router-dom';

const App = () => (
        <div className="app">
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/secret-docs' component={auth(SecretDoc)}/>
            <Route path='/operatives-list' component={OperativesList}/>
            <Route path='/sign-up' component={SignUp}/>
        </div>
);

export default App;
