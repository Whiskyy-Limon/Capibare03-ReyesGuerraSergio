import Card from './Card';

type Item = {
  id: number;
  name: string;
  image: string;
  species: string;
};

type Props = {
  items: Item[];
};

const CardList = ({ items }: Props) => (
  <div className="row">
    {items.map((item) => (
      <div key={item.id} className="col-md-4 mb-4">
        <Card image={item.image} name={item.name} species={item.species} />
      </div>
    ))}
  </div>
);

export default CardList;
