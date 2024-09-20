const Card = ({ shipper }) => {
  return (
    <div className="card">
      <div>
        <h2 className="name">{shipper.name}</h2>
      </div>
      <div>
        <span>Web: </span>
        <span>
          <a href={shipper.site} target="_blank">
            {shipper.site}
          </a>
        </span>
      </div>
      <div>
        <span>Telefoni: </span>
        {shipper.phone.map((ph, index) => (
          <span key={index}>{ph} </span>
        ))}
      </div>
      <div>
        <span>Adresa: </span>
        <span>{shipper.address}</span>
      </div>
      <div>
        <span>Email: </span>
        <span>{shipper.email}</span>
      </div>
      <div>
        <span>Cenovnik važi od: </span>
        <span>{shipper.validFrom}</span>
      </div>
      <div>
        <span>Radno vreme: </span>
        <span>{shipper.workingHours}</span>
      </div>
    </div>
  );
};

export default Card;
