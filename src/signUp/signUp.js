import React, {Component} from 'react';
import TextInput from "../textInput";
import BirthDayInput from "./birthdayInput";
import GenderInput from "./genderInput";

class SignUp extends Component {
   constructor(props) {
      super(props);

      const { defaultValues } = this.props;


      this.state = {
         values: {
            firstName: "",
            lastName: "",
            mobileNumber: "",
            password: "",
            ...defaultValues,
         }
      }
   }

   handleInput = (name, value) => {
      this.setState({
         values: {...this.state.values,
         [name]: value
         }, })
   }

   render() {
      const { firstName, lastName, mobileNumber, password } = this.state.values;
      const { onSubmit } = this.props;

      return (
         <div className={"signup-box"}>
            <h1 className={"h1"}>Sign Up</h1>
            <form action="">
               <div className={"first_Name_And_lastName"}>
                  <TextInput onChange={(e) => this.handleInput("firstName", e)} value={firstName} label={"First Name"} placeholder={"First Name"}/>
                  <TextInput onChange={(e) => this.handleInput("lastName", e)} value={lastName} label={"Last Name"} placeholder={"Last Name"}/>
               </div>
               <br/>
               <TextInput onChange={(e) => this.handleInput("mobile", e)} value={mobileNumber} label={"Phone"} placeholder={"Mobile number or email"} />
               <TextInput onChange={(e) => this.handleInput("password", e)} value={password} label={"Password"} placeholder={"New password"}/>
               <br/>
               <br/>
               <BirthDayInput/>
               <br/>

               <GenderInput />
               <br/>
               <button onClick={() => onSubmit(this.state.values)} type={'button'}> Sign Up</button>
            </form>

         </div>
      );
   }
}

export default SignUp;