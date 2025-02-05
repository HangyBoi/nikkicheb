const portfolioImages = [
    { src: '../images/not people/photo(7).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(4).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(3).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(17).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(8).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(25).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(1).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(26).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(12).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(21).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(10).jpg', alt: 'Selected shot for Nature' },
    { src: '../images/not people/photo(22).jpg', alt: 'Selected shot for Nature' },
];

const portfolioGrid = document.getElementById('portfolioGrid');
portfolioImages.forEach(imgData => {
    const div = document.createElement('div');
    div.classList.add('portfolio-item');

    const img = document.createElement('img');
    img.src = imgData.src;
    img.alt = imgData.alt;

    div.appendChild(img);
    portfolioGrid.appendChild(div);
});