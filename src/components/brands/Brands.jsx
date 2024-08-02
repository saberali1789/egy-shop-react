/* eslint-disable no-undef */
import './brands.css'
import { brands } from './../../data/brands';

const Brands = () => {
  return (
    <div className="brands-wrapper">
        {brands.map( (brand) => 
            <div className="brand" key={brand.id}>
                <img src={brand.image} alt='brand' className="brand-image" />
            </div>
        )}
      
    </div>
  )
}

export default Brands
