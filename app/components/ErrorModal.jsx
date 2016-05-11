var React = require('react');

var ErrorModal = React.createClass({
  componentDidMount: function(){  // componentDidMount will be trigger once the component has been rendered
    // create a new instance of foundation.reveal
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function(){
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>Error Detected</h4>
        <p>Could not find city!</p>
        <div>
          <button className="button hollow" data-close="">Okay</button> {/* data-close lets us close the modal upon click */}
        </div>
      </div>
    );
  }
});

module.exports = ErrorModal;