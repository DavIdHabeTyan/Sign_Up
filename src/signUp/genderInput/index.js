import React, {Component} from 'react';

class GenderInput extends Component {
   render() {
      return (
         <>
         <div className={"gender"}>
            <label htmlFor="female">Female</label>
            <input type="radio" id={"female"} name={"gender"}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id={"male"} name={"gender"}/>
            <label htmlFor="custom">Custom</label>
            <input type="radio" id={"custom"} name={"gender"}/>
         </div>
            <br/>
            <select name="pronoun" id="pronoun">
               <option  value=""> She: "Wish her a happy birthday"</option>
               <option value=""> He: "Wish him a happy birthday</option>
               <option value=""> They: "Wish them a happy birthday"</option>

            </select>
            <br/>
            <br/>
            <input type="text" placeholder={"Gender (optional)"}/>
         </>
      );
   }
}

export default GenderInput;