import myVideo from '../../assets/disruptive_homepage_video (1080p).mp4'; // Apne sahi path ke mutabik check kar lena

export default function Video() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}