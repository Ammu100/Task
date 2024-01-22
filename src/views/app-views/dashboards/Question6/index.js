import React from "react";
import { Form, Input, Select, Radio, Checkbox, Button, Card } from "antd";

const { Option } = Select;

const FormComponent = () => {
  const [form] = Form.useForm();

  const handleInputChange = (allValues) => {
    
  };

  const handleSubmit = (values) => {
     console.log("Form Data Submitted:", values);

    alert("Form Data Submitted:\n" + JSON.stringify(values, null, 2));
  };

  return (
    <>
      <div className="" style={{ marginBottom: "20px", fontSize: "20px" }}>
        <b>
          12. Create a from multiple input box , 2-3 image upload , 2-3 dropdown
          , 2 radio button , 2 checkbox need to be submit by php.
        </b>
      </div>
      <Card style={{width:"500px"}}>
        <Form
          form={form}
          onFinish={handleSubmit}
          onValuesChange={handleInputChange}
        >
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input type="email" />
          </Form.Item>

          <Form.Item label="Age" name="age">
            <Input type="number" />
          </Form.Item>

          <Form.Item label="Dropdown 1" name="dropdown1">
            <Select>
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Dropdown 2" name="dropdown2">
            <Select>
              <Option value="optionA">Option A</Option>
              <Option value="optionB">Option B</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Radio Button" name="radio">
            <Radio.Group>
              <Radio value="radioOption1">Option 1</Radio>
              <Radio value="radioOption2">Option 2</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Checkbox 1"
            name="checkbox1"
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>

          <Form.Item
            label="Checkbox 2"
            name="checkbox2"
            valuePropName="checked"
          >
            <Checkbox />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default FormComponent;
