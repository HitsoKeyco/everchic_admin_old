import { useSelector } from "react-redux"

const CardProduct = ({ product }) => {
    
    return (
        <>
            <div className="card_product_container">
                <p>{product.title}</p>
            </div>
        </>
    )
}
export default CardProduct



