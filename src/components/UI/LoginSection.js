import { GithubOutlined, GoogleOutlined, LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Divider, Form, Input, Layout, Row } from 'antd';
import { signIn, useSession } from "next-auth/react";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const { Content } = Layout;

const LoginSection = () => {

  const { data: session } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (session) {
      router.back()
    }
  }, [session, router]);
  const onFinish = (values) => {
      toast.warn("Not Implemented yet!");
  };

  return (
    <div className='min-h-[80vh] grid '>
      <Content className="h-full flex items-center justify-center ">
        <Row justify="center" className="w-full h-full flex items-center">
          <Col xs={22} sm={20} md={16} lg={12} xl={8} className=''>
            <Card className="shadow">
              <h1 className="text-center text-3xl font-bold mb-4">Login</h1>
              <Form
                name="loginForm"
                onFinish={onFinish}
                initialValues={{
                  remember: true,
                }}
              >
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your email!',
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" block>
                    Login
                  </Button>
                </Form.Item>
              </Form>
              <Divider className="my-4">Or</Divider>
              <div className="flex items-center justify-center space-x-2">
                <Button onClick={() => {
                  signIn("google", {
                    callbackUrl: '/'
                  });
                }} className='flex items-center justify-center' icon={<GoogleOutlined />} block>
                  Google Login
                </Button>
                <Button onClick={() => {
                  signIn("github", {
                    callbackUrl: '/'
                  });
                }} className='flex items-center justify-center' icon={<GithubOutlined />} block>
                  GitHub Login
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </div>
  );
};

export default LoginSection;
