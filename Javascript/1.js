const bun = document.querySelector('button');
const tex = document.querySelector('p');

bun.addEventListener('click',updateBtn);
function updateBtn() {
    if (bun.textContent === 'Start machine') {
        bun.textContent = 'Stop machine';
        tex.textContent = 'The machine has started!';
    }else {
        bun.textContent = 'Start machine';
        tex.textContent = 'The machine is started!';
    }
}
