function getElementWidth(content, padding, border) {
    
    const contentWidth = parseFloat(content);
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);

    
    return contentWidth + paddingValue * 2 +  borderValue * 2;
}


console.log(getElementWidth("50px", "8px", "4px")); 

