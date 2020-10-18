import React from "react";
import { Form, Input, InputNumber, Button } from "antd";
import { useHistory } from 'react-router-dom';

//Redux
import { createProductAction, updateProductAction } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 0 },
};


const FormProduct = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  const product = useSelector( state => state.products.product);
  const option = useSelector( state => state.products.option);
  
  const onFinish = (values) => {
    
    if (option) {
      dispatch( createProductAction(values) );
    }else{
      values._id = product._id;
      dispatch( updateProductAction(values) );
    }
    
    history.push('/products');
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      initialValues={product}
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        label="Name"
        className="size"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[{ type: "number", min: 1,  required: true }]}
      >    
          <InputNumber />
 
      </Form.Item>
      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[{ type: "number", min: 1, required: true }]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item name="description" label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol }}>
        <Button type="primary" htmlType="submit" className="aling-button">
          { option ? 'Submit' : 'Update' }  
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormProduct;
