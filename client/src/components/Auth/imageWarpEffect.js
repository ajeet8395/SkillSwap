export const handleImageWarp = (e) => {
    const image = e.target;
    const { width, height, left, top } = image.getBoundingClientRect();
    const x = (e.clientX - left) / width - 1;
    const y = (e.clientY - top) / height - 1;
    const rotateX = y * 25; 
    const rotateY = x * 25;

    image.style.transform = `scale(1.1) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

export const resetImageWarp = (e) => {
    const image = e.target;
    image.style.transform = 'scale(1)';
};