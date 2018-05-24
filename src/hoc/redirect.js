import React from 'react';
import { connect } from 'react-redux';

export default function (WrappedComponent, route='/') {
    class Redirect extends React.Component{

        componentDidMount(){
            if(this.props.auth){
                this.props.history.push(route);
            }
        }

        componentWillReceiveProps(nextProps){
            if(nextProps.auth){
                this.props.history.push(route)
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    function mapToStateToProps(state) {
        return {
            auth: state.user.auth
        }
    }

    return connect(mapToStateToProps)(Redirect)
}