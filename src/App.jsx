// conditional rendering 
//1. ternary operator (expression) allowed in JSX ✅
// -to write if statement in JSX

//2. logical AND operator(expression) allowed in JSX 
// -to write if statement in JSX without else value 


//3. if else(statement)not allowed in JSX


import React from 'react'

const App = () => {
  const isLoggedIn = true
  const isHasLinkedin = false
  //out jsx  
  if (isLoggedIn && isHasLinkedin) {
    return (
      <div>
        <h1>Welcome to my app</h1>
      </div>
    )
  }
  else {
    return (
      <div>
        <h1>Please sign up</h1>
      </div>
    )
  }

}

export default App

// statement 

// if(isLoggedIn){
//   return "user logged in"
// }
// else{
//   return "user not logged in"
// }


// // ternary operator

// // condition ? "user logged in " :"user not logged in" 
// isLoggedIn ?"user logged in" : "user not logged in" // expression
