import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {signUp} from '../actions'
import {renderInput} from "../helpers";

class SignUp extends React.Component{
    constructor(props) {
        super(props);
    }

    handleSignUp(values){
        console.log('sign up info:' , values)

        this.props.signUp(values);
    }

    render(){
        const {handleSubmit} = this.props;

        return(
            <div className='row'>
                <div className="col s8 offset-s2">
                    <div className="card teal lighten-5">
                        <div className="card-content">
                            <span className="card-title">Sign Up</span>
                            <form onSubmit={handleSubmit(this.handleSignUp.bind(this))}>
                                <Field name='email' label='Email'
                                       component={renderInput}/>
                                <Field name='password' label='Password'
                                       component={renderInput} type='password'/>
                                <Field name='confirmPassword' label='Confirm Password'
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
    const {email, password, confirmPassword} = values;
    const errors={}

    if(!email){
        errors.email = 'Please enter your email address'
    }
    if(!password){
        errors.password = 'Please enter a password'
    }
    if(password !== confirmPassword){
        errors.confirmPassword = 'Your passwords do not match';
    }

    return errors;
}

SignUp=reduxForm({
    form: 'sign-up',
    validate: validate
})(SignUp);

export default connect(null, {signUp})(SignUp);