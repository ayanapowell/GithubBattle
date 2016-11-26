var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <div className='jumbotron'>
          <div className='container'>
            <Link to='/'>
              <h2>Github Battle</h2>
            </Link>
          </div>
        </div>
        <div className='container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
