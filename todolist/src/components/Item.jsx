import React from "react";

function Item(props) {
    return (
        <li onClick={props.onCheck(props.id)}>
            {props.item}
        </li>
    );
}

export default Item;
