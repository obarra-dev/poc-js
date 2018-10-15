let mountNode = document.getElementById('app-react-form'); 

class Form extends React.Component {
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
  


  const Uncontrolled = React.createElement(Form, {
    getPropsInternal: function(propsInternal){
        alert(propsInternal.textValue);
        alert(propsInternal.accepted);
    }}
    );
  
  ReactDOM.render(Uncontrolled, mountNode);