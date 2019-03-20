import React from 'react';
import { throws } from 'assert';

class Customer extends React.Component{
    render(){ //그려지는 내용이 여기에 render()에 담김
        return(
            <div>
            <CustomerProfile image={this.props.image} id={this.props.id} name={this.props.name}/>
            <CustomerInfo birthday={this.props.birthday} gender={this.props.gender} job={this.props.job}/>
            </div>
        )
    }
}



class CustomerProfile extends React.Component{
    render(){
        return(
            <div>
                <img scr={this.props.image} alt="profile/"/>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
    
}

class CustomerInfo extends React.Component{
    render(){
        return(
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>

            </div>
        )
    }
}

export default Customer;


