import { useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';
import { Link } from 'react-router-dom';

const Home = () => {
  const { items, fetchItems } = useItemStore();

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <>
      <section className="text-center">
        <h1>Bienvenido a la SPA Rick & Morty</h1>
        <p>Explora personajes de la serie</p>
      </section>
      <CardList items={items.slice(0, 6)} />
      <div className="text-center mt-3">
        <Link to="/list" className="btn btn-primary">Ver más</Link>
      </div>
    </>
  );
};

export default Home;
