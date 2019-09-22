import React, {Component} from 'react';
import { Image, View } from 'react-native';

export default class Bananas extends Component{
    render(){
        let pic = {uri: (this.props.src ? this.props.src : "https://s3.dexerto.com/thumbnails/_thumbnailLarge/teemo-rework.jpg")}
        return(          
            <Image source = {pic} style = {{width: "50%", height: "20%", alignSelf: this.props.alignSelf ? this.props.alignSelf : "center"}}/>          
        );
    };    
}