import React from 'react';

import useGif from '../useGif';

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className='container'>
      <h1>Random GIF</h1>
      <img width='500' src={gif} alt='Random GIF' />
      <button onClick={fetchGif}>CLICK FOR NEW</button>
    </div>
  );
};

export default Random;
