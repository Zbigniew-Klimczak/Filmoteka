const loader = document.querySelector('#loader');
const body = document.querySelector('body');
let mouseMoveListener;

export const trackMousePosition = () => {
  mouseMoveListener = event => {
    body.style.cursor = 'none';
    loader.style.left = `${event.clientX}px`;
    loader.style.top = `${event.clientY}px`;
    loader.style.display = 'block';
  };
  document.addEventListener('mousemove', mouseMoveListener);
};
export const stopTrackingMousePosition = () => {
  body.style.cursor = 'auto';
  document.removeEventListener('mousemove', mouseMoveListener);
  loader.style.display = 'none';
};
{
  trackMousePosition, stopTrackingMousePosition;
}
