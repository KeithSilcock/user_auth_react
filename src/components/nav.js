import React from 'react';
import {Link} from 'react-router-dom';

class Nav extends React.Component {

    render() {
        return(
            <nav className='nav-wrapper'>
                <Link style={{marginLeft:'10px'}} className='brand-logo' to='/'>CIA DATA</Link>
                <ul className="right">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/secret-docs'>Secret Docs</Link>
                    </li>
                    <li>
                        <Link to='/operatives-list'>Operative List</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav