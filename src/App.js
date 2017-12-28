import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import store                 from './store/index';
import { changeTextAction, buttonClickAction } from './actions/index'; 
class App extends Component {
  render() {  
    const {text, onChangeText, onButtonClick} = this.props;  
    return (  
        <div>  
            <h1 onClick={onChangeText}> {text} </h1>  
            <button onClick={onButtonClick}>click me</button>  
        </div>  
    );  
  }
  onChangeText() {
      let { dispatch } = this.props;
      dispatch(changeTextAction());
  }
  onButtonClick() {
    let { dispatch } = this.props;
    dispatch(buttonClickAction());
  }
}




  
//映射Redux state到组件的属性  
function mapStateToProps(state) {  
    return { text: state }  
}  
  
//映射Redux actions到组件的属性  
function mapDispatchToProps(dispatch){  
    return{  
        onButtonClick:()=>dispatch(buttonClickAction),  
        onChangeText:()=>dispatch(changeTextAction)  
    }  
}  
  
export default connect(mapStateToProps, mapDispatchToProps)(App)

