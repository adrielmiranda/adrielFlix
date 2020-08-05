import React from 'react';

const ButtonLink = (props) => {
    return (
        
        <a href={props.href} className={props.className} >
            {props.children}      {/* usamos colchetes para colocar o javaScript dentro do nosso html que esta dentro do javaScript*/}
        </a>


    )

}

export default ButtonLink; 