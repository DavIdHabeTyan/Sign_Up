import React, {Component} from 'react';
import DropDown from "../../dropDown";

const months = [
   {value: 1, name: 'Jan'},
   {value: 2, name: 'Feb'},
   {value: 3, name: 'Mar'},
   {value: 4, name: 'Apr'},
   {value: 5, name: 'May'},
   {value: 6, name: 'June'},
   {value: 7, name: 'July'},
   {value: 8, name: 'Aug'},
   {value: 9, name: 'Sep'},
   {value: 10, name: 'Oct'},
   {value: 11, name: 'Nov'},
   {value: 12, name: 'Dec'},
];

const years = [
   1992,
   1993,
   1994,
   1995,
   1996,
   1997
]

const days = Array.from({length: 10}, (_, i) => i + 1);


class BirthDayInput extends Component {
   render() {
      return (
         <div className={"birthDayData"}>
            <DropDown
               label={"Day"}
               options={days.map((day) => ({value: day, name: day}))}
            />

            <DropDown
            label={"Month"}
            options={months}
            />

            <DropDown
            label={"Year"}
            options={years.map((year) => ({value:year, name:year}))}
            />

         </div>
      );
   }
}

export default BirthDayInput;