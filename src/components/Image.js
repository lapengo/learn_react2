import React from "react";
import gambardirku from '../IMG_9146.JPG';

const Image = (props) => {
  // console.log(props)

  if(props.login===false){
    props.history.push('/')
  }

  return (
    <div className="col">
      <h1>Image</h1>
      <img src={gambardirku} alt="Gambarku" width="20%" />
      <p>
        Quis ex deserunt nulla quis ipsum Lorem elit magna eiusmod. Proident
        nisi sunt quis ex Lorem est aliquip cupidatat elit quis aute proident
        anim. Veniam fugiat occaecat aute ex dolore adipisicing. Officia id
        aliquip eu id ut fugiat eu cillum. Velit incididunt amet velit magna
        aliqua eu dolor velit culpa fugiat ut ullamco occaecat. Laboris occaecat
        incididunt occaecat incididunt irure do sint sunt duis ea minim. Mollit
        et voluptate aliqua aliquip. Elit pariatur nisi veniam eu aliqua eu est
        eu proident duis ea. Elit magna eu laboris velit culpa irure aliqua
        mollit ut commodo.
      </p>
    </div>
  );
};

export default Image;
