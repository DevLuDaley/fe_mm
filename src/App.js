import React, { Component, Fragment }from 'react';
import './App.css';
// import axios from 'axios'
// import {connect} from 'react-redux'
// import {fetchMeals} from './actions/fetchMeals'
import MealsContainer from './containers/MealsContainer'
// import DrillsContainer from './containers/DrillsContainer'
// import Navbar from './components/Navbar'


class App extends Component {
  // state = {  }
componentDidMount() {
  // this.props.fetchMeals({ type: 'FETCH_MEALS', payload: {meal_name: 'name'}})
//   fetch('http://localhost:3000/meals',
// { method: 'GET'}
// )
// .then(response => response.json())
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}
  // this.props.meals
  // this.props.fetchMeals

  render() { 
    return (
      <Fragment>
        <div className="App">
        {/* <Navbar/> */}
        <MealsContainer/>
        {/* <br/> */}
        {/* <DrillsContainer/> */}
          {/* { jsonResponse } */}
        </div>

      </Fragment> 
     );
  }
}

// ! call dispach on the return value of the 2nd argument (null,fetchMeals) 

export default App;
