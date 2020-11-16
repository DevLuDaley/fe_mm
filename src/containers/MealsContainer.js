import React, { Fragment, Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchMeals} from '../actions/fetchMeals'
import MealsList from '../components/MealsList'


class MealsContainer extends Component {
    componentDidMount(){
        this.props.fetchMeals()
    }

    render() { 
        return ( 
        <Fragment>
            <p> MEALS CONTAINER PAGE Block:1</p>
            <Switch>
            {/* <Route path='/home' component={Home}/> */}
            <Route exact path='/meals' render={(routerProps) => <MealsList {...routerProps} meals={this.props.meals}/>}/>
            {/* <Route exact path='/meals' render={(routerProps) => <MealsList {...routerProps} meals={this.props.meals}/>}/> */}

            {/* <Route exact path='/meals/new' render={(routerProps) => <NewMealsContainer {...routerProps} meals={this.props.meals}/>}/> */}
            <MealsList meals={this.props.meals}/>
            {/* <Route exact path='/meals/:id' render={(routerProps) => <Meal {...routerProps} meals={this.props.meals}/>}/> */}
            
            </Switch>
            <p> MEALS CONTAINER PAGE Block:2</p>

        </Fragment> );
    }
}
 


//! redux store
const mapStateToProps = state => {
    // console.log('state.meals', state.meals);
    return(
        {
            meals: state.meals
        }
    )
}

 
export default connect(mapStateToProps, {fetchMeals})(MealsContainer);


// export default MealsContainer;