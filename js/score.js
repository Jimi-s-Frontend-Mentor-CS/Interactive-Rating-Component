const submitBtn = document.querySelector('button.submit');
const ratingList = document.querySelector('ul.rating-list');
const selected = document.querySelector('span.selected');
const ratingContainer = document.querySelector('div.rating');
const thankYouContainer = document.querySelector('div.thank-you-container');
let hasSelected = false;

for(let children of ratingList.children) {
    children.addEventListener('click', () => {
        hasSelected = true;
        selected.innerHTML = children.getAttribute('data-value');
        children.classList.toggle('active');

        for(let x of ratingList.children) {
            if(x !== children) {
                x.classList.remove('active');
            }
        }
    });
}

submitBtn.addEventListener('click', () => {
    if(!hasSelected) {
        alert("You must select a value!");
        return;
    }
    ratingContainer.setAttribute('data-visible', false);
    thankYouContainer.setAttribute('data-visible', true);
});