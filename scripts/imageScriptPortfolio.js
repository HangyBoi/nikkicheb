const portfolioImages = [
    { src: '../images/portfolio/photo (24).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (3).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (11).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (32).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (4).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (37).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (23).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (14).jpg', alt: 'Selected shot for Main Portfolio' },
    { src: '../images/portfolio/photo (26).jpg', alt: 'Selected shot for Main Portfolio' },
    
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