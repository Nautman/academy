import React from 'react';
import { Layout, Menu, Col, Row, Button, Icon } from 'antd';
import DUFooter from './components/DUFooter.js'
import DUHeader from './components/DUHeader.js'
import LandingPageContent from './components/LandingPageContent.js'
import IntroductionPage from './components/IntroductionPage.js'

class App extends React.Component{
  constructor(){
    super()
    this.state={
      landingPage: true,
      introductionPage: false,
    }
  }

  navigateToIntroductionPage(){
    console.log('switch page')
    //this.setState({
    //  landingPage: false,
    //})
  }

  render(){
    return (
      <div className="App">
        <Layout className="layout">
          <DUHeader/>
          {this.state.landingPage && <LandingPageContent navigateToIntroductionPage={this.navigateToIntroductionPage}/>}
          {this.state.introductionPage && <IntroductionPage/>}
          <DUFooter/>
        </Layout>
      </div>
    );
  }
}

export default App;
