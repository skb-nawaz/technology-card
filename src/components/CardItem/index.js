// Write your code here.
import './index.css'

const CardItem = props => {
  const {eachitem} = props
  const {title, description, imgUrl, className} = eachitem
  return (
    <li className={className}>
      <h1 className="heading1">{title}</h1>
      <p>{description}</p>
      <img className="imgBox" src={imgUrl} alt={title} />
    </li>
  )
}
export default CardItem
