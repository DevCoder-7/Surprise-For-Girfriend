onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Happy One Month Anniversary').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    // Add smaller-text class to the title element
    titleElement.classList.add('smaller-text');

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay between letters
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};