import React, { Component } from 'react'

export default class GambarHeader extends Component {
    state={
        img: [
            "https://wallpapercave.com/wp/wp2951821.jpg",
            "https://wallpaperplay.com/walls/full/0/f/c/43784.jpg",
            "https://zainelhasany.com/wp-content/uploads/2014/08/Wallpaper-HD-terbaru.jpg",
            "https://2.bp.blogspot.com/-Hc25eCCJORA/XL1h7FvZKNI/AAAAAAAACKg/IW9VZjHgA74hsL3UUmb7pRlRFxqu6mopwCLcBGAs/s1600/iphone2.JPG",
            "https://assets.jalantikus.com/assets/cache/0/0/userfiles/2018/08/15/wallpaper-pubg-hd-man-2-cars-large-74839.jpg",
        ]
    }
    render() {

        let num=Math.floor(Math.random() * Math.floor(4));

        return (
            <div className="imgHeader">
                <img src={this.state.img[num]} alt="gambar headeer"   />
            </div>
        )
    }
}
