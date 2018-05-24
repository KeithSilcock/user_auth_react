import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Home from './home';
import Nav from './nav';
import About from './about';
import SecretDoc from './secret_doc';
import OperativesList from './operative_list';
import auth from '../hoc/auth';
import SignUp from './sign_up';
import SignIn from './sign_in';
import MovieQuote from './movie_quote';
import redirect from '../hoc/redirect';

import {Route} from 'react-router-dom';

const App = () => (
        <div className="app">
            <Nav/>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/secret-docs' component={auth(SecretDoc)}/>
            <Route path='/operatives-list' component={OperativesList}/>
            <Route path='/sign-up' component={redirect(SignUp, '/movie-quote')}/>
            <Route path='/sign-in' component={redirect(SignIn, 'movie-quote')}/>
            <Route path='/movie-quote' component={auth(MovieQuote)}/>
        </div>
);

export default App;
