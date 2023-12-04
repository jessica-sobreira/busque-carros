import { useState } from 'react';
import { CardCar } from './components/CardCar';
import './App.css';

export interface CarProps {
  id: number;
  name: string;
  color: string;
  year: string;
}

function App() {
  const [car, setCar] = useState<CarProps[]>([]);
  const [name, setName] = useState('');
  const [color, setColor] = useState('');
  const [year, setYear] = useState('');
  const [edit, setEdit] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const addCar = () => {
    if(edit) {
      setCar(car.map((c) => c.id === editId ? { id: editId, name, color, year } : c));
      setEdit(false);
      setEditId(null);
    } else {
      setCar([...car, { id: Date.now(), name, color, year }]);
    }
    setName('');
    setColor('');
    setYear('');
  }

  const removeCar = (id: number) => {
    setCar(car.filter((c) => c.id !== id));
  };

  const editCar = (id: number) => {
    setEdit(true);
    setEditId(id);
    const carEdit = car.find((c) => c.id === id);
    if(carEdit) {
      setName(carEdit.name);
      setColor(carEdit.color);
      setYear(carEdit.year);
    }
  };

  const scrollToForm = () => {
    const formSection = document.querySelector('.form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  

  return (
    <>
    <header>
      <h1>Busque Carros</h1>
    
    </header>


    <img src="https://w.forfun.com/fetch/e8/e801a5e9cbb0181c932a7bd2feaf2168.jpeg" alt="carro" className='banner' />

        <section className='form'>

        <h2 className='title'>Qual é o seu carro favorito?</h2>
        <label htmlFor='name'>Nome do Carro</label>
        <input
          id="name"
          type="text"
          placeholder="Digite o nome do carro"
          value={name}
          onChange={(e) => setName(e.target.value)}
        /><br></br>
        
        <label htmlFor="year">Ano</label>
        <input
          id="year"
          type="text"
          placeholder="Digite o ano do carro"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br></br>

        <label htmlFor="color">Cor</label>
        <input
          id="color"
          type="color"
          placeholder="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        /> <br></br>

        <button onClick={() => { addCar(); scrollToForm(); }}>{edit ? 'Atualizar' : 'Adicionar'}</button><br></br>
      </section>

      <ul className="car-list">
          {car.map((c) => (
            <li className="car-item" key={c.id}>
              <CardCar card={c} />
              <button className="edit-button" onClick={() => editCar(c.id)}>Editar</button>
              <button className="remove-button" onClick={() => removeCar(c.id)}>Remover</button>
            </li>
          ))}
        </ul>

        <footer>Jéssica Sobreira 2023</footer>

    </>
  );
}

export default App;
