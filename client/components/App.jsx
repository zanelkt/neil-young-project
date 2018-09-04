import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom';
import Nav from './Nav'
import Sidebar from './Sidebar'
import MainBody from './MainBody'

class App extends React.Component {
  render(){
    return (
    <div>
      <Router>
        <div>
          <div>
            <Route path="/" component={Nav}/>
          </div>

        <div className="sideplusstory"><Sidebar/>
        <div className="mainbody">
      <Route  path="/song/:story" render={props => {
              return <MainBody {...props }/>
            }}/>
        </div>
        </div>
      </div>
      </Router>
    </div>
    )
  }
}


export default App

