import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeAuth} from '../actions'

class Nav extends React.Component {

    renderLinks(){
        const {auth, changeAuth} = this.props;
        const btnStyle={
            width:'131px',
        };
        if(auth){
            return (
                <Fragment>
                    <li>
                        <Link to='movie-quote'>Movie Quote</Link>
                    </li>
                    <li>
                        <Link to='/secret-docs'>Secret Docs</Link>
                    </li>
                    <li>
                        <Link to='/operatives-list'>Operative List</Link>
                    </li>
                    <li>
                        <Link className='btn red darken-2' to='/sign-Out'>Sign Out</Link>
                    </li>
                </Fragment>
            )
        }
        return(
            <Fragment>
                <li>
                    <Link to='sign-in'>Sign In</Link>
                </li>
                <li>
                    <Link className='btn aquaBlue darken-2' to='/sign-up'>Sign up</Link>
                </li>
            </Fragment>
        )
    }

    render() {
        return(
            <nav style={{padding:'0 12px'}} className='nav-wrapper grey darken-2'>
                <Link className='brand-logo left' to='/'>CIA DATA</Link>
                <ul className="right">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    {this.renderLinks()}
                </ul>
            </nav>
        )
    }
}

function mapStatesToProps(state){
    return {
        auth: state.user.auth,
    }
}

export default connect(mapStatesToProps, {changeAuth})(Nav)