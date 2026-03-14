import svgPaths from "./svg-m1jkl5vrv1";
import imgImage1 from "figma:asset/291689ced9cdecae8868a85f335893b0e806a0d8.png";

function Group() {
  return <div className="absolute contents left-[18px] top-[926px]" />;
}

function FinalLaMagdalena() {
  return (
    <div className="absolute h-[74.383px] left-[1770px] top-[966px] w-[74.029px]" data-name="FINAL LA MAGDALENA-11 2">
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
    <div className="absolute h-[54px] left-[114px] top-[975px] w-[244px]" data-name="FINAL LA MAGDALENA-13 3">
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

function Frame() {
  return (
    <div className="absolute bg-[#800000] h-[1043px] left-0 top-0 w-[1983px]">
      <div className="absolute h-[949.5px] left-0 top-[12.5px] w-[1983px]">
        <div className="absolute inset-[-0.63%_0_-0.62%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1984.1 961.399">
            <path d={svgPaths.p23f07600} id="Vector 3553" stroke="var(--stroke-0, #F0DAB5)" strokeDasharray="20 24" strokeWidth="12" />
          </svg>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.2] left-[978px] not-italic text-[#f0dab5] text-[62.463px] text-center top-[61px] tracking-[-1.2493px] w-[1920px]">Origen</p>
      <p className="absolute font-['Varela_Round:Regular',sans-serif] leading-[1.25] left-[794px] not-italic text-[#800000] text-[48px] top-[779px] tracking-[-0.72px] whitespace-nowrap">Troncal del Caribe</p>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.5] left-[50px] not-italic text-[#f0dab5] text-[24px] top-[25px] tracking-[-0.36px] whitespace-nowrap">04</p>
      <div className="absolute h-[433px] left-[613px] pointer-events-none rounded-[56.824px] top-[258px] w-[672.991px]" data-name="image 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[56.824px] size-full" src={imgImage1} />
        <div aria-hidden="true" className="absolute border-8 border-[#f0dab5] border-solid inset-0 rounded-[56.824px]" />
      </div>
      <Group />
      <div className="absolute bg-[#800000] h-[84px] left-[18px] top-[959px] w-[1920px]" />
      <FinalLaMagdalena />
      <FinalLaMagdalena1 />
    </div>
  );
}

export default function Group1() {
  return (
    <div className="relative size-full">
      <Frame />
    </div>
  );
}