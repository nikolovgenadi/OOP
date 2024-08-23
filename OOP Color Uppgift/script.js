
function Color(r, g, b) {
    this.r = r,
    this.g = g,
    this.b = b
}

Color.prototype.rgb = function() {
    return `rgb(${this.r},${this.g},${this.b})`;
}

Color.prototype.hex = function() {
    const toHex = n => n.toString(16).padStart(2, '0');
    return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
};

Color.prototype.rgba = function(a) {
    const toHex = n => n.toString(16).padStart(2, '0');
    return `rgba(${this.r},${this.g},${this.b},${a})`;
};

const myColor = new Color(255, 0, 0);
console.log("🚀 ~ myColor:", myColor.rgb());
console.log("🚀 ~ myColor:", myColor.hex());
console.log("🚀 ~ myColor:", myColor.rgba(0.7));

document.querySelector('body').addEventListener('click', () => { 
    document.body.style.backgroundColor = myColor.rgba(0.5);
});