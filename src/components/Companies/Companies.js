import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Company from '../Company/Company';
import './Companies.css'
const Companies = () => {
    // useState
    const [companies, setCompanies] = useState([])
    const [cart, setCart] = useState([])
    // data load
    useEffect(() => {
        fetch('./company.json')
            .then(res => res.json())
            .then(data => setCompanies(data))
    }, []);
    // handleAddToCart 
    const handleAddToCart = (company) => {
        const newCart = [...cart, company]
        setCart(newCart)
    }
    return (
        <div className='companies'>
            <div className='companies-card'>
                {
                    companies.map(company => <Company
                        key = {company.rank}
                        company={company}
                        handleAddToCart = {handleAddToCart}
                    ></Company>)
                }
            </div>
            <div className='cart-container'>
           <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Companies;
