// import React, { Fragment, useState, useEffect } from 'react'
import React, { Fragment } from 'react'
import {Link} from 'react-router-dom';

const MealsList = (props) => {
    // console.log(props)
        var noDots = {listStyleType: 'none'};
    return (
        <Fragment>
            <ul
                key={props.id}
                id='list-of-meals'
                className='meals-list'
                style={noDots}
            >
                {
                  props.meals && props.meals.map(
                    meal =>
                        <li key={meal.id}>
                            <Link to={`/meals/${meal.id}`}>
                                    {meal.name}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </Fragment>
        );

}

export default MealsList;