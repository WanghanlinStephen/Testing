import React from 'react';
import createReactClass from 'create-react-class';
import SearchIcon from '../assets/search.png';
import { Grid, Row, Col, Button } from 'react-bootstrap';

const Dashboard = createReactClass({
    render: function () {
        return (
            <Grid>
                <Row style={{ marginBottom: '20px' }}>
                    <Col md={12}>
                        <h2>Provisioning Service Dashboard</h2>
                    </Col>
                </Row>
                <Row style={{ marginBottom: '50px' }}>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>Security Recommendations</h3>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={SearchIcon} width={20} style={{ marginRight: '10px' }} />
                                    <div>
                                        <h4>All security checking passed</h4>
                                        <p>Look forward to other security suggestions....</p>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginRight: '10%' }}>
                                <Button>
                                    <img src={SearchIcon} width={20} />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row md={5}></Row>
                <Row>
                    <Col md={12}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3>Provisioning Service Resources</h3>
                            </div>
                            <div style={{ marginRight: '10%' }}>
                                <Button>
                                    <img src={SearchIcon} width={20} />
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
                <hr style={{ borderWidth: '2px', color: '#000000', marginTop: '10px', marginBottom: '10px' }} />
                <Row style={{ marginBottom: '20px' }}>
                    <Col md={3} style={{ borderRight: "2px solid #5D6D7E" }}>
                        <h4>User Groups</h4>
                        <p style={{ fontSize: '50px', color: '#2E86C1' }}>14</p>
                    </Col>
                    <Col md={3} style={{ borderRight: "2px solid #5D6D7E" }}>
                        <h4>Users</h4>
                        <p style={{ fontSize: '50px', color: '#2E86C1' }}>82</p>
                    </Col>
                    <Col md={3} style={{ borderRight: "2px solid #5D6D7E" }}>
                        <h4>Roles</h4>
                        <p style={{ fontSize: '50px', color: '#2E86C1' }}>250</p>
                    </Col>
                    <Col md={3}>
                        <h4>Policies</h4>
                        <p style={{ fontSize: '50px', color: '#2E86C1' }}>107</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div>
                            <h3>What's new</h3>
                            <h5>Updates for features in IAM </h5>
                        </div>
                    </Col>
                </Row>
                <hr style={{ borderWidth: '2px', color: '#000000', marginTop: '5px', marginBottom: '5px' }} />
                <ul>
                    <li><a href="https://www.example1.com" style={{ fontSize: '20px' }}>Example Link 1</a></li>
                    <li><a href="https://www.example2.com" style={{ fontSize: '20px' }}>Example Link 2</a></li>
                    <li><a href="https://www.example3.com" style={{ fontSize: '20px' }}>Example Link 3</a></li>
                </ul>
            </Grid>
        );
    }
});

export default Dashboard;
