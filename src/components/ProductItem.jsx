import PropTypes from 'prop-types';

const ProductItem = (props) => {
    return (
        <div className='product'>
            <h1>{props.product}</h1>
            <h2>{props.product}</h2>
        </div>
    )
}

ProductItem.propTypes = {
    product: PropTypes.string.isRequired,
};

export default ProductItem
