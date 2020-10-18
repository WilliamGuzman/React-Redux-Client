import React, { useEffect } from "react";
import { Button, Table, Space, Layout } from "antd";
import Header from "../../layout//Header";
import Footer from "../../layout/Footer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

//Import Redux
import { useDispatch, useSelector } from "react-redux";
//Actions Redux
import {
  getProductAcction,
  selectProductAcction,
  deleteProductAction,
} from "../../../redux/actions/productAction";

const { Content } = Layout;

const Products = ({ history }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    //Consultar la API
    dispatch(getProductAcction());

    // eslint-disable-next-line
  }, []);

  //Acceder al state del store
  const products = useSelector((state) => state.products.products);
  const loading = useSelector((state) => state.products.loading);

  const handleClickUpdate = (product) => {
    dispatch(selectProductAcction(product));
    history.push(`/update-product/${product._id}`);
  };

  const handleClickDelete = (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(productId));
      }
    });
  };

  //Table property
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            size="small"
            onClick={() => handleClickUpdate(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            size="small"
            onClick={() => handleClickDelete(record._id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const paginationTable = {
    current: 1,
    pageSize: 5,
  };

  //Pagination data
  const handlePagination = pagination =>{
    paginationTable.current = pagination.current;
  }

  return (
    <Layout className="layout">
      <Header />
      <Content style={{ padding: "0 50px", margin: "16px 0" }}>
        <div className="site-layout-content center">
          <Button type="primary" size="middle" className="right">
            <Link to="/create-product">Create new Product</Link>
          </Button>
          <Table
            rowKey="_id"
            columns={columns}
            pagination={paginationTable}
            dataSource={products}
            loading={loading}
            onChange={handlePagination}
          />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default Products;
