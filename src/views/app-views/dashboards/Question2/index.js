import { Card, Form, Select } from "antd";
import React, { useState } from "react";

const { Option } = Select;

const Dropdown = ({ label, options, value, onChange, disabled }) => (
  <div>
    <label>{label}:</label>
    <Select value={value} onChange={onChange} disabled={disabled}>
      <Option value="" disabled>
        Select {label}
      </Option>
      {options.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  </div>
);

const CountryStateCityDropdowns = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (value) => {
    console.log("Country changed:", value);
    setSelectedCountry(value);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (value) => {
    console.log("State changed:", value);
    setSelectedState(value);
    setSelectedCity("");
  };

  const handleCityChange = (value) => {
    console.log("City changed:", value);
    setSelectedCity(value);
  };

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
    alert(
      `Country: ${selectedCountry}\nState: ${selectedState}\nCity: ${selectedCity}`
    );
  };

  return (
    <>
      {/* <div className="" style={{ marginBottom: "20px", fontSize: "20px" }}>
        <b>3. Country State City dropdown create separate.</b>
      </div> */}
      <Card style={{ width: "600px" }}>
        <Form onFinish={handleSubmit} style={{ width: "500px" }}>
          <Form.Item>
            <Dropdown
              label="Country"
              options={["India", "Canada"]}
              value={selectedCountry}
              onChange={handleCountryChange}
            />
          </Form.Item>

          <Form.Item>
            <Dropdown
              label="State"
              options={[
                "Mumbai",
                "Delhi",
                "Uttar Pradesh",
                "Ontario",
                "Quebec",
                "British Columbia",
              ]}
              value={selectedState}
              onChange={handleStateChange}
            />
          </Form.Item>

          <Form.Item>
            <Dropdown
              label="City"
              options={[
                "Bandra",
                "New Delhi",
                "Noida",
                "Toronto",
                "Montreal",
                "Victoria",
              ]}
              value={selectedCity}
              onChange={handleCityChange}
            />
          </Form.Item>

          <Form.Item>
            <button type="submit">Submit</button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default CountryStateCityDropdowns;
