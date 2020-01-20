import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/style.css';

import Navbar from './components/navbar';
import Courses from './components/courses';
import Providers from './components/providers';

class App extends Component {
    
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Route exact path="/" render={() => <Courses courses={this.state.courses} />} />
                    <Route path="/courses" render={() => <Courses courses={this.state.courses} />} />
                    <Route path="/providers" render={() => <Providers providers={this.state.providers} />} />
                </div>
            </BrowserRouter>
        );
  }

  state = {
    courses: [],
    providers: []
  };

  componentDidMount() {

    Promise.all([
        fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=7&sortField=RELEVANCE&profession=36&courseType=CD_ANYTIME&isFeatured=true`),
        fetch(`https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=10&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME&term=`)
      ])
      .then(([featured, courses]) => {
        featured.json()
        .then(featuredjson => {
            courses.json()
            .then(coursesjson => {
                const allCourses = featuredjson.items.concat(coursesjson.items);  
                this.setState({ courses: allCourses });
            })
        });
        return true;
      })
      .then(result => {
        fetch('https://api.courses.test.cebroker.com/offerings')
        .then(result => result.json())
        .then(data => {
            this.setState({ providers: data.items });
        })
        .catch(console.log);
      })
      .catch(console.log);
  }


}

export default App;
