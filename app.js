const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Symbol {
  constructor(x, y, fontSize, canvasHeight) {
    this.character = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜｦﾝ!@#$%^&*()-_=+[]{}|;:',.<>/?`;
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
  }
    draw(context) {
        this.text = this.character.charAt(Math.floor(Math.random() * this.character.length))
        context.fillStyle = "#0aff0a ";
        context.fillText(this.text, this.x*this.fontSize, this.y*this.fontSize);
        if (this.y * this.fontSize > this.canvasHeight && Math.random()>0.95) {
            this.y = 0;
        }
        else {
            this.y += 1;
        }
  }
}

class Effect{
    constructor(canvasWidth,canvasHeight) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.fontsize = 25;
        this.column = this.canvasWidth / this.fontsize;
        this.symbol = [];
        this.#initialize();
        console.log(this.symbol)
    }
    #initialize() {
        for (let i = 0; i < this.column; i++){
            this.symbol[i]= new Symbol(i,0,this.fontsize,this.canvasHeight)
        }
    }
}
const effect = new Effect(canvas.width,canvas.height)
let lastTime = 0;
const fps = 30;
const nextFrame = 1000 / fps;
let timer = 0;

function animate(timeStamp) {
    const deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;
    if (timer > nextFrame) {
        
    }
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.font = effect.fontsize + 'px monospace'
    effect.symbol.forEach(symbo => symbo.draw(ctx))
    requestAnimationFrame(animate)
}
animate()