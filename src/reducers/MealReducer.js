 export default function mealReducer(
       state={}, action) {
    //  state = {meals: []}, action) {
// debugger;
    switch (action.type) {
        case 'FETCH_ROUTINES':
            // return state
            return {meals: action.payload}
        case 'ADD_ROUTINE':
            let mealId = action.payload.id // + 1
            console.log('mealReducer -> mealId', mealId);
            let newMeal = action.payload
            // console.log('mealReducer -> state.meals 2', state.meals);

                return {...state.meals, meals: state.meals.concat(newMeal)}

        case 'ADD_ROUTINE_DRILL':
            // let mealId = [action.payload.id -1]
            let mealDrills =  state.meals.map(meal => {
                if (meal.id === action.payload.id) {
                    return action.payload
                    } else {
                        return meal
                    }
                  }
                )
            return {...state, meals: mealDrills}

        default:
            // console.log('accountReducer -> state', state);
            return state
    }
}