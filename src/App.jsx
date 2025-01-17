// conditional rendering 
//1. if else(statement)not allowed in JSX
//2. ternary operator (expression) allowed in JSX 
//3. logical AND operator(expression) allowed in JSX 


import React from 'react'

const App = () => {
  const isLoggedIn = true

  return (
    <div>
      {/* if isLogged in is true show user logged in
      else show user not logged in 
      */}


      <h1>
        {
          // ternary operator 
          isLoggedIn ? "user logged in " : "not logged in "
        }
      </h1>
    </div>
  )
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
