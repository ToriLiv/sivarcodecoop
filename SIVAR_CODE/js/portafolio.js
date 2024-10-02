//----------------------------------------------------------------------PORTAFOLIO------------------------------------------------------------------------------------------------------------>

const filterButtons = document.querySelectorAll('#portfolio-flters li');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterPortfolioItems(filter);
    filterButtons.forEach(btn => btn.classList.remove('filter-active'));
    button.classList.add('filter-active');
  });
});

  function seleccionado(element) {
  //Elimina la clase activa de todos los elementos li
    var items = document.querySelectorAll('#portfolio-flters li');
    items.forEach(function(item) {
    item.classList.remove('active');
    });

    // Añade la clase activa al elemento clicado
    element.classList.add('active');
    }

function filterPortfolioItems(filter) {
  portfolioItems.forEach(item => {
    if (filter === '*' || item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });

};


//:)


