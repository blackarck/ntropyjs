export default function createUI(ctx,canvas) {
    console.log("Starting UI loading");
    canvas.addEventListener("mouseup", handleClickUp);

     // Draw the label
     ctx.fillText("Click the button:", canvas.width / 2, 50);

     // Create the button
     const buttonWidth = 100;
     const buttonHeight = 50;
     const buttonX = canvas.width / 2 - buttonWidth / 2;
     const buttonY = 100;

     // Draw the button
     ctx.fillStyle = "blue";
     ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

     // Set the font and alignment for the button text
     ctx.font = "18px Arial";
     ctx.fillStyle = "white";
     ctx.textAlign = "center";
     ctx.textBaseline = "middle";

     // Draw the button text
     ctx.fillText("Click me", canvas.width / 2, buttonY + buttonHeight / 2);
    
   
     function handleClickUp(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        if (x >= buttonX && x <= buttonX + buttonWidth && y >= buttonY && y <= buttonY + buttonHeight) {
            console.log("Button Clicked");
          }  

      }

      
  }