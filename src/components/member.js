import React, { Component } from 'react';
class Member extends Component {
    render(){
        return (
                <div className="member">
                    <img className="member-img" src={this.props.imgurl} alt={this.props.name}/>
                    <div className="member-content">
                        <div className="member-name">{this.props.name}</div>
                        <p>{this.props.role}</p>
                    </div>
                </div>
        )
    }
}

export default Member;