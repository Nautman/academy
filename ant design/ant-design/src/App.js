import React from 'react';
import { Layout, Menu, Col, Row, Button, Icon } from 'antd';
import './App.css';
import DUFooter from './components/DUFooter.js'

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{backgroundColor: 'white', height:83, borderBottom: '1px solid lightgrey', float:'right'}}>
          <div style={{position: 'absolute', height:82, backgroundColor:'#1890ff', padding: '0 24px 0 18px'}}>
            <h1 style={{fontSize: 30}}>
              >_
            </h1>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ padding: '0 150px 0 150px', lineHeight: '80px', float:'right', marginRight: 130}}
          >
            <Menu.Item key="1">Startsida</Menu.Item>
            <Menu.Item key="2">Om oss</Menu.Item>
            <Menu.Item key="3">Verksamhet</Menu.Item>
          </Menu>
          <div style={{position: 'absolute', height:82, paddingTop: 8, right:0, marginRight: 50}}>
            <Button size='large' type="primary" style={{marginLeft: 20, marginRight: 20}}>Bli medlem</Button>
            <Button size='large' type="ghost">Logga in</Button>
          </div>

        </Header>

        <Content style={{padding: '0 50px', backgroundColor: 'white'}}>
          <Row gutter={32}>
            <Col span={12}>
              <div className='firstPageDivider'>
                <h1 style = {{fontSize: 40, color: 'black', marginBottom: 10, fontWeight: 'bold', lineHeight: '120%'}}>
                  Gillar du att programmera eller vill du lära dig?
                </h1>
                <p style={{fontSize: 20, marginBottom: 50}}>
                  Med vår plattform kan du få hjälp och hjälpa andra att bli experter på programmering. Eller något sånt najs haha
                </p>
                <Row>
                  <div>
                    <Button className="callToActionButton" size='large' type="primary" style={{marginRight: 30}}>Kom igång direkt!</Button>
                    <Button className="callToActionButton" size='large' type="ghost">Läs mer om oss</Button>
                  </div>
                </Row>
              </div>
            </Col>
            <Col span={6} style={{float:'right', marginRight: 100}}>
              <div style={{marginTop:400}}>
                <div className='floatingCode'/>
                <div className='floatingBinary'/>
              </div>
            </Col>
          </Row>
        </Content>
        <DUFooter/>
      </Layout>
    </div>
  );
}

export default App;
