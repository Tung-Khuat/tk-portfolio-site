export function checkElementInView(element, query) {
    let domElement = element;
    if(query)
        domElement = document.querySelector(query)
    const boundRect = element.getBoundingClientRect();
    const isElementInView = Boolean(boundRect.top < 0 && boundRect.bottom > window.innerHeight)
    
    return isElementInView
  }