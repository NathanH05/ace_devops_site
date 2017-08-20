const { createElement } = React
const { render } = ReactDOM

const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'22Hwweello1 from Nath  World'
)

render(
	title,
	document.getElementById('react-container')
)
