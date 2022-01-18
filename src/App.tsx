import Todos from './Test/components/Todos';

import NewTodo from './Test/components/NewTodo';
import TodosContextProvider from './Test/store/todos-context';



function App() {

  return (
    <TodosContextProvider>
      <NewTodo  />
      <Todos />
    </TodosContextProvider>
   
  );
}

export default App;
