import { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Completa todos los campos');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(form.email)) {
      toast.error('Correo inválido');
      return;
    }

    toast.success('Mensaje enviado correctamente');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Correo</label>
          <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="message">Mensaje</label>
          <textarea className="form-control" id="message" name="message" value={form.message} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </>
  );
};

export default Contact;
