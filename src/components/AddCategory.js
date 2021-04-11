import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategorias }) => {

    const [valor, setValor] = useState('')

    const handleInputChange = (e) => {
        setValor(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(valor.trim().length > 2) setCategorias( (cats) => [valor,...cats]);
        setValor('');
    }

    return (
        <>
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    value={ valor }
                    onChange={ handleInputChange }
                />
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}