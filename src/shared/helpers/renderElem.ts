export const renderElem = (elem: string, root: Element, className?: string, css?: string) => {
	const element = document.createElement(elem)
	element.className = className ?? ""
	element.style.cssText = css ?? ""
	root.append(element)

	return element
}