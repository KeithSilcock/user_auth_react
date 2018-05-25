import React from 'react';
import {getMovieQuote} from "../actions";
import {connect} from 'react-redux';

class MovieQuote extends React.Component{
    componentDidMount(){
        this.props.getMovieQuote();
    }
    render(){
        const {quote} = this.props;
        return(
            <div>
                <h1 className="center">Movie Quote</h1>
                <h3 className="center">{quote}</h3>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        quote: state.movie.quote,
    }
}

export default connect(mapStateToProps, {getMovieQuote})(MovieQuote);