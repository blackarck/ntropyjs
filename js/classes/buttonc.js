export default class cbutton {
 
    constructor(x,y,width,height,ccanvas){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.canvas=ccanvas;
        this.col="white"
        this.ctx = this.canvas.getContext("2d");
        this.ctx.fillStyle=this.col;
        this.ctx.font = "10px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
         // Draw the button text
        this.ctx.fillStyle = "black";
        this.ctx.fillText("Click me", this.x + this.width / 2, this.y + this.height / 2);
        this.rect1= ccanvas.getBoundingClientRect();

        this.canvas.addEventListener("mouseup", this.handlebtnclick1);
    }

setCol(color){
    this.ctx.fillStyle=color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
   }
    
setText(ctext,ctextcol,cfont){
      // Set the font and alignment for the button text
      this.ctx.font = cfont;
      this.ctx.fillStyle = ctextcol
      this.ctx.textAlign = "center";
      this.ctx.textBaseline = "middle";
 
      // Draw the button text
      this.ctx.fillText(ctext, this.x + this.width / 2, this.y + this.height / 2);
}

handlebtnclick1(event){
    // const rect = this.canvas.getBoundingClientRect();
    console.log("This.rect",this.rect1);
    const mousex = event.clientX - this.rect1.left;
    const mousey = event.clientY - this.rect.top;

    if ( mousex >= this.x && mousex <= this.x + this.width && mousey >= this.y && mousey <= this.y + this.height) {
        console.log("Button Clicked");
        this.setClicked();
      } 
}

setClicked(){

}

}