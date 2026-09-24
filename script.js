const phone = '919105350761';

const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

menuBtn.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
  menuBtn.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('#navMenu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

document.querySelectorAll('.wa-btn').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.dataset.product;
    const message = `Hello Roy Scrap Dealer, I want to buy ${product}. Please share the price, quantity availability and order details.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
