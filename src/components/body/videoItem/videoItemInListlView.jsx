// import React from "react";
// import styles from "./videoItem.module.css";

// const VideoItemInListlView = (props) => {
//   return (
//     <li className={styles.searchedVideo} onClick={onVideoClick}>
//       {!isChannel ? (
//         <img
//           className={styles.searchedThumbnails}
//           src={thumbnails.medium.url}
//           alt="thumbnails"
//         ></img>
//       ) : (
//         <div className={styles.imageBox}>
//           <img
//             className={styles.channelProfile}
//             src={thumbnails.medium.url}
//             alt="channelProfile"
//           ></img>
//         </div>
//       )}

//       <div className={styles.videoInfo + " " + styles.videoInfoSearched}>
//         <h3 className={styles.searchedTitle}>{title}</h3>
//         {!isChannel ? (
//           <p className={styles.channelTitle}>{channelTitle}</p>
//         ) : (
//           ""
//         )}
//         {!isChannel ? (
//           <p className={styles.elapsedTime}>{getElapsedTime(publishedAt)}</p>
//         ) : (
//           ""
//         )}
//         <p className={styles.description}>{description}</p>
//         {isNewVideo ? (
//           <span className={styles.newVideoTag}>새 동영상</span>
//         ) : (
//           ""
//         )}
//       </div>
//       {isChannel ? <SubscribedButton /> : ""}
//     </li>
//   );
// };

// export default VideoItemInListlView;
