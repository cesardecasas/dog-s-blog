import React from 'react';
import { Player } from 'video-react';


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Player>
      <source src={props.src} />
    </Player>
  );
};
