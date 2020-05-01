import React, { useState } from "react";

function TodoItem(props) {
    const [isDone, setLine] = useState(false);

    function lineThrough() {
        setLine((prevValue => !prevValue));
    }
    return (
        <div>
            <ul>
                <li onClick={ lineThrough } style={{ textDecoration: isDone ? "line-through" : "none", cursor: "pointer" }}>{ props.text }</li>
            </ul>
            <button onClick={() => props.onChecked(props.id) }>Delete</button>
        </div>  
    )
}

export default TodoItem;