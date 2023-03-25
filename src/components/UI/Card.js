import './Card.css'
function Card(props){
    const all = 'Card ' + props.className;
    return <div className={all}>{props.children}</div>
}
export default Card;