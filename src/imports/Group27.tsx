import imgLaMagdalenaMoodbooard1 from "figma:asset/7e9203296da7058bcbd82497ee3cb42585db71d3.png";
import imgLaMagdalenaMoodbooard2 from "figma:asset/90036d3362be14dd5227173a95bc4322e48bdd8e.png";

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[924px] left-0 top-0 w-[1155px]" data-name="La magdalena moodbooard (1)">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLaMagdalenaMoodbooard1} />
      </div>
      <div className="absolute h-[924px] left-[1178px] top-0 w-[1155px]" data-name="La magdalena moodbooard (2)">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLaMagdalenaMoodbooard2} />
      </div>
    </div>
  );
}