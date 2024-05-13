import Button from './Button';
import Records from '../records';

import './Card.css'

export default function Card() {
    const card = Records.info.map(item =>
        <>
            <div key={item.id} className="card-container">
                <div className="card-header">
                    <div className="card-title__container">
                        <img className="card-title__img" src={item.icon} alt=""/>
                        <h2 className="card-title">{item.category}</h2>
                    </div>
                </div>
                <div className="card-content">
                    <img className="card-img" src={item.img} alt=""/>
                    <h3>{item.title}</h3>
                    <span>{item.date}</span>
                    <p>{item.desc}</p>
                    <Button/>
                </div>
                <div className="border-card"></div>
            </div>
        </>
    )
    return (
        <div className="container-section">{card}</div>
    )
}