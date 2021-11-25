import React from 'react';
import ReactDOM from 'react-dom';
 
import Items from './Components/Items';
 
console.log('Hello Webpack Encore! Edit me in assets/app.js');
 class App extends React.Component {
    constructor() {
        super();
 
        this.state = {
            entries: []
        };
    }
    
     componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/posts/')
             .then(response => response.json())
             .then(entries => {
                 this.setState({
                     entries
                 });
             });
     }
     render() {
         return (
             <div className="row">
                 {this.state.entries.map(
                     ({ id, title, body }) => (
                         <Items
                             key={id}
                             title={title}
                             body={body}
                         >
                         </Items>
                     )
                 )}
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolor, ex delectus inventore velit excepturi, maiores quaerat, sapiente quam iste doloremque amet nisi labore dicta? Tempore debitis nostrum natus porro.</p>
             </div>
         );
     }
 }
 
 ReactDOM.render(<App />, document.getElementById('root'));
 