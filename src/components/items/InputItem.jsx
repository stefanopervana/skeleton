var React = require('react');

var InputItem = React.createClass({
	render: function(){
		return(
			<label>
    Name:
    <input type="text" name="name" />
  </label>
			);
		}
});

module.exports = InputItem;