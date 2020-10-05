let canvas = document.getElementById("snake"); //Recebe do HTML a tag canvas e recebe o id da mesma
let context = canvas.getContext("2d"); //Interpreta o jogo como 2d
let box = 32;
let snake = []; //Array que recebe as direções da cobrinha no eixo x e y
snake[0] = {
    x: 8*box,
    y: 8*box
}

let direction = "right"; //variavel que recebe a direção

let food = { 
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

function criarBG() { //Function que cria o espaço do jogo
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() { //Function que Cria a cobrinha 
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); 
    }
}

function drawFood() { // Function que cria a comida da cobrinha
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left"; 
    if(event.keyCode == 38 && direction != "down") direction = "up"; 
    if(event.keyCode == 39 && direction != "left") direction = "right"; 
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){ //function que inicia o jogo e chama todas as outras functions
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;



    criarBG();
    criarCobrinha();
    drawFood();

    //Variaveis que recebem a coordenada da direção da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //Direção para onde a cobrinha vai
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
    else  {
        food.x = Math.floor(Math.random() * 15 + 1) * box;       
        food.y = Math.floor(Math.random() * 15 + 1) * box;        
    }

    //snake.pop(); // Retira o ultimo elemento do nosso array
   
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //Acrescenta um quadradinho no primeiro elemento
}

let jogo = setInterval(iniciarJogo, 100);



