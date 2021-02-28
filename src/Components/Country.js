import React from 'react';

const Country = (props) => {
    const{name,region,population,flag} =props.country;
    // console.log(props.country);
    const flagStyle ={ height:'50px'};
    const countryStyle ={border:'1px solid red',margin:'10px',padding:'10px'}
    const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>This is {name}</h2>
            <img style={flagStyle} src={flag} alt=""/>
            <p>In {region}</p>
            <h4>Total Population : {population}</h4>
            <button onClick={() => handleAddCountry(props.country)}>Select</button>
        </div>
    );
};

export default Country;