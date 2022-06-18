import React, {FC} from "react";

export  enum CardVar {
    border= 'border',
    back = 'back'
}

interface IProps {
    width: string,
    height: string,
    children: React.ReactNode,
    variant: CardVar,
    onClick: () => void,
}

const Card: FC<IProps> = ({ width, height, children, variant, onClick}) => {
    return(
        <div style={{width, height, 
        border: variant === CardVar.border ? '2px solid red' : "none",
        background: variant === CardVar.back ? 'lightgreen' : 'none',
        }} onClick={onClick}>
            {children}
        </div>
    )
}

export default Card;