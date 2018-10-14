//method to create component, it is legacy
// const HeadOther = React.createClass({
//     render: function(){
//         return React.createElement(
//             'h1',
//             null,
//             'My Site - ' + this.props.title
//         );
//     }
// });


function Head(props){
    return React.createElement(
        'h1',
        null,
        'My Site - ' + props.title
    );
}

function Menu(props){
    return React.createElement(
        'ul',
        {className: 'menu'},
        React.createElement('li', null, 'Home'),
        React.createElement('li', null, 'Us'),
        React.createElement('li', null, 'FAQ')
    );
}

function Content(props){
    return React.createElement(
        'div',
        {className: 'content'},
        props.children
    );
}



const MainApp = React.createElement(
    'div',
    null,
    Head({title: 'First Page React'}),
    Menu(),
    Content({
        children: React.createElement(
            'p',
            null,
            'Hellow World function'
        )
    })
);

// class ButtonSave extends React.Component{
//     render(){
//         return React.createElement(
//             'button',{
//                 type: 'button',
//                 onClick: function(e){
//                     if(this.props.enable){
//                         this.props.onClick(e);
//                     }
//                 }.bind(this)
//             },
//             'Save' 
//         )
//     }
// };

class List extends  React.Component{
    render(){
        let newElement = null;
        let newfunction = null;

        if(this.props.words == null || this.props.words.length < 1){
            newElement = this.props.createElementCallBack();
            newfunction = this.props.changeToList;
        }else{
            newElement = this.props.words.map(function(word){
                return React.createElement('p', null, word);
            })
            newfunction = this.props.changeToLinearized;
        }

        return React.createElement('div', {
            onClick: newfunction
        }, newElement);
        
    }
};


function reRender(externalElement){
    ReactDOM.render(
        React.createElement(List, {
            words: externalElement,
            createElementCallBack: function(){
                return React.createElement(
                    'p',
                    null,
                    'Hi world linearized'
                );
            },
            changeToLinearized: function(){
                reRender([]);
            },
            changeToList: function(){
                reRender( ['I', 'am', 'off']);
            }
        }
        ),
        document.getElementById('app-react-function'));
}

// example of re render and callback
reRender([]);

// ReactDOM.render(
//     MainApp,
//     document.getElementById('app-react-function'));