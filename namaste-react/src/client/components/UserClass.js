import React from "react"
import UserContext from "../common/UserContext";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state={
            count : 0,
            userInfo:{}
        }
        console.log("Constrctur is calling")
    }
    async componentDidMount(){
        console.log("component did mount");
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        console.log("data",json)
        this.setState({userInfo:json})
    }
    render(){
        console.log("render is calling")
        // const {name, location} = this.props;
        return(
            <div className="user-card">
                <button onClick={()=>{this.setState({count:this.state.count + 1})}}>count:{this.state.count}</button>

                <h2>Name:{this.state.userInfo.name}</h2>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser})=>(<h1>{loggedInUser}</h1>)}
                    </UserContext.Consumer>
                </div>
                <h2>Location:{this.state.userInfo.location}</h2>
                {/* <p>{this.state.userInfo.}</p> */}
                    <img src={this.state.userInfo.avatar_url}/>
                <h2>contact:devikanthgandla28@gmail.com</h2>
            </div>
        )
    }
}

export default UserClass