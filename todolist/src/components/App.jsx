import React from "react";
import Item from "./Item";

function App() {
    const [todo, setTodo] = React.useState("");
    const [items, setItems] = React.useState([]);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setTodo(newValue);
    };

    const handleClick = () => {
        setItems((prevValue) => {
            return [...prevValue, todo];
        });
        setTodo("");
    };

    const handleCheck = (id) => () => {
        setItems((prevValue) => {
            return prevValue.filter((item, idx) => {
                return idx !== id;
            });
        });
    }
    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input type="text" onChange={handleChange} value={todo} />
                <button type="submit" onClick={handleClick}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((item, idx) => (
                        <Item key={idx} item={item} id={idx} onCheck={handleCheck}/>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
