import imgMotionImg from "figma:asset/27c3d71bcbdcbcb689dd1f2321f7f55851f608d2.png";
import imgMagazineMockup71 from "figma:asset/96915ea7cfcda1a7d074fa5d23924f6c46b06eb1.png";
import imgMagazineMockup61 from "figma:asset/011442e0a1c8c7708153feeeb61284f94fbf8bf7.png";

function Container1() {
  return <div className="absolute h-[459.797px] left-0 top-[40px] w-[1120px]" data-name="Container" />;
}

function MotionImg() {
  return (
    <div className="absolute h-[769px] left-[-96.5px] top-[-138.8px] w-[1075px]" data-name="motion.img">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgMotionImg} />
    </div>
  );
}

function MotionDiv() {
  return (
    <div className="absolute h-[630px] left-[119.5px] top-[603.8px] w-[881px]" data-name="motion.div">
      <MotionImg />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <Container1 />
      <MotionDiv />
      <div className="absolute h-[433px] left-[-44px] top-0 w-[681px]" data-name="Magazine_Mockup_7 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMagazineMockup71} />
      </div>
      <div className="absolute h-[538px] left-[460px] top-[24px] w-[739px]" data-name="Magazine_Mockup_6 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMagazineMockup61} />
      </div>
    </div>
  );
}