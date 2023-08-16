import { useState } from 'react';

function TodoPriority() {
  const [chosenPriority, setChosenPriority] = useState('low-prio');

  function choosePriorityHandler(event) {
    setChosenPriority(event.target.value);
  };

return (
<>
      <p className={chosenPriority}>Chosen Priority: {chosenPriority}</p>

      <select onChange={choosePriorityHandler}>
        <option value="low-prio">Low</option>
        <option value="high-prio">High</option>
      </select>
</> );
};

export default TodoPriority;