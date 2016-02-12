var data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
var TableRow = React.createClass({
  render: function() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
});
var ProductTable = React.createClass({
  render: function() {
    var rows = this.props.data.map(function(dataObj) {
      return (
        <TableRow name={dataObj.name} price={dataObj.price}></TableRow>
      )
    });
    return (
      <table>
        {rows}
      </table>
    );
  }
});
var SearchBar = React.createClass({
  render: function() {
    return (
      <div>SearchBar</div>
    );
  }
});
var ProductComponent = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable data={this.props.data}/>
      </div>
    );
  }
});
ReactDOM.render(
  <ProductComponent data={data}/>,
  document.getElementById('app')
);