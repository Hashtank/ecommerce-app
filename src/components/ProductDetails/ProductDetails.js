import React, { useState, useEffect } from 'react'
import { getProductId } from '../../ApiService/api'
import { Link, useParams } from 'react-router-dom'
import './ProductDetails.css'

function ProductDetails() {

    const { id } = useParams()

    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        const fetchProductDetails = async () => {

            const data = await getProductId(id)
            setProductDetails(data)
        }
        fetchProductDetails()

    }, [id])

   
    const handleBuyNow=()=>{
        window.confirm('The product is out of Stock !!')
    }


    return (
        <div className='product-details-container'>
            <img src={productDetails.image} alt='Image' className='product-image' />

            <div className='product-info'>

                <h2 className='product-title'> {productDetails.title}</h2>

                <p className='product-describtion'>{productDetails.description}</p>

                <p className='product-price'>${productDetails.price}</p>

                <button className='buy-now-button' onClick={handleBuyNow}> Buy Now</button>

                <Link to={'/'}>
                    <button className='go-back-home-button'>Go Back Home </button>
                </Link>


            </div>



        </div>
    )
}

export default ProductDetails