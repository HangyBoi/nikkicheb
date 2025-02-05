const portfolioImages = [
    { src: '../images/people/photo (1).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (9).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (24).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (19).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (34).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (18).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (37).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (8).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (41).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (5).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (40).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (11).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (27).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (4).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (30).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (39).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (28).jpg', alt: 'Selected shot for People' },
    { src: '../images/people/photo (33).jpg', alt: 'Selected shot for People' },
]

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