import faker from 'faker';

const cartText = `<div>You have ${faker.random.number()} items</div>`;

document.querySelector('#dev-cart').innerHTML = cartText;
