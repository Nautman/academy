import React from 'react'
import { Layout, Col, Row, Icon, Menu, Button } from 'antd';

const { Header } = Layout;

function DUHeader(){
  return(
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
  )
}

export default DUHeader