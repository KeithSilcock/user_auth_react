import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signIn} from '../actions'
import {renderInput} from "../helpers";

class SignIn extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSignIn(values){
        console.log('sign up info:' , values)

        this.props.signIn(values);
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <div className='row'>
                <div className="col s8 offset-s2">
                    <div className="card teal lighten-5">
                        <div className="card-content">
                            <span className="card-title">Sign In</span>
                            <form onSubmit={handleSubmit(this.handleSignIn.bind(this))}>
                                <Field name='email' label='Email'
                                       component={renderInput}/>
                                <Field name='password' label='Password'
                                       component={renderInput} type='password'/>
                                <div className="row center">
                                    <button className='btn teal darken-2'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function validate(values) {
    const {email, password} = values;
    const errors={};

    if(!email){
        errors.email = 'Please enter your email address'
    }
    if(!password){
        errors.password = 'Please enter a password'
    }

    return errors;
}

SignIn=reduxForm({
    form: 'sign-in',
    validate: validate
})(SignIn);

export default connect(null, {signIn})(SignIn);