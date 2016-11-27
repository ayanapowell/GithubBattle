var React = require('react');
var PropTypes = React.PropTypes;
var Results = require('../components/Results');

var ResultsContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      scores: []
    }
  },
  componentDidMount: function () {
    console.log(this.props.location.state.playersInfo);
  },
  render: function() {
    return (
      <Results
        isLoading={this.state.isLoading}
        scores={this.state.scores} />
    );
  }

});

module.exports = ResultsContainer;
