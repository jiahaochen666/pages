import './App.css';
import $ from 'jquery';
import {Component} from 'react'
import PopupApp from './Components/Popup';
import Post from './Components/Post'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {backendData: []};
    }

    getData() {
        $.ajax({
                url: 'https://workers.jiahaochen535.workers.dev',
                success: function (data) {
                    this.setState({backendData: data});
                }.bind(this),
                method: 'get',
                error: function (xhr, status, err) {
                    console.log(err);
                    alert(err);
                }
            }
        );
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <PopupApp/>
                <Post data={this.state.backendData}/>
            </div>
        )
    }
}

export default App;
