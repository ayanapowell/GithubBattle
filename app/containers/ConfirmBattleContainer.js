var React = require('react');
var PropTypes = React.PropTypes;
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function () {
    return {
      isLoading: false,
      playerInfo: []
    }
  },
  componentDidMount: function() {
    var query = this.props.location.query;
    // fetch github info
  },
  render: function() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playerInfo}/>
    );
  }

});

module.exports = ConfirmBattleContainer;
