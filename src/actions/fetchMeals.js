
// export function fetchMeals(action) {
export function fetchMeals() {
    // ! thunk allows meus to use dispatch here
    // ! bring in dispatch so that we can async if not the connect will handle synchronously
    return(dispatch) => { 
        // fetch('http://localhost:3000/api/v1/meals')
        // fetch('https://127.0.0.1:8000/api/v1/meals', {
        fetch('http://127.0.0.1:8000/meals/', {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })
        // fetch('http://localhost:8080/herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/meals')
        // fetch('https://cors-anywhere.herokuapp.com/https://hoop-drills.herokuapp.com/api/v1/meals')
        // fetch('https://cors-anywhere.hoop-drills.herokuapp.com/api/v1/meals')
        .then(resp => resp.json())
        .then(data => dispatch({
            type: 'FETCH_ROUTINES', payload: data}
        ))
    }
        
// .then(jsonResponse =>
//   console.log('App -> componentDidMount -> jsonResponse', jsonResponse))
}