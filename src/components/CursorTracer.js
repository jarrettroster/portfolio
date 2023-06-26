import { useEffect } from 'react';

const CursorTracer = () => {
  useEffect(() => { /*  cursor tracer */
  var dots = [],
     mouse = {
       x: 0,
       y: 0
     };
     var Dot = function() {
         this.x = 0;
         this.y = 0;
         this.node = (function(){
           var n = document.createElement("div");
           n.className = "trail";
           document.body.appendChild(n);
           return n;
         }());
       };
       // The Dot.prototype.draw() method sets the position of 
         // the object's <div> node
       Dot.prototype.draw = function() {
         this.node.style.left = this.x + "px";
         this.node.style.top = this.y + "px";
       };
       
       // Creates the Dot objects, populates the dots array
       for (var i = 0; i < 5; i++) {
         var d = new Dot();
         dots.push(d);
       }
       
       // This is the screen redraw function
       function draw() {
         // Make sure the mouse position is set everytime
           // draw() is called.
         var x = mouse.x,
             y = mouse.y;
         
         // loop 
         dots.forEach(function(dot, index, dots) {
           var nextDot = dots[index + 1] || dots[0];
           
           dot.x = x;
           dot.y = y;
           dot.draw();
           x += (nextDot.x - dot.x) * .6;
           y += (nextDot.y - dot.y) * .6;
       
         });
       }
       
// eslint-disable-next-line no-restricted-globals
addEventListener("mousemove", function(event) {
    // event.preventDefault();
    mouse.x = event.pageX;
    mouse.y = event.pageY;
  });
       
       // animate() calls draw() then recursively calls itself
         // everytime the screen repaints via requestAnimationFrame().
       function animate() {
         draw();
         requestAnimationFrame(animate);
       }
       
       // And get it started by calling animate().
       animate();


    // Add the cleanup logic for removing event listeners
    return () => {
      // Remove event listeners or perform any necessary cleanup
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return null; // We don't need to render anything for the cursor tracer
};

export default CursorTracer;
