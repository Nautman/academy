import React from 'react';
import { Layout, Menu, Col, Row, Button, Icon } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{backgroundColor: 'white'}}>
          <div style={{position: 'absolute'}}>
            <h1 style={{ color: '#1890ff', fontSize: 36, marginLeft: 20}}>
              >_
            </h1>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ paddingLeft: 150, lineHeight: '70px'}}
          >
            <Menu.Item key="1">Startsida</Menu.Item>
            <Menu.Item key="2">Om oss</Menu.Item>
            <Menu.Item key="3">Verksamhet</Menu.Item>
          </Menu>
        </Header>

        <Content style={{padding: '0 50px', backgroundColor: 'white'}}>
          <Row gutter={8}>
            <Col span={16}>
              <div className='firstPageDivider'>
                <h1 style = {{fontSize: 60, color: '#1890ff', marginBottom: 10}}>
                  Digital Ungdom
                </h1>
                <p style={{fontSize: 26}}>
                  Gillar du att programmera eller vill du lära dig?
                </p>
                <Row>
                  <div >
                    <Button size='large' type="primary" style={{marginLeft: 20,marginRight: 30}}>Tryck här!</Button>
                    <Button size='large' type="ghost">Logga in</Button>
                  </div>
                </Row>
              </div>
            </Col>
            <Col span={6}>
              <div style={{marginTop:350}}>
                <div className='floatingCode'/>
                <div className='floatingBinary'/>
              </div>
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.95)', color: 'white', paddingTop: 50 }}>
          
          <Row type="flex" justify="space-around" gutter={16} style ={{marginBottom: 30}}>
            <Col span={6}>
              <div className="footerContainer">
                <h4>
                  Om oss
                </h4>
                <p>
                  Digital Ungdom är ett ideellt ungdomsförbund med syfte att i Sverige utveckla och underhålla ungdomars intresse för och kunskaper om digital teknik och datavetenskap samt hur detta kan användas.
                </p>
              </div>
            </Col>

            <Col span={5}>
              <div className="footerContainer">
                <h4>
                  Kontakt
                </h4>
                <p>
                  E-post: <a>styrelse@digitalungdom.se</a>
                </p>
                <p>
                  Telefonnummer: +46709447003
                </p>
              </div>
            </Col>

            <Col span={5}>
              <div className="footerContainer">
                <h4>
                  Community
                </h4>
                <p>
                  Discord-server: <a>https://discord.gg/J4JhCWH</a>
                </p>
                <p>
                 <Icon type="facebook" /> <a>Facebook</a> 
                </p>
                <p>
                  <Icon type="instagram" /> <a>Instagram</a> 
                </p>                
              </div>
            </Col>

          </Row>
          <Row style={{borderTop: '1px solid grey', paddingTop: 20}}>
            <p>
             Bigital Bungdom ©2019
            </p>
          </Row>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
