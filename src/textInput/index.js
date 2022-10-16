import React, {Component} from 'react';

class TextInput extends Component {
   constructor(props) {
      super(props);
      this.state = {
         value: props.value
      }
   }

   handleChange = (e) => {
      const value = e.target.value;
      this.setState({value});
      this.props.onChange(value)
   }

   render() {
      const {label, placeholder, onChange} = this.props;

      return (
         <div className={"text_Input"}>
            <label htmlFor="text-input">{label}</label>
            <br/>
            <input
               id="text-input"
               type="text"
               value={this.state.value}
               placeholder={placeholder}
               onChange={this.handleChange}

            />
         </div>
      );
   }
}

export default TextInput;
