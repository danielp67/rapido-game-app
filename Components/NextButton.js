import React from 'react';

const NextButton = (props)=> {

    const {nextCard} = props

        return (

            <button type="button" className="btn btn-info btn-lg my-2" onClick={nextCard}>
                <i className="fa fa-refresh" aria-hidden="true"/>
            </button>

        )

}

export default NextButton;