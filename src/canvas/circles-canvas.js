import React, { useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../theme/theme-context';
import { initializeBackground, updateMousePosition, updateCurrentCanvasDimensions, generateCircles } from './animated-circles-background';
import { useEventListener } from "../helpers/useEventListener";

export default function CirclesCanvas ({sizeChanged, bgColor}) {
    const themeContext = useContext(ThemeContext);
    const canvasRef = useRef();
    const canvasCircleColors = removeBackgroundColor(themeContext.theme.paletteArray, bgColor);

    function removeBackgroundColor (array, bgColor) {
        const colorArrayNoBg = [...array];
        const index = colorArrayNoBg.indexOf(bgColor);
        colorArrayNoBg.splice(index, 1);
        return colorArrayNoBg;
    }
    
    function handleResize() {
        adjustCanvasWidthHeight(canvasRef.current);
        updateCurrentCanvasDimensions(canvasRef.current.width, canvasRef.current.height);
    };
     
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
        updateMousePosition({
            x: mouseX,
            y: mouseY
        })
    };

    function adjustCanvasWidthHeight (canvas){
        canvas.style.width = "100%";
        canvas.style.height = "100%";

        const oldWidth = canvas.width;
        const oldHeight = canvas.height;
        const newWidth = canvas.offsetWidth;
        const newHeight = canvas.offsetHeight;

        canvas.width  = newWidth;
        canvas.height = newHeight;

        //Generate new circles if canvas shrinks
        if(oldWidth - canvas.offsetWidth > 0 || oldHeight - newHeight > 0){
            generateCircles(canvasCircleColors);
        }
    }
     
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const canvas = canvasRef.current;

        adjustCanvasWidthHeight(canvas);
        updateCurrentCanvasDimensions(canvas.width, canvas.height);
        
        initializeBackground(canvas, ctx);
        generateCircles(canvasCircleColors);
    }, []);

    useEffect(() => {
        generateCircles(canvasCircleColors)
    }, [themeContext])

    useEffect(() => {
        const updateInterval = setInterval(() => {
            adjustCanvasWidthHeight(canvasRef.current);
            updateCurrentCanvasDimensions(canvasRef.current.width, canvasRef.current.height);
        }, 1);
        setTimeout(() => {
            clearInterval(updateInterval);
        }, 1000);
        
    }, [sizeChanged])
    
    useEventListener('mousemove', handleMouseMove);
    useEventListener('resize', handleResize);
    
    return (
        <canvas
            ref={canvasRef}
            style={{backgroundColor: bgColor || themeContext.theme.darkest}}
        />      
    )
}