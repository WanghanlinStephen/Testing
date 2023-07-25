var React = require('react');
var createReactClass = require('create-react-class');
var { Grid, Row, Col, Button, Jumbotron } = require('react-bootstrap');

var Dashboard = createReactClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col md={12}>
            <h1>AWS Services</h1>
            <input type="text" placeholder="Search services, features, marketplace products, and AWS documentation" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2>Identity and Access Management Page</h2>
            <h3>IAM Dashboard</h3>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>Security Recommendations</h4>
            <p>Here are some security recommendations...</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h4>AWS Account</h4>
            <h5>Access Management</h5>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <h4>User Groups</h4>
            <Button>Manage User Groups</Button>
          </Col>
          <Col md={3}>
            <h4>Users</h4>
            <Button>Manage Users</Button>
          </Col>
          <Col md={3}>
            <h4>Roles</h4>
            <Button>Manage Roles</Button>
          </Col>
          <Col md={3}>
            <h4>Policies</h4>
            <Button>Manage Policies</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Dashboard;
