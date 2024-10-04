
import { useState } from 'react';
import Layout from './components/Layout';
import NewItem from './components/Layout/NewItem';
import ToDo from './components/Layout/ToDo';

function App() {
  const data = localStorage.getItem('items')
  // localStorage.setItem('items', JSON.stringify([{ id: 1, text: 'Buy groceries', completed: false }]))  
  const toDos = data ? JSON.parse(data) : []
  const [items, setItems] = useState<{ id: number; text: string; completed: boolean }[]>(toDos);

  return (
    <Layout>
      <ToDo
        items={toDos}
        setItems={setItems} 
        />
      <NewItem
        items={items}
        setItems={setItems}
      />
    </Layout>
  )
}

export default App;
