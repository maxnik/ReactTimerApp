import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from 'Nav';
import Timer from 'Timer';
import Countdown from 'Countdown';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav}/>
        <div className="container">
          Main.jsx Rendered
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <Switch>
                <Route path="/countdown" component={Countdown} />
                <Route path="/" component={Timer} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;