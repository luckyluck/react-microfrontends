import faker from 'faker';

const mount = el => {
  el.innerHTML = `<div>You have ${faker.random.number()} items</div>`;
};

// Assuming that the app is launched in isolation
if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#dev-cart');

  if (el) {
    mount(el);
  }
}

export { mount };
