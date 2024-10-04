import React, { FormEvent, useState } from 'react'
import style from './style.module.css'
import { NewItems } from '../../../types';



function NewItem(props: NewItems) {
    const toDoItems = props.items
    const [newItem, setNewItem] = useState<string>('');

    const handleClickNewItem = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const lastItem = props.items.slice(-1)[0];
        const id = lastItem ? lastItem.id + 1 : 1;

        console.log(id, newItem);
        props.setItems([...toDoItems, { id: id, text: newItem, completed: false }]);
        setNewItem('');
        localStorage.setItem('items', JSON.stringify([...toDoItems, { id, text: newItem, completed: false }]));
    };

    return (
        <div className={style.newItem}>
            <form onSubmit={handleClickNewItem}>
                <input
                    type='text'
                    name='newItem'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder='Add a new todo'
                    className={style.inputNewItem}
                />
                <button type='submit' className={style.buttonNew}>
                    Add New
                </button>
            </form>
        </div>
    )
}

export default NewItem