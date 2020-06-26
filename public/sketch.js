var socket;

function setup() {
    createCanvas(400, 400);
    background(51);

    socket = io.connect('http://localhost:3000');
    socket.on('mouseDragToClient', dataFromServer);
  }
  
  function dataFromServer(data) {
    noStroke();
    fill(255, 0 , 23);
    ellipse(data.x, data.y, 20, 20);
  }
  
  function mouseDragged() {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
    
    const data = {
      x: mouseX,
      y: mouseY,
    };

    socket.emit('mouseDragFromClient', data);

  }
  
  function draw() {
  }