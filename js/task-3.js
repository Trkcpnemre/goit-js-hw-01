function getElementWidth(content, padding, border) {
    return (parseFloat(padding) + parseFloat(border)) * 2 + parseFloat(content);
  }
  
  console.log(getElementWidth("50px", "8px", "4px"));