import svgPaths from "./svg-ncqhulfg5k";
import imgImage from "figma:asset/22ccad80995f02e5d028a541ea1ac6fb38017b03.png";
import imgImage1 from "figma:asset/c4c532986744c4194ce99c6aceb7add2a530580a.png";

function Group() {
  return <div className="absolute contents left-0 top-[926px]" />;
}

function FinalLaMagdalena() {
  return (
    <div className="absolute h-[74.383px] left-[1752px] top-[966px] w-[74.029px]" data-name="FINAL LA MAGDALENA-11 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.0286 74.383">
        <g id="FINAL LA MAGDALENA-11 2">
          <path d={svgPaths.p1f810d80} fill="var(--fill-0, #F0DAB5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function FinalLaMagdalena1() {
  return (
    <div className="absolute h-[54px] left-[96px] top-[975px] w-[244px]" data-name="FINAL LA MAGDALENA-13 2">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 54">
        <g id="FINAL LA MAGDALENA-13 3">
          <path d={svgPaths.p368c9980} fill="var(--fill-0, #F0DAB5)" id="Vector" />
          <path d={svgPaths.p36c123f0} fill="var(--fill-0, #F0DAB5)" id="Vector_2" />
          <path d={svgPaths.pa5d600} fill="var(--fill-0, #F0DAB5)" id="Vector_3" />
          <path d={svgPaths.p2c87b900} fill="var(--fill-0, #F0DAB5)" id="Vector_4" />
          <path d={svgPaths.p28833df0} fill="var(--fill-0, #F0DAB5)" id="Vector_5" />
          <path d={svgPaths.p1318880} fill="var(--fill-0, #F0DAB5)" id="Vector_6" />
          <path d={svgPaths.p9910700} fill="var(--fill-0, #F0DAB5)" id="Vector_7" />
          <path d={svgPaths.p2ec12680} fill="var(--fill-0, #F0DAB5)" id="Vector_8" />
          <path d={svgPaths.pbd38900} fill="var(--fill-0, #F0DAB5)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.2] left-[960px] not-italic text-[#800000] text-[62.463px] text-center top-[67px] tracking-[-1.2493px] w-[1920px]">Proporciones</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.5] left-[32px] not-italic text-[#800000] text-[24px] top-0 tracking-[-0.36px] whitespace-nowrap">14</p>
      <Group />
      <div className="absolute bg-[#800000] h-[84px] left-0 top-[959px] w-[1920px]" />
      <div className="absolute h-[483px] left-[447.98px] top-[264px] w-[1529px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage} />
      </div>
      <div className="absolute h-[481px] left-[7.98px] top-[267px] w-[562px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgImage1} />
      </div>
      <FinalLaMagdalena />
      <FinalLaMagdalena1 />
    </div>
  );
}