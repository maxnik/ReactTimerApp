import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Nav from 'Nav';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Nav}/>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <Switch>
                <Route path="/nav" component={Nav} />
                <Route path="/" component={Nav} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Main;