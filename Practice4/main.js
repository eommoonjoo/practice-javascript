'useStrict';

const introduceBox = document.querySelector('.introduceBox');
const span = document.createElement('span');
span.setAttribute('class', 'title');
span.textContent = 'Nice to meet you';

introduceBox.appendChild(span);
