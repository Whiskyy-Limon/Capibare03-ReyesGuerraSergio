import { useEffect, useState } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';

const ItemList = () => {
  const { items, fetchItems } = useItemStore();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2>Listado Completo</h2>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Buscar por nombre..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {items.length === 0 ? <p>Cargando...</p> : <CardList items={filtered} />}
    </>
  );
};

export default ItemList;
