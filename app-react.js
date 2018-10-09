const component = React.createElement('h1', 
    {id:'title'},
    'hello world ',
    React.createElement('span', null, 'by react')
);
ReactDOM.render(component, document.getElementById('app-react') );