// 이미지 파일 경로를 배열로 정의합니다.
const imageSources = [
    'klee.png'
    // 추가적인 이미지 파일 경로를 필요에 따라 추가합니다.
  ];
const imageWidth = 200;
const imageHeight = 150;
// 랜덤한 위치에 이미지를 표시하는 함수를 정의합니다.
function showRandomImage() {
    // container 요소를 가져옵니다.
    const container = document.getElementById('container');

    // 이미지를 생성합니다.
    const image = document.createElement('img');

    // 이미지 파일 경로를 랜덤하게 선택합니다.
    const randomIndex = Math.floor(Math.random() * imageSources.length);
    const randomImageSource = imageSources[randomIndex];

    // 이미지 크기를 200px로 설정합니다. 
    image.style.width = `${imageWidth}px`;
    image.style.height = `${imageHeight}px`;

    // 이미지 요소의 속성을 설정합니다.
    image.src = randomImageSource;
    image.classList.add('image');

    // 이미지를 container에 추가합니다.
    container.appendChild(image);

    // 이미지를 랜덤한 위치에 배치합니다.
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const randomX = Math.random() * (containerWidth - imageWidth);
    const randomY = Math.random() * (containerHeight - imageHeight);

    console.log(imageWidth)
    console.log(imageHeight)

    image.style.left = randomX + 'px';
    image.style.top = randomY + 'px';

    // 이미지 클릭 시 이미지를 사라지게 하는 이벤트 리스너를 추가합니다.\
    const clickEvent = (() => {
        if ('ontouchstart' in document.documentElement === true) {
            return "touchstart"
        }
        else {
            return "click"
        }
    })()
    
    // 화면을 클릭하면 함수 실행
    image.addEventListener(clickEvent, () => {
        image.style.display = 'none';


    // 새로운 위치에 이미지를 표시합니다.
    setTimeout(showRandomImage, 0);
    })

    // 이미지를 보여줍니다.
    image.style.display = 'block';
}

// 페이지 로드 시 이미지를 보여줍니다.
showRandomImage();
