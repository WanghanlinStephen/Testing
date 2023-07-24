var React = require('react');
var createReactClass = require('create-react-class');
var Button = require('react-bootstrap').Button;
var Panel = require('react-bootstrap').Panel;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Dashboard = createReactClass({
    render: function() {
        return (
            <div>
                <h1>Dashboard Name</h1>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            Security Recommendation
                            <Button bsStyle="default" className="pull-right">Refresh</Button>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        Important metrics go here...
                    </Panel.Body>
                </Panel>
                <hr/>
                <Panel>
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">
                            IAM Resources
                            <Button bsStyle="default" className="pull-right">Refresh</Button>
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <ListGroup>
                            <ListGroupItem>User Groups: 10</ListGroupItem>
                            <ListGroupItem>Users: 20</ListGroupItem>
                            <ListGroupItem>Roles: 30</ListGroupItem>
                            <ListGroupItem>Policies: 40</ListGroupItem>
                        </ListGroup>
                    </Panel.Body>
                </Panel>
                <hr/>
                <h2>What's News</h2>
                <ListGroup>
                    <ListGroupItem href="#link1">Link 1</ListGroupItem>
                    <ListGroupItem href="#link2">Link 2</ListGroupItem>
                    <ListGroupItem href="#link3">Link 3</ListGroupItem>
                </ListGroup>
            </div>
        );
    }
});

module.exports = Dashboard;
