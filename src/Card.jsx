import './Card.css'

function Card(props){
    return (
        <div class="card">
        <img src="https://via.placeholder.com/300x200" alt="Card Image" class="card-img" />
        <div class="card-content">
            <h2 class="card-title">{props.title}</h2>
            <p class="card-description">This is a simple card with some text and an image. It can be used for displaying content beautifully.</p>
            <a href="#" class="card-button">Read More</a>
        </div>
    </div>
    )
}

export default Card