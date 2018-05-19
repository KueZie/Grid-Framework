class Grid {
	constructor(r,c, options){
  	this.rows = r;
    this.col = c;
    this.options = options;
    this.sl = options.sidelength;
    this.height = r * options.sidelength;
    this.width = c * options.sidelength;
  }
  validation(){
  	if(this.rows === undefined || this.rows === null){
    	throw Error('The specified value rows cannot be' + this.rows);
    }
    if(this.col === undefined || this.col === null){
    	throw Error('The specified value col cannot be' + this.col);
    }
    if(this.options === undefined || this.options === null){
    	throw Error('The specified value options cannot be' + this.options)
    }
  }
  scoreGrid(){
    const target = document.querySelector(this.options.target);
    const ctx = target.getContext('2d');
    target.height = this.height;
    target.width = this.width;
  	target.style.border = '1px solid black';
  	for(let i = this.sl; i <= this.width; i += this.sl){
    	ctx.beginPath();
    	ctx.lineWidth = 1;
    	ctx.moveTo(i,0);
      ctx.lineTo(i, this.height);
      ctx.stroke();
    }
    for(let i = this.sl; i <= this.height; i += this.sl){
    	ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.moveTo(0,i);
      ctx.lineTo(this.width, i);
      ctx.stroke();
    }
  }
  draw(r,c,color){
  	const ctx = document.querySelector(this.options.target).getContext('2d');
  	const dims = this.dimensions(r,c);
    ctx.fillStyle = color;
    ctx.fillRect(dims[0], dims[1], this.sl - 2, this.sl - 2);
  }
  dimensions(r,c){
  	const x1 = r * this.sl + 1;
    const y1 = c * this.sl + 1;
  	return [x1,y1];
  }
  setup(){
  	this.validation();
    this.scoreGrid();
  }
  redraw(){
  	const ctx = document.querySelector(this.options.target).getContext('2d');
    ctx.clearRect(0,0,this.width, this.height);
    this.scoreGrid();
  }
}

const grid = new Grid(20,20, {
	sidelength: 30,
  target: 'canvas'
})
grid.setup();




