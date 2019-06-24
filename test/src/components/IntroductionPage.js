import React from 'react';
import { Layout, Button} from 'antd';
import '../css/App.css';  

const { Content } = Layout;

function IntroductionPage(){
  return(
    <Content style={{backgroundColor: 'white'}}>
      <div>
        <h1>
          Vad intresserar dig?
        </h1>
      </div>
    </Content>

  )
}

export default IntroductionPage