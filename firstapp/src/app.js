import React from 'react';

class App extends React.Component {

   someNum =3;

   render() {
      return (
     <div>
        <h1>First React App</h1>
         <div>
           Var someNum (Property in the containing class) = {this.someNum}
         </div>
     </div>
      );
   }
}
export default App;