const input = document.querySelector('.input');
const itemAdd = document.querySelector('.itemAdd');
const items = document.querySelector('.items');

const onAdd = () => {
  const text = input.value;
  if (input.value === '') {
    input.focus();
    return;
  }

  const item = document.createElement('li');
  item.setAttribute('class', 'item');

  const itemText = document.createElement('span');
  itemText.setAttribute('class', 'itemText');
  itemText.innerHTML = text;

  const itemDel = document.createElement('button');
  itemDel.setAttribute('class', 'itemDel');
  itemDel.innerHTML = '<i class="fas fa-minus-circle"></i>';
  itemDel.addEventListener('click', () => {
    items.removeChild(item);
  });

  item.appendChild(itemText);
  item.appendChild(itemDel);
  items.appendChild(item);
  input.value = '';
  input.focus();
};

itemAdd.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
  return;
});
