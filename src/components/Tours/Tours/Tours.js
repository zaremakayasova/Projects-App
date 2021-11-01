import "./Tours.css";
import Tour from "../Tour/Tour";

const Tours = ({ removeTour, tours }) => {
  return (
    <div className='tours'>
      <h2>our tours</h2>
      <hr />
      {tours.map((tour) => (
        <Tour key={tour.id} {...tour} removeTour={removeTour} />
      ))}
    </div>
  );
};
export default Tours;
