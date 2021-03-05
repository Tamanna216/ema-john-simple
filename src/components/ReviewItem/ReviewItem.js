import React from 'react';

const ReviewItem = (props) => {

    const { name, quantity } = props.product;
    const style={
        borderBottom:'1px solid gray',
        marginBottom: '5px',
        paddingBottom: '5px',
        marginLeft: '200px'
    };

    return (
        <div style={style} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <br />
            <button className="main-button">Remove</button>
        </div>
    );
};

export default ReviewItem;