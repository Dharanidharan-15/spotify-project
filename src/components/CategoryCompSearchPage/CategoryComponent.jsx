import React from 'react';
import "./CategoryComponent.scss";
import Images from '../image/image';
// import images from '../../assets/assetsExport';

function CategoryComponent(props) {
  const Colors = ['violet','blue','orange','crimson','green','brown','lightblue'];
  const getRandomColor = () => {
    return Colors[Math.floor(Math.random() * Colors.length)];
  }
  return (
    <div className='CategoryComponent' style={{background:getRandomColor()} || {background : props.props.color}}>
        <h2>{props.props.Title}</h2>
        <Images src={props.props.image} className="categoryComponentImage" height="100px" width="100px"/>
    </div>
  )
}

export default CategoryComponent;