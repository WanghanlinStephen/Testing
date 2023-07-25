import React from 'react';
import createReactClass from 'create-react-class';
import { Grid, Row, Col, Badge, Button, Glyphicon, Label } from 'react-bootstrap';

var Dashboard = createReactClass({
  render: function() {
    return (
      <div className="dashboard">
        <Grid>
          <Row className="awsui-util-action-stripe-large">
            <Col xs={12}>
              <h1 className="awsui-util-d-ib">IAM dashboard</h1>
            </Col>
          </Row>
          <Row>
            <Col xs={9}>
              <div className="panel">
                <div className="panel-heading">
                  <h2>Security recommendations <Badge>1</Badge></h2>
                  <Button bsSize="small"><Glyphicon glyph="refresh" /></Button>
                </div>
                <div className="panel-body">
                  <h4>Add MFA for root user</h4>
                  <small>Add MFA for root user - Enable multi-factor authentication (MFA) for the root user to improve security for this account.</small>
                  <Button bsSize="small">Add MFA</Button>
                </div>
                <div className="panel-body">
                  <h4>Root user has no active access keys</h4>
                  <small>Using access keys attached to an IAM user instead of the root user improves security.</small>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="panel">
                <div className="panel-heading">
                  <h2>IAM resources</h2>
                  <Button bsSize="small"><Glyphicon glyph="refresh" /></Button>
                </div>
                <div className="panel-body">
                  <Label>User groups: </Label> <a href="#/groups">0</a>
                  <Label>Users: </Label> <a href="#/users">0</a>
                  <Label>Roles: </Label> <a href="#/roles">0</a>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

export default Dashboard;
