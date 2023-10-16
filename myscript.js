const wrapper = document.queryselector('.wrapper');
const question = document.queryselector('.question');
const yesBtn = document.queryselector('.yes_btn');
const noBtn = document.queryselector('.no_btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', () => {
question.innerHTML = 'I Love You Too :)';
});

noBtn.addEventListener('mouseover', () => {
const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1;
const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

noBtn.style.left = i + 'px';
noBtn.style.top = j + 'px';
});
