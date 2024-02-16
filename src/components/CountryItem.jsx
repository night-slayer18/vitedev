import PropTypes from 'prop-types';

const CountryItem = (props) => {
    return (
        <div className="country col my-3">
                <h1>{props.country.name}</h1>
                <h2>{props.country.capital}</h2>
                <h3>{props.country.population}</h3>
        </div>
    )
}

CountryItem.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.string.isRequired,
        capital: PropTypes.string.isRequired,
        population: PropTypes.number.isRequired,
    }).isRequired,
};

export default CountryItem
