import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box, faces }) => {
    const Faces = faces.map((face, i) => {
        return <div key={i} className='bounding-box' style={{top: box[i].topRow, right: box[i].rightCol, bottom: box[i].bottomRow, left: box[i].leftCol }}></div>
    })

    return (
        <div className='center' >
            <div className='absolute mt2'>
                <img id='inputImage' src={imageUrl} alt='' width='500px' height='auto'></img>
                {Faces}
                {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div> */}
            </div>
        </div>
    )
}

export default FaceRecognition;