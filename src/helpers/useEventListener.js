import { useEffect, useRef } from 'react'

export function useEventListener(eventType, handler, element = window) {
    const handlerRef = useRef(handler);
    useEffect(() => {
        handlerRef.current = handler;
    });

    useEffect(() => {
        function internalHandler(e) {
            return handlerRef.current(e);
        }

        const isSupported = element && element.addEventListener;
        if (!isSupported) return;

        element.addEventListener(eventType, internalHandler);
        // console.log(element)
        // console.log('Added event ' + eventType);

        return () => {
            element.removeEventListener(eventType, internalHandler);
            // console.log('Removed event ' + eventType)
        }
    }, [eventType, element]);
}
