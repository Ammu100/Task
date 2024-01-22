import { Card, Col, Row } from "antd";
import React from "react";

const Dashboard = () => {
  const dashboardData = {
    hr: 2,
    admin: 2,
    totalEmp: 27,
    leave: 40,
    caLeave: 7,
    paLeave: 22,
    sickLeave: 11,
    department: 8,
    designation: 12,
    address: "Noida 144, Absax technologies",
  };

  return (
    <>
      <div className="" style={{ marginBottom: "20px", fontSize: "20px" }}>
        <b>10. Create a dashboard View & API static.</b>
      </div>
      <Row gutter={16}>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>HR: {dashboardData.hr}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Admin: {dashboardData.admin}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Total Employees: {dashboardData.totalEmp}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Leave: {dashboardData.leave}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>CA Leave: {dashboardData.caLeave}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>PA Leave: {dashboardData.paLeave}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Sick Leave: {dashboardData.sickLeave}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Departments: {dashboardData.department}</b>
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="text-center">
            <b>Designations: {dashboardData.designation}</b>
          </Card>
        </Col>
        <Col xs={24} sm={24}>
          <Card className="text-center">
            <b>Address: {dashboardData.address}</b>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
