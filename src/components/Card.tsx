type Props = {
  image: string;
  name: string;
  species: string;
};

const Card = ({ image, name, species }: Props) => (
  <div className="card h-100">
    <img src={image} className="card-img-top" alt={name} />
    <div className="card-body">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{species}</p>
    </div>
  </div>
);

export default Card;
