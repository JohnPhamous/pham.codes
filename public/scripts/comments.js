document.onmouseup = (_e) => {
  const selection = window.getSelection();

  // `anchorNode` is null if there is no selected text.
  if (!selection.anchorNode) {
    return;
  }

  // Nothing is selected
  if (selection.toString() === '') {
    return;
  }

  console.log(selection.toString());
  console.log(selection);

  const {
    anchorNode: { parentElement },
  } = selection;

  parentElement.style.position = 'relative';
  const decoration = document.createElement('div');
  decoration.style.position = 'absolute';
  decoration.style.width = '300px';
  decoration.style.backgroundColor = 'red';
  decoration.style.top = `${getTopCoordinate(parentElement)}px`;
  decoration.style.right = '12px';
  decoration.textContent = selection.toString();

  document.body.appendChild(decoration);
};

const getTopCoordinate = (htmlElement) => {
  return htmlElement.offsetTop || htmlElement.offsetParent.offsetTop;
};
