'useStrict';

const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');
const targetRect = target.getBoundingClientRect();
console.log(targetRect);
const halfWidth = targetRect.width / 2;
const halfHeight = targetRect.height / 2;

addEventListener('load', () => {
  const targetHalfWidth = document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    // vertical.style.left = `${x}px`;
    // horizontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    //  left와 top을 사용하지 않은 이유는, transform이 composite선에서만 변경이 되기 때문에 성능적인 부분에서
    //  월등히 낫다고 판단할 수 있습니다.

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    // target.style.transform = `translate(${x - 60}px, ${y - 60}px)`;
    target.style.transform = `translate(${x - halfWidth}px, ${
      y - halfHeight
    }px)`;

    //console.log(targetRect)를 통해서 target의 정보를 확인할 수 있는데, 이 때, 하드코딩으로 값을 변경시킬 수 있고
    //아니면, 이것또한 변수를 설정해서 값을 지정할 수 있는데, 후자를 추천한다.

    tag.style.left = `${x}px`;
    tag.style.top = `${y}px`;
    tag.innerHTML = `${x}, ${y}`;
  });
});
