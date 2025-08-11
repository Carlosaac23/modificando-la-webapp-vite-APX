import './style.css';
import { headerComponent } from './header.ts';
import { productsListComponent } from './products.ts';
import { footerComponent } from './footer.ts';

document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('header');
  const productsContainer = document.getElementById('products');
  const footerContainer = document.getElementById('footer');
  headerContainer?.appendChild(headerComponent());
  productsContainer?.appendChild(productsListComponent());
  footerContainer?.appendChild(footerComponent());
});
