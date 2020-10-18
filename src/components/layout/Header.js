import React from "react";
import { Layout, Menu } from "antd";
import { Link, useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

//Redux
import { logOutAcction } from '../../redux/actions/authAction';
import { changeOptionAction } from '../../redux/actions/productAction';
import { useDispatch } from 'react-redux';

const { Header } = Layout;

const HeaderApp = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = () => {
    Swal.fire({
      title: 'Are you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch( logOutAcction() )
        history.push('/')
      }
    })
  }

  const changeOption = () =>{
    dispatch( changeOptionAction() );
  }

  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" onClick={changeOption}>
         <Link to="/products">Products</Link>
        </Menu.Item>
        <Menu.Item  onClick={handleClick} >Log Out</Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderApp;
