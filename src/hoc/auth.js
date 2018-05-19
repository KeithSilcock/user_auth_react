import React from 'react';
import {connect} from 'react-redux';

export default function (WrappedComponent) {

    class Auth extends React.Component{
        componentDidMount(){
            if(!this.props.auth){
                this.props.history.push('/')
            }
        }
        //makes it so that if you aren't authorized, you leave the page.
        componentWillReceiveProps(nextProps){
            if(!nextProps.auth){
                this.props.history.push('/');
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state) {
        return {
            auth: state.user.auth,
        }
    }

    return connect(mapStateToProps)(Auth)
}