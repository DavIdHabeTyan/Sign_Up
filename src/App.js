import React, {Component} from 'react';
import SignUp from "./signUp/signUp";

class App extends Component {

   handleSubmit = (value) => {
      console.log(value)

   }

   render() {
      return (
         <>

         <SignUp
            defaultValues={{
               firstName: "David",
               lastName: "Habetyan",
               mobileNumber: "+37494737343",
               password: "*******"
            }}
            onSubmit={this.handleSubmit}
         />
         </>
      );
   }
}

export default App;