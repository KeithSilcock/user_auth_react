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
                        <Link to='/secret-docs'>Secret Docs</Link>
                    </li>
                    <li>
                        <Link to='/operatives-list'>Operative List</Link>
                    </li>
                    <li>
                        <button style={btnStyle} className='btn red darken-2'
                                onClick={ () => changeAuth(false)}>Sign Out</button>
                    </li>
                </Fragment>
            )
        }
        return(
            <li>
                <button style={btnStyle} className='btn aqualBlue darken-2'
                        onClick={ () => changeAuth(true)}>Sign In</button>
            </li>
        )
    }

    render() {
        return(
            <nav style={{padding:'0 12px'}} className='nav-wrapper grey darken-2'>
                <Link className='brand-logo' to='/'>CIA DATA</Link>
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