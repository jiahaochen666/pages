import React from "react";



function Post(props) {
    let items = props.data;
    return (
        <div>
            <br/> <br/>
            <div className='App'>
                <div>
                    {items.map((item) => (
                        <div className='post'>
                            <div className="post_header">
                                <div className="header_left">
                                    <a href="#">
                                        <img src="anonymous.jpg" className="post_author_pic"/>
                                    </a>
                                    <div className="author_name">
                                        <a href="#">{item.username}</a>
                                    </div>
                                </div>
                                <div className="header_right">{item.title}</div>
                            </div>
                            <div className="content">
                                {item.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Post;