import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const DisplayContainer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`
const Canvas = styled.canvas`
    width: 100%;
    height: 100%;
    opacity: 1;
`

let rippleArray = []

const initCanvasAnimation = (canvas, ctx) => {
    const animateCanvas = (ctx) => {
        requestAnimationFrame(()=> animateCanvas(ctx));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < rippleArray.length; i++) {
            rippleArray[i].updateRippleFrame(ctx)
            
        }
    }
    animateCanvas(ctx);
}

class Ripple {
    constructor(mousePosition) {
        this.maxRippleSize = 30;
        this.radius = 50
        this.x = mousePosition.x;
        this.y = mousePosition.y;

        this.drawRipple = (ctx) => {
            ctx.beginPath();
            ctx.arc(mousePosition.x, mousePosition.y, this.radius, 0, Math.PI * 2, false);
            ctx.fillStyle = "#000";
            ctx.fill();  
        };
        this.updateRippleFrame = (ctx) => {
            if(mousePosition.x - this.x < 70 && mousePosition.y - this.y < 70) {
                if(this.radius < 100) {
                    this.radius += 15;
                    
                }
            } 
            this.drawRipple(ctx)
        }
    }
}

export default function RippleEffectCanvas({project}) {
    const canvasRef = useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        initCanvasAnimation(canvas, ctx);
    }, [])

    function handleOnMouseEnter() {
        canvasRef.current.addEventListener('mousemove', (e)=>{handleMouseMove(e)});
    }

    function handleOnMouseLeave() {
        rippleArray = [];
        canvasRef.current.removeEventListener('mousemove', (e)=>{handleMouseMove(e)});
    }

    function handleMouseMove(e) {
        const canvasBounds = canvasRef.current.getBoundingClientRect();

        let mouseX = e.offsetX;
        let mouseY = e.offsetY;
        // Normalize mouse coordinates from 0 to 1
        mouseX /= canvasBounds.width; 
        mouseY /= canvasBounds.height; 
        // Scale to canvas coordinates
        mouseX *= canvasRef.current.width;
        mouseY *= canvasRef.current.height;

        if(rippleArray.length < 20){
            rippleArray.push(new Ripple({x: mouseX, y: mouseY}))
        }
    }

    return(
        <DisplayContainer onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} >
            <Canvas ref={canvasRef} width="1024" height="1024" />
        </DisplayContainer>            
    )
};