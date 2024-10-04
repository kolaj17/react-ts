export type TodoProps = {
    items: {
        id: number;
        text: string;
        completed: boolean;
    }[]
}

export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    items: Todo[];
}

export interface NewItems extends TodoItemProps {
    setItems: React.Dispatch<React.SetStateAction<Todo[]>>;
}

