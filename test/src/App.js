import React from 'react';
import { Layout, Menu, Col, Row, Button, Icon } from 'antd';
import DUFooter from './components/DUFooter.js'
import DUHeader from './components/DUHeader.js'
import LandingPageContent from './components/LandingPageContent.js'
import IntroductionPage from './components/IntroductionPage.js'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      landingPage: true,
      introductionPage: false,
    }
  }

  navigateToIntroductionPage(){
    console.log('switc page')
    //this.setState({
    //  landingPage: false,
    //})
  }

  render(){
    return (
        <Router>
          <div className="App">
            <Layout className="layout">
              <DUHeader/>
              <LandingPageContent navigateToIntroductionPage={this.navigateToIntroductionPage}/>
              <IntroductionPage/>
              <DUFooter/>
            </Layout>
          </div>
        </Router>
    );
  }
}

export default App;
