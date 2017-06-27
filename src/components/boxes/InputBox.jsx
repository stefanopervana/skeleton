var React = require('react');
var InputItem = require('../items/InputItem.jsx');

var InputBox = React.createClass({
	onClick: function(event){
		console.log(event.target.type);
	},
	render: function(){
		return(
			<div className="row">
				<InputItem/>
				<button id="myId" type="button" onClick={this.onClick}>Agregar</button>
			</div>
			);
		}

});

module.exports = InputBox;