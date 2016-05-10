var React = require('react');
var {Link} = require('react-router');

/*var Example = React.createClass({
  render: function(){
    return (
      <h3>Example usage</h3>
    );
  }
});*/

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center">Example usage</h1>
      <p>Here are a few example locations to try out!</p>
      <ol>
        <li>
          <Link to='/?location=Irvine'>Irvine, CA</Link>
        </li>
        <li>
          <Link to='/?location=Miami'>Miami, FL</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Example;