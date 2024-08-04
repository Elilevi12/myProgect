function Id(props) {
  // console.log(props);
  return (
    <div>
      <h1>name: {`${props.firstName} ${props.lastName}`}</h1>
      <h2>ID number: {props.idNumber}</h2>
      <h2>Country of Origin:{props.countryOfOrigin} </h2>
    </div>
  );
}
Id.defaultProps = {
  countryOfOrigin: "Israel",
};
export default Id;
