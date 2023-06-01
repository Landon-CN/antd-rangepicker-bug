import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ConfigProvider, Button, DatePicker } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';


const BugDemo = () => {
  const [width, setwidth] = useState('full');

  useEffect(() => {
    setwidth('small')
  }, [])
  


  return (
    <div>
      <Button
        onClick={() => {
            window.location.reload()
        }}
      >
        reload
      </Button>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ width: width === 'full' ? '100%' : '300px', marginLeft: width === 'full' ? 0 : 500 }}>
          <DatePicker.RangePicker style={{ width: '100%' }}></DatePicker.RangePicker>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router basename="/v2">
      <ConfigProvider locale={zhCN}>
     

        <BugDemo></BugDemo>
      </ConfigProvider>
    </Router>
  );
}

export default App;
