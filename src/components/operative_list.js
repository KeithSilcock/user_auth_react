import React from 'react';
import auth from '../hoc/auth';

const OpList =  props => (
    <div>
        <h1 className="center">THE OPERATIVES HAVE NOT OPERATED IN DAYS</h1>
        <ol>
            <li>BRUCIE WILLIAMS</li>
            <li>SERM SKERVUUN</li>
            <li>COMRADE COMMIE</li>
            <li>OTHER OPERATIVES</li>
        </ol>
    </div>
)

export default auth(OpList)