import React from "react";
import { Layout } from "antd";
import Header from "../../layout//Header";
import Footer from "../../layout/Footer";
import FormProduct from '../../layout/Form';

const { Content } = Layout;

const UpdateProduct = () => {
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header />
      <Content style={{ padding: "0 50px", margin: "16px 0" }}>
        <div className="site-layout-content aling">
          <FormProduct />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default UpdateProduct;
