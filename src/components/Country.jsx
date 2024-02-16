import { useState } from 'react';
import CountryItem from "./CountryItem"

const Country = () => {
    const [country, setCountry] = useState([
        {
            name: "India",
            capital: "Delhi",
            population: "1.3 Billion"
        },
        {
            name: "USA",
            capital: "Washington",
            population: "331 Million"
        },
        {
            name: "UK",
            capital: "London",
            population: "67 Million"
        },
        {
            name: "Australia",
            capital: "Canberra",
            population: "25 Million"
        },
        {
            name: "China",
            capital: "Beijing",
            population: "1.4 Billion"
        },
        {
            name: "Japan",
            capital: "Tokyo",
            population: "126 Million"
        },
        {
            name: "France",
            capital: "Paris",
            population: "67 Million"
        },
        {
            name: "Germany",
            capital: "Berlin",
            population: "83 Million"
        },
        {
            name: "Brazil",
            capital: "Brasília",
            population: "213 Million"
        },
        {
            name: "Canada",
            capital: "Ottawa",
            population: "38 Million"
        }
    ]);
    const [loading, setLoading] = useState(false);
    const changeCountry = () => {
        setInterval(() => {
            setCountry([
                {
                    name: "UK",
                    capital: "London",
                    population: "67 Million"
                },
                {
                    name: "Australia",
                    capital: "Canberra",
                    population: "25 Million"
                },
                {
                    name: "China",
                    capital: "Beijing",
                    population: "1.4 Billion"
                },
                {
                    name: "Japan",
                    capital: "Tokyo",
                    population: "126 Million"
                },
                {
                    name: "France",
                    capital: "Paris",
                    population: "67 Million"
                },
                {
                    name: "Germany",
                    capital: "Berlin",
                    population: "83 Million"
                },
                {
                    name: "Brazil",
                    capital: "Brasília",
                    population: "213 Million"
                },
                {
                    name: "Canada",
                    capital: "Ottawa",
                    population: "38 Million"
                },
                {
                    name: "Russia",
                    capital: "Moscow",
                    population: "146 Million"
                },
                {
                    name: "South Africa",
                    capital: "Pretoria",
                    population: "60 Million"
                }
            ])
            setLoading(true);
        }, 2000);
    }
  return (
    <>
    <h1 className='text-center my-2 '>Rendering Component through Loop</h1>
    <div className="container row">
        {country.map((country, index) => (
            <CountryItem key={index} country={country}/>
        ))}
    </div>
    <div className="container">
        <button onClick={changeCountry} className='btn btn-success btn-lg'>{loading?'Changed Countries':'Change Countries'}</button>
    </div>
    </>
  )
}

export default Country
