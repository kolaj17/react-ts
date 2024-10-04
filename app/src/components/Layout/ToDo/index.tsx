import style from "./style.module.css"
import { NewItems, Todo } from "../../../types";


function ToDo(props: NewItems) {
    const handleComplete = (id: number) => {


        props.setItems((prevData: Todo[]) =>
            const updatedItems = wprevData.map((item: Todo) =>
                item.id === id
                    ? {
                        ...item, 
                        completed: true 
                    }
                    : item
            )
        );

        console.log(props.items, id);
        
        // localStorage.setItem('items', JSON.stringify(props.items))
    }

    return (
        <>
            <h1>Todo List</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {props.items.map(todo => (
                    <li key={todo.id} className={`${style.item} ${todo.completed ? style.completed : style.inProgress}`}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <div>
                            <button onClick={() => handleComplete(todo.id)} >Complete</button>
                            <button >Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );


}

export default ToDo;