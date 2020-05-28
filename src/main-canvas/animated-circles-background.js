import { theme } from "../theme/theme-context";

let mousePosition = {x: 150, y: 200};
const circleColors = theme.lightWarmPalette.paletteArray;
let currentCanvasDimensions = {w: 100, h: 100};
let circleArray = []
let numberOfCircles = null;

function calcMaxNumberOfCircles (canvasWidth, canvasHeight){
    return Math.floor((canvasWidth * canvasHeight) / 500);
}
export function updateMousePosition(newPosition) {
    mousePosition.x = newPosition.x;
    mousePosition.y = newPosition.y;
}

export function updateCurrentCanvasDimensions(w, h) {
    currentCanvasDimensions.w = w;
    currentCanvasDimensions.h = h;
    numberOfCircles = calcMaxNumberOfCircles(w, h)
}

export function generateCircles() {
    circleArray = []
    const width = currentCanvasDimensions.w;
    const height = currentCanvasDimensions.h;

    for (let i = 0; i < numberOfCircles; i++) {
        const radius = Math.random() * 7 + 1;
        let x = Math.random() * (width - radius * 2) + radius;
        let y = Math.random() * (height - radius * 2) + radius;
        let dy = (Math.random() - 0.5) * 2;
        let dx = (Math.random() - 0.5) * 2;
    
        const circleAttributes = {
            position: {x, y},
            velocity: {dx, dy},
            radius,
        }
        const newCircle = new Circle(circleAttributes);
        circleArray.push(newCircle);
    }
}

export const initializeBackground = (canvas, ctx) => {
        
    const animateCircleBackground = (ctx) => {
        requestAnimationFrame(()=> animateCircleBackground(ctx));
        ctx.clearRect(0, 0, currentCanvasDimensions.w, currentCanvasDimensions.h);
    
        for (let i = 0; i < circleArray.length; i++) {
            circleArray[i].updatePosition(ctx);
        }
    }
    animateCircleBackground(ctx);
}



class Circle {
    constructor(circleAttributes) {
        this.position = circleAttributes.position;
        this.velocity = circleAttributes.velocity;
        this.radius = circleAttributes.radius;
        this.minRadius = circleAttributes.radius;
        this.color = circleColors[Math.floor(Math.random() * circleColors.length)];
        this.maxRadius = (currentCanvasDimensions.w * currentCanvasDimensions.h) / 20000 + 25;

        let { position, velocity, radius, minRadius, maxRadius, color } = this;
        
        this.drawCircle = (ctx) => {
            ctx.beginPath();
            ctx.arc(position.x, position.y, radius, 0, Math.PI * 2, false);
            ctx.fillStyle = color;
            ctx.fill();
        };

        this.updatePosition = (ctx) => {
            // Reverse direction when colliding with view edges
            if (position.x + radius > currentCanvasDimensions.w || position.x - radius < 0) {
                velocity.dx = -velocity.dx;
            }
            if (position.y + radius > currentCanvasDimensions.h || position.y - radius < 0) {
                velocity.dy = -velocity.dy;
            }
            // Move position according to velocity
            position.x += velocity.dx;
            position.y += velocity.dy;
            
            // User Interactions
            if(mousePosition.x - position.x < 70 && mousePosition.x - position.x > -70
                && mousePosition.y - position.y < 70 && mousePosition.y - position.y > -70) {
                if (radius < maxRadius) {
                    radius += 1;
                }
            } else if(radius > minRadius) {
                radius -= 1;
            }

            this.drawCircle(ctx);
        };
    }
}
    