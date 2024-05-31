import React from "react";
import { useRef, useState } from "react";
function Video() {
  const ref = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);
  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setisPlaying(nextIsPlaying);
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
    console.log(isPlaying);
    console.log(ref.current);
  }
  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      <video
        width="1250px"
        ref={ref}
        onPlay={() => setisPlaying(true)}
        onPause={() => setisPlaying(false)}
        controls>
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default Video;

// import React, { useRef, useState } from "react";

// function Video() {
//   const ref = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   function handleClick() {
//     const nextIsPlaying = !isPlaying;
//     setIsPlaying(nextIsPlaying);
//     if (nextIsPlaying) {
//       ref.current.play();
//     } else {
//       ref.current.pause();
//     }
//   }

//   return (
//     <>
//       <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
//       <video
//         width="250px"
//         ref={ref}
//         onPlay={() => setIsPlaying(true)}
//         onPause={() => setIsPlaying(false)}
//         controls>
//         <source src="./video/college.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </>
//   );
// }

// export default Video;
