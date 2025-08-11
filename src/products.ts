import productsList from './products.json' assert { type: 'json' };
import orderBy from 'lodash/orderBy';

interface Product {
  id: number;
  title: string;
  price: number;
}

export function productsListComponent() {
  const section = document.createElement('section');
  section.classList.add('products');

  const list = document.createElement('ul');
  const sortedByPrice = orderBy(productsList, ['price'], ['asc']);

  sortedByPrice.forEach((product: Product) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.title} - $${product.price} COP`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}
