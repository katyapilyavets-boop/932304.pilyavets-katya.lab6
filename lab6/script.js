document.addEventListener('DOMContentLoaded', () => {
  const leftLayoutBtn = document.querySelector('.layouts-nav__item.left');
  const rightLayoutBtn = document.querySelector('.layouts-nav__item.right');
  const bothLayoutBtn = document.querySelector('.layouts-nav__item.both');

  const [leftColumn, rightColumn] = document.querySelectorAll('.layouts-template__item');

  const setColumnStyle = (element, { flexBasis, imgDisplay, imgWidth }) => {
    element.style.flexBasis = flexBasis;
    const img = element.querySelector('img');
    if (img) {
      img.style.display = imgDisplay;
      img.style.width = imgWidth;
    }
  };

  const createAsymmetricColumns = (wideColumn, narrowColumn) => {
    setColumnStyle(wideColumn, { flexBasis: '95%', imgDisplay: 'block', imgWidth: '75%' });
    setColumnStyle(narrowColumn, { flexBasis: '5%', imgDisplay: 'none', imgWidth: '100%' });
  };

  const setBothColumns = () => {
    setColumnStyle(leftColumn, { flexBasis: '50%', imgDisplay: 'block', imgWidth: '100%' });
    setColumnStyle(rightColumn, { flexBasis: '50%', imgDisplay: 'block', imgWidth: '100%' });
  };

  leftLayoutBtn.addEventListener('click', () => createAsymmetricColumns(leftColumn, rightColumn));
  rightLayoutBtn.addEventListener('click', () => createAsymmetricColumns(rightColumn, leftColumn));
  bothLayoutBtn.addEventListener('click', setBothColumns);
});