import React from "react";
import {useState} from 'react';
import '../App.css';
import App from '../App'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup_inner">
                <button className="close" onClick={() => props.setTrigger(false)}>close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}


function PopupApp() {
    const [popup, setPopup] = useState(false);
    const [data, setData] = useState({
        username: "",
        title: "",
        text: ""
    })

    const handle = e => {
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(
            'https://workers.jiahaochen535.workers.dev', {
                mode: 'no-cors',
                method: 'post',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        ).then(res => {
            console.log(res.data);
            document.getElementById("username").value = '';
            document.getElementById("title").value = '';
            document.getElementById("text").value = '';
            data.username = '';
            data.text = '';
            data.title = '';
            setPopup(false);
            window.location.reload();
        })
    }

    return (
        <div id="nav_button">
            <a href="#" onClick={() => setPopup(true)}>Write a post</a>
            <Popup trigger={popup} setTrigger={setPopup}>
                <form onSubmit={e => submitHandler(e)} action="#">
                    <input type="text" id="username" value={data.username} required={true} onChange={e => handle(e)}
                           placeholder="Username"/>
                    <input type="text" id="title" value={data.title} required={true} onChange={e => handle(e)}
                           placeholder="Title"/>
                    <textarea id="text" value={data.text} required={true} onChange={e => handle(e)} placeholder="Share your thinking"/>
                    <br/>
                    <button type="submit">Post</button>
                </form>
            </Popup>
        </div>
    )
}

export default PopupApp;