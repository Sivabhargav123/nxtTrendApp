// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {productDetails} = props
  const {title, brand, imageUrl, rating, price} = productDetails

  return (
    <li className="similar">
      <img
        src={imageUrl}
        className="similar-product"
        alt={`similar product ${title}`}
      />
      <p className="para">{title}</p>
      <p className="para">by {brand}</p>
      <div className="s">
        <p className="ss">Rs {price}</p>
        <div className="sss">
          <p className="para">{rating}</p>
          <img
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </div>
      </div>
    </li>
  )
}

export default SimilarProductItem
