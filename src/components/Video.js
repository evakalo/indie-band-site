import videoStyles from "../styles/Video.module.css";

const Video = () => {
  return (
    <div className={videoStyles.videoResponsive}>
      {
        <iframe
          width="760"
          height="515"
          src="https://www.youtube.com/embed/smBlZhumywE?si=dKgu_DrA0LLwSST2"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      }
    </div>
  );
};
export default Video;
