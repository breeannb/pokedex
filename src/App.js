import React, { Component } from 'react';
import './App.css';
// import Header from './Header.js';
import HomePage from './HomePage.js'
import DetailPage from './DetailPage'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from 'react-router-dom';



  export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/home" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                        <Route 
                            path="/pokemon/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                    </Switch>
                </Router>
            </div>
        )
    }
}


//   render() {
//     // console.log(this.state.data);
//       // console.log(this.state.searchQuery); successfully logs out our state changes upon onChange
//       // console.log(data);
//       // console.log(this.state)
//     return (
//       <>
//         <div className="whole-page">
//           <Header />
//           <ListPage />


//         </div>
//       </>
//     )
//   }
// }

