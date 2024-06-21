

function ImageCard({link}:{link:string}, {name}:{name:string}, {description}:{description:string}) {
    return (
        <div>
            <img src={link}></img>
            <input id="name">{name}</input>
            <input id="desc">{description}</input>
            <button id="edit"></button>
            <button id="delete"></button>
        </div>
    );
}

export default ImageCard;