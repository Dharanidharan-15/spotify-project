import React from 'react'
import Images from '../image/image';
import images from '../../assets/assetsExport';
import "./SuggestionComponent.scss"
import Button from '../button/button';

function Suggestion() {
  return (
    <div className='SuggestionComponent'>
        <Images src={images.player_song_cover} height="70px" />
        <Button icon={<i className="fa fa-circle-play" />}></Button>
    </div>
  )
}

export default Suggestion;