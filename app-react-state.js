class Title extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            firstTitle : 'Counter',
            secondTitle: 'New Counter',
            mainTitle: 'Counter'
        }
        //this binding is necessary to make this work in the callback
        this.changeTitle = this.changeTitle.bind(this);
    }


    changeTitle (){
        this.setState(state => ({
            mainTitle: state.mainTitle === state.firstTitle? state.secondTitle: state.firstTitle
            }))
    };


    render(){
        return (
            <h1 onClick={this.changeTitle}>
                This is the {this.state.mainTitle}
            </h1>
        )
    }
}

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 4
        }

        this.doUp = this.doUp.bind(this);
        this.doDown = this.doDown.bind(this);
        this.doReset = this.doReset.bind(this);
    }
//reacto don't recommend to change status
    doUp (e){
        e.preventDefault();
        this.setState(state => ({
            count: state.count + 1
        }));
    };

//react recommend use function to change satus
    doDown (e){
        e.preventDefault();
        this.setState(function(prevState){
            if(prevState.count < 1){
                return null;
            }
            return {
                count: prevState.count - 1
            }
        });
    };

    //doReset = (e) => {
        // this syntax is not supported by version 5 babel
    doReset (e){
        e.preventDefault();
        this.setState({
            count: 0
        });
    };

    render(){
        return (
        <div>
            <div>
                {this.state.count}
            </div>
            <div>
                <a href="#" onClick={this.doUp}>Up</a>
                <a href="#" onClick={this.doDown}>Down</a>
                <a href="#" onClick={this.doReset}>Reset</a>
            </div>
        </div>
        )
    }
}

const Group = props => {
    return (
        <div>
        <Title />
        <Counter />
        </div>
    )
};


ReactDOM.render(<Group/>, document.getElementById('app-react-state'));