import React from 'react'
import { Layout, Col, Row, Icon } from 'antd';

const { Footer } = Layout;

function DUFooter(){

    return(
      <div>
        <Footer style={{ textAlign: 'center', backgroundColor: 'rgba(0,0,0,0.95)', color: 'white', paddingTop: 50 }}>
          <Row type="flex" justify="space-around" gutter={16} style ={{marginBottom: 30, textAlign: 'left'}}>
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
      </div>
    )
}

export default DUFooter

