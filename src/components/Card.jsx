import Button from './Button';

export default function Card() {
    return (
        <div className="card-container">
            <div className="card-header">
                <div className="card-title__container">
                    <img className="card-title__img" src="" alt=""/>
                    <h3 className="card-title">News</h3>
                </div>
                <div className="card-img">
                    <img className="card-img" src="" alt=""/>
                </div>
            </div>
            <div className="card-content">

            </div>
            <div className="card-footer">
                <Button />
            </div>
        </div>
    )
}