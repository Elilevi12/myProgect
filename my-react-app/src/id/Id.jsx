function Id(propsi) {
    console.log(propsi);
  return (
    <div>
      <h1>
        name: {`${propsi.firstName} ${propsi.lastName}`}
      </h1>
      <h2>ID number: {propsi.idNumber}</h2>
      <h2>Country of Origin:{propsi.countryOfOrigin} </h2>
    </div>
  );
}
Id.defaultPropsi = {
    countryOfOrigin: 'Israel',
    
  };
export default Id;
