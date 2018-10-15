let mountNode = document.getElementById('app-react-form'); 

class UncontrolledForm extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.getPropsInternal({
            textValue:  this.inputRef.value,
            accepted: this.checkRef.checked
        });
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Text'  defaultValue='Hello'  ref={function(element){
                this.inputRef= element;
            }.bind(this)
            }/>
            <input type='checkbox' defaultChecked={true} ref={function(element){
                this.checkRef= element;
            }.bind(this)
            }/>
            <br/>
            <button>
              Save
            </button>
          </form>
        </div>
      );
    }
  
  }
  
  class ControlledForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            textValue:this.props.text,
            accepted: this.props.accepted
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceivedProps(nextProps){
        event.preventDefault();
        this.setState({
            textValue: nextProps.text,
            accepted: nextProps.accepted
        });
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.getPropsInternal({
            textValue:  this.state.textValue,
            accepted: this.state.accepted
        });
    }

    handleText(event){
        this.setState({
            textValue: event.target.value
        });
    }

    handleCheckbox(event){
        this.setState({
            accepted: event.target.checked
        });
    }

    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type='text' placeholder='Text'  value={this.state.textValue}  
                onChange={this.handleText.bind(this)}
            />
            <input type='checkbox' checked={this.state.accepted} 
                onChange={this.handleCheckbox.bind(this)}
            />
            <br/>
            <button>
              Save
            </button>
          </form>
        </div>
      );
    }
  
  }
  


const Uncontrolled = React.createElement(UncontrolledForm, {
    getPropsInternal: function(propsInternal){
        alert(propsInternal.textValue);
        alert(propsInternal.accepted);
    }}
    );

const Controlled = React.createElement(ControlledForm, {
        text: 'Test',
        accepted: true,
        getPropsInternal: function(propsInternal){
            alert(propsInternal.textValue);
            alert(propsInternal.accepted);
        }}
);
  
const Forms =  React.createElement(
        'div',
        null,
        Uncontrolled,
        Controlled
    );

  ReactDOM.render(Forms, mountNode);