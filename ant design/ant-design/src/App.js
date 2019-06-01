import React from 'react';
import { Layout, Menu, Col, Row, Button } from 'antd';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header style={{backgroundColor: 'white'}}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Startsida</Menu.Item>
            <Menu.Item key="2">Om oss</Menu.Item>
            <Menu.Item key="3">Verksamhet</Menu.Item>
          </Menu>
        </Header>

        <Content style={{ padding: '0 50px'}}>
          <Row gutter={8}>
            <Col span={12}>
              <div className='firstPageDivider'>
                <h1 style = {{fontSize: 60, color: '#1890ff', marginBottom: 10}}>
                  Digital Ungdom
                </h1>
                <p style={{fontSize: 26}}>
                  Gillar du att programmera eller vill du lära dig?
                </p>
                <Row>
                  <Button size='large' type="primary" style={{marginRight: 20}}>Tryck här!</Button>
                  <Button size='large' type="ghost">Logga in</Button>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              <div className='firstPageDivider'>
              </div>
            </Col>
          </Row>
        </Content>

        <Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.95)', color: 'white', paddingTop: 50 }}>
          
          <Row type="flex" justify="center" gutter={32} style ={{marginBottom: 30}}>
            <Col span={8}>
              <h4>
                Om oss
              </h4>
              <p>
                Digital Ungdom är ett ideellt ungdomsförbund med syfte att i Sverige utveckla och underhålla ungdomars intresse för och kunskaper om digital teknik och datavetenskap samt hur detta kan användas.
              </p>
            </Col>

            <Col span={8}>
              <h4>
                Kontakt
              </h4>
              <p>
                E-post: styrelse@digitalungdom.se
              </p>
              <p>
                Telefonnummer: +46709447003
              </p>
            </Col>

            <Col span={8}>
              <h4>
                Community
              </h4>
              <p>
                Discord-server: https://discord.gg/J4JhCWH
              </p>
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
