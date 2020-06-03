import React from 'react';

export default function CircleSvg({circleWidth, circleHeight, circleColor, circleShadow}) {
    function adjustHexColor(col, amt) {
        var usePound = false;
        if ( col[0] === "#" ) {
            col = col.slice(1);
            usePound = true;
        }

        var num = parseInt(col,16);

        var r = (num >> 16) + amt;

        if ( r > 255 ) r = 255;
        else if  (r < 0) r = 0;

        var b = ((num >> 8) & 0x00FF) + amt;

        if ( b > 255 ) b = 255;
        else if  (b < 0) b = 0;

        var g = (num & 0x0000FF) + amt;

        if ( g > 255 ) g = 255;
        else if  ( g < 0 ) g = 0;
     
        return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
    }      

    return(
        <svg  width={circleWidth} height={circleHeight} viewBox="0 0 385 392" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="circle-shadow" fill={circleShadow || adjustHexColor(circleColor, 20)} d="M192.5 5.74219V386.258C295.7 386.258 379.36 301.077 379.36 196C379.36 90.9233 295.7 5.74219 192.5 5.74219Z" />
            <path id="circle-fill" fill={circleColor} d="M349.282 196C349.282 90.9233 279.088 5.74219 192.5 5.74219C89.2997 5.74219 5.63965 90.9233 5.63965 196C5.63965 301.077 89.2997 386.258 192.5 386.258C279.088 386.258 349.282 301.077 349.282 196Z" />
        </svg>
    )
};