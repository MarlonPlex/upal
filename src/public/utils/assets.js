export function loadImage (src) {
    const img = new Image();
    img.addEventListener("load", () => {
        return img;
    });
    img.src = src;
}