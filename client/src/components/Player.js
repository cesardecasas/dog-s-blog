import React from 'react';
import { Player } from 'video-react';
// import '~video-react/dist/video-react.css'


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Player>
      <source src={props.src} />
    </Player>
  );
};
