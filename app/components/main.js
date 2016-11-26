var React = require('react');

var Main = React.createClass({
  render: function () {
    return (
      <div className='main-container'>
        <div className='jumbotron'>
          <div className='container'>
            <h2>Github Battle</h2>
          </div>
        </div>
        <div className='well container'>
          {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;