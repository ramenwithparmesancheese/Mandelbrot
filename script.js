m = document.getElementById("canvas").getContext("2d");
//2d canvas

atom = function(x, y, c) {
    m.fillStyle=c; m.fillRect(x,y,3,3);
}

//x and y are the two dimentions on the computer screen and c is color.


for(y=1; y<1000; y++) {
    for(x=1; x<1000; x++) {

dx = (x-500)/200;
dy = (y-500)/200;
//Increase or decrease the division of the distance to zoom in or out
a = dx;
//The different distance dimentions are a and b
b = dy;
//Above is what defines each part of the distance between the center and a pixel(or you can say atom) in the Mandelbrot Universe


for(t=1; t<200; t++) {
d = (a*a) - (b*b) + dx;
//By the way, changing dx to dy gives a way weirder outcome
//The subtraction sign between the 2 pairs of parenthesis is essential to the ending product.
b = 2 * (a*b)+dy;
a = d;
H = d > 200;

//I picked 200 since the canvas size is 1000px by 1000px

    if(H) {
        atom(x,y, "rgb("+ t*3 +","+ t +","+ t*0.5 +")"); break
        //The complicated line above in simple terms intertwines time, the "atoms," and the colors all together because time changes the litteral 
        //view of the world which is one of the reasons why Einsteins relativity theory was so famous.
        //You can create an image of slow light by changine the numbers that are being multiplied
    }
}}}
