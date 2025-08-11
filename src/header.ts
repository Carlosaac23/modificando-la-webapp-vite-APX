export function headerComponent() {
  const header = document.createElement('header');
  header.innerHTML = '<h1>Productos disponibles</h1>';
  header.classList.add('header');
  return header;
}
