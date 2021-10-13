let input = prompt('what would you like to do?');
const toDos = [];
while (input !== 'quit' && input !== 'q') {
  if (input === 'list') {
    if (toDos.length >= 1) {
      console.log('************');
      for (let i = 0; i < toDos.length; i++) {
        console.log(`${i}: ${toDos[i]}`);
      }
      console.log('************');
    } else {
      console.log('please add items to the t=ToDo list first');
    }
  } else if (input === 'new') {
    const newToDo = prompt('what is the new ToDo?');
    toDos.push(newToDo);
    console.log('added to list');
  } else if (input === 'delete') {
    const index = parseInt(prompt('enter the index of the ToDo to delete'));
    if (!Number.isNaN(index)) {
      if (index > toDos.length) {
        console.log('index not present in the ToDo list');
      } else {
        const deleted = toDos.splice(index, 1);
        console.log(`ok, deleted ${deleted}`);
      }
    } else {
      console.log('Please enter a valid index');
    }
  }
  input = prompt('what would you like to do?');
}
console.log('Ok, you have quit the app');
