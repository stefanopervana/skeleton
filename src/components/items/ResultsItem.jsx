var React = require('react');

var ResultsItem = React.createClass({
	render: function(){
		return(
						<label>
    Name:
    <input type="text" name="name" />
  </label>
			);
		}
});

module.exports = ResultsItem;