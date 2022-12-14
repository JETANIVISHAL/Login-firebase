import React from 'react';
import {   Form, Input } from 'antd';
import Button1 from './Button1';

const Form1 = ({title, setEmail, setPassword, handleAction }) => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <div>
      <h3>
        {title}
      </h3>
    </div>
    <Form
      name="basic"
      labelCol={{
        span: 6,
      }}
      wrapperCol={{
        span: 12,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label=" username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
        
      >
        <Input onChange={(e) => setEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password onChange={(e) => setPassword(e.target.value)}/>
      </Form.Item>

      

      {/* <Form.Item
        wrapperCol={{
          offset: 6,
          span: 12,
        }}
      >
          <Link   to="/register" > 
        <Button type="primary" htmlType="submit">
          login
        </Button>
         </Link>
        <Link   to="/register"   > 
        <Button type="primary">ragistration</Button>
       </Link> 
      </Form.Item> */}
    </Form>
    <Button1 title={title} handleAction={handleAction}/>
    
    </>
  );
};
export default Form1;