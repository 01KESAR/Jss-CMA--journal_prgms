window.onload = function() 
 {
 const canvas = document.getElementById("canvas");
 const ctx = canvas.getContext("2d");
 const image = new Image();
 const centerX = canvas.width / 2;
 const centerY = canvas.height / 2;
 let angle = 0;
 image.src = "off.jpg";
 image.onload = function()
 {
 setInterval(() => 
 {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.save();
 ctx.translate(centerX, centerY);
 ctx.rotate(angle * Math.PI / 180);
ctx.drawImage(image, -image.width / 2, -image.height / 2);
ctx.restore();
 angle += 5; 
 }, 100); 
 };
};