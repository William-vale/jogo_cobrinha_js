let canvas = document.getElementById("snake"); //Recebe do HTML a tag canvas e recebe o id da mesma
let context = canvas.getContext("2d"); //Interpreta o jogo como 2d
let box = 32;
let snake = []; //Array que recebe as direções da cobrinha no eixo x e y
snake[0] = {
    x: 8*box,
    y: 8*box
}

let direction = "right"; //variavel que recebe a direção

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box); 
    }
}

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    //Variaveis que recebem a coordenada da direção da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //Direção para onde a cobrinha vai
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeX += box;

    snake.pop(); // Retira o ultimo elemento do nosso array
   
    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead); //Acrescenta um quadradinho no primeiro elemento


}

let jogo = setInterval(iniciarJogo, 100);



