import React from 'react';
import { Layout, Menu, Col, Row, Button, Icon } from 'antd';
import '../css/App.css';  

const { Content } = Layout;

class LandingPageContent extends React.Component{
  render(){
    return(
      <Content style={{backgroundColor: 'white'}}>
        <Row gutter={32} >
          <Col span={12}>
            <div className='firstPageDivider'>
              <h1 style = {{fontSize: 36, color: '#1c1c1c', marginBottom: 10, fontWeight: 'bold', lineHeight: '120%'}}>
                Gillar du att programmera eller vill du lära dig?
              </h1>
              <p style={{fontSize: 20, color: '#212121', marginBottom: 50}}>
                Man lär sig bäst av att lära andra - Joina vår community och bli expert på programmering.
              </p>
              <Row>
                <div>
                  <Button onClick={this.props.navigateToIntroductionPage} className="callToActionButton" size='large' type="primary" style={{marginRight: 30, marginBottom: 10}}>Kom igång direkt!</Button>
                  <Button className="callToActionButton" size='large' type="ghost">Läs mer om oss</Button>
                </div>
              </Row>
            </div>
          </Col>
          <Col span={6} style={{float:'right', marginRight: 100}}>
            <div style={{paddingTop: 180, height: 400}}>
              <div className='floatingCode'/>
              <div className='floatingBinary'/>
              <div className="happyChildren"/>
            </div>
          </Col>
        </Row>

        <div className="polygon"/>
        <div className="content">
          <h1 style={{fontSize: 50, fontWeight: 'bold', color: 'white', float: 'right'}}>
           Vad gör vi?
          </h1>
        </div>
      </Content>

    )
  }
}

export default LandingPageContent