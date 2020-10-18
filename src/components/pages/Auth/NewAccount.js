import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

//Actions Redux
import { accountAction } from "../../../redux/actions/accountAcction";

const NewAccount = (props) => {
  const dispatch = useDispatch();

  const AccountData = (values) => dispatch(accountAction(values));

  const authenticated = useSelector((state) => state.auth.authenticated);
  const error = useSelector((state) => state.auth.error);
  const msg = useSelector((state) => state.auth.msg);

  useEffect(() => {
    if (authenticated) {
      props.history.push("/products");
    }
  }, [authenticated, props.history]);

  const onFinish = (values) => {
    AccountData(values);
  };
  return (
    <div className="hero">
      {error ? (
        <Alert
          message="Error to Create Account"
          description={msg}
          type="error"
          showIcon
          className="msg-alert"
        />
      ) : null}
      <div className="contenedor">
        <div className="user-icon">
          <i className="fas fa-user-plus"></i>
        </div>
        <h1 className="login-title">registrarse </h1>

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
              Create Account
            </Button>
            <br />
            O
            <br />
            <Link to="/">Back to Login!</Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewAccount;
