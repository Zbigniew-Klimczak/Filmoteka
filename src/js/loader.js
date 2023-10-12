const movieContainer = document.querySelector('.movies__container');

const loaderHtml = `<div class="dot-spinner">
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
  <div class="dot-spinner__dot"></div>
</div>`;

export const startLoader = () => {
  movieContainer.insertAdjacentHTML('beforeend', loaderHtml);
};
export const stopLoader = () => {
  const loaderContainer = document.querySelector('.dot-spinner');
  loaderContainer.remove();
};
