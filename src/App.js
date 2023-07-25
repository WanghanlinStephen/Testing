var React = require('react');
var createReactClass = require('create-react-class');
var Button = require('react-bootstrap').Button;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;

var Dashboard = createReactClass({
    render: function() {
        return (
            <div>
                <h1>Dashboard Name</h1>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Security Recommendation
                            <Button bsStyle="default" className="pull-right">Refresh</Button>
                        </h3>
                    </div>
                    <div className="panel-body">
                        Important metrics go here...
                    </div>
                </div>
                <hr/>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            IAM Resources
                            <Button bsStyle="default" className="pull-right">Refresh</Button>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <ListGroup>
                            <ListGroupItem>User Groups: 10</ListGroupItem>
                            <ListGroupItem>Users: 20</ListGroupItem>
                            <ListGroupItem>Roles: 30</ListGroupItem>
                            <ListGroupItem>Policies: 40</ListGroupItem>
                        </ListGroup>
                    </div>
                </div>
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
