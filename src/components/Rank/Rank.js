import React from 'react';

const Rank = ({name, entries}) => {
    return (
        <div>
            <div className='white f3'>{`${name}, the number of images you submitted are...`}</div>
            <div className='white f1'>{`${entries}`}</div>
        </div>
    )
}

export default Rank;
