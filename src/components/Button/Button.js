import React from 'react';
import './Button.css';

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) => {
    return (
        <button className={`btn ${buttonStyle} ${buttonSize} ${buttonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}