const setAttributes = ($element, attributes) => {
  for (const attribute in attributes) {
    $element.setAttribute(attribute, attributes[attribute])
  }
}
export default setAttributes
