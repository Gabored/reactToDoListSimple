import React, {useState} from 'react';
import TodoRender from './todoList';


function TodoForm() {
    const [lista, setLista ] = useState([]);
    const [input, setInput] = useState('');

    

    const handleEvent = (event) => {
        event.preventDefault();
        const n_lista = [...lista];
        n_lista.push(input);
        setLista(n_lista);
        console.log(n_lista)
    }

    function deletear(lista, index){
        lista.splice(index, 1);
        const n_lista = [...lista];
        setLista(n_lista);
    }
   /*  function editar(lista, index, text){
        lista.splice(index, 1, text)
        const n_lista = [...lista];
        setLista(n_lista);
    }
    function editTrigger(edit){} */


   


    return (
        <>
            <form className='todo-form' onSubmit={handleEvent}>
            <h2> To Do List</h2>
            <h4> Type some stuff </h4>
            <input
            onChange= {event => {
                setInput(event.target.value);
            }}
            type='text'
            placeholder='Add to do'
            value={input}
            name='text'
            className='todo-input'>
            </input>
            <button className='todo-button' type="submit"> Add </button>
            </form>
            <TodoRender lista={lista} deletefunction= {deletear}/>
        </> 
    );
}

export default TodoForm;
