import './style.css';
import { headerComponent } from './header.ts';
import { productsListComponent } from './products.ts';
import { footerComponent } from './footer.ts';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app?.appendChild(headerComponent());
  app?.appendChild(productsListComponent());
  app?.appendChild(footerComponent());
});
