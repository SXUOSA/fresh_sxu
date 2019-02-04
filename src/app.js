import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Pages/home.jsx';
class IndexComponent extends React.Component{
    render(){
        return <Home></Home>
    }
}
var app = document.getElementById("app");
ReactDOM.render(<IndexComponent/>, app);