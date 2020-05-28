import React, { useState, useRef, useEffect, useContext } from 'react';
import { ThemeContext } from '../theme/theme-context';
import { initializeBackground, updateMousePosition, updateCurrentCanvasDimensions, generateCircles } from './animated-circles-background';
import { useEventListener } from "../helpers/useEventListener";

export default function MainCanvasIndex () {
    const theme = useContext(ThemeContext);
    const canvasRef = useRef();
    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    function handleResize() {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
        generateCircles();

        updateCurrentCanvasDimensions(canvasRef.current.width, canvasRef.current.height);
    };
     
    function handleMouseMove(e) {
        updateMousePosition({
            x: e.clientX,
            y: e.clientY
        })
    };
     
    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');
        const canvas = canvasRef.current;
        updateCurrentCanvasDimensions(canvas.width, canvas.height);

        initializeBackground(canvas, ctx);
        generateCircles();
    }, []);

    useEventListener('mousemove', handleMouseMove);
    useEventListener('resize', handleResize);
    
    return (
        <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height * 0.5}
            style={{backgroundColor: theme.background}}
        />      
    )
}