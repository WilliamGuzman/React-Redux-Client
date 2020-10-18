import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import "./Login.css";

//Redux
import { authUserAcction } from "../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = (props) => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.auth.authenticated);
  const error = useSelector((state) => state.auth.error);
  const msg = useSelector((state) => state.auth.msg);

  useEffect(() => {
    if (authenticated) {
        props.history.push('/products')
    }
  }, [error,authenticated,props.history]);

  const onFinish = (values) => {
    dispatch(authUserAcction(values));
  };
  return (
    <div className="hero">
      {error ? (
        <Alert
          message="Error to Log In"
          description={msg}
          type="error"
          showIcon
          className="msg-alert"
        />
      ) : null}

      <div className="contenedor">
        <div className="user-icon">
          <i className="fas fa-user-lock"></i>
        </div>
        <h1 className="login-title">log in </h1>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Email is required!" }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log In
            </Button>
            <br />
            O
            <br />
            <Link to="/new-account">Register</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
