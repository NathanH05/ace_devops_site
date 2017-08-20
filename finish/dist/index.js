const { createElement } = React
const { render } = ReactDOM

const title = createElement(
	'h1',
	{id: 'title', className: 'header'},
	'Hwweello1 World'
)

render(
	title,
	document.getElementById('react-container')
)
