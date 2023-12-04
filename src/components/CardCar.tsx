import { CarProps } from '../App';



export function CardCar({ card }: { card: CarProps }) {
    return (
        <div className="card-container" style={{backgroundColor: card.color}}>
            <h2>Nome: {card.name}</h2>
            <h2>Ano: {card.year}</h2>
            <h2>Cor: {card.color}</h2>
        </div>
    )
}