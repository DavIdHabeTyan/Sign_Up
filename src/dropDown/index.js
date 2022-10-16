import React, {Component} from 'react';

class DropDown extends Component {
   render() {

      const {options, value, label, onChange} =this.props;

      return (
         <>
         <label htmlFor={"names"}>{label}</label>
            <select
               onChange={onChange}
               value={value}
               id="names"
            >
               {options.map((option) => {
                  return <option key={option.value} value={option.value}>{option.name}</option>
               })}

            </select>
         </>
      );
   }
}

export default DropDown;