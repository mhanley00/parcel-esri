import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class App extends Component {
   render() {
     return (
       <div >
         Hello world
         <p>Today is Tuesday</p>
         <p>My name is Bojan</p>
         <p>My name is Bojan</p>
         <p>My name is Bojan</p>
       </div>
     )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));
console.log('hello world');

