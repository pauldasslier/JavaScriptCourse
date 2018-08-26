class Options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height + 'px';
		this.width = width + 'px';
		this.bg = bg;
		this.fontSize = fontSize + 'px';
		this.textAlign = textAlign;
	}
	getDiv(text) {
		let div = document.createElement('div');
		document.body.appendChild(div);
		div.textContent = text;
		div.style.cssText = `height: ${this.height}; \
		                     width: ${this.width}; \
		                     background-color: ${this.bg}; \
		                     font-size: ${this.fontSize}; \
		                     text-align: ${this.textAlign};`;

	}
}

let divData = new Options(100, 100, 'green', 20, 'center').getDiv('Джон');