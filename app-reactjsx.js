
function setTimeNow(){
    
    let now = new Date().toLocaleTimeString();
    const componentJSX = (
        <h1 id='title' className='title'> 
            hello world <span>react jsx {now}</span>
        </h1>
    ) 
    ReactDOM.render(componentJSX, document.getElementById('app-reactjsx'));
}



setInterval(setTimeNow,1000);
