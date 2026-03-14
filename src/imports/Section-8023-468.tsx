import svgPaths from "./svg-8t678vruck";
import imgImage15 from "figma:asset/821ade01d40a5ec432f6c7047cd1edca4b73e8b0.png";
import imgFreeA4FloatingBrochureMockup51 from "figma:asset/574b334610897ee525c006629e880a01598b8f2b.png";
import imgMagazineMockup34 from "figma:asset/9795f157b1afead49bfc43e1a3d4ac5b8c3f0e23.png";
import imgMagazineMockup11 from "figma:asset/1bb08270f79de44ad86f8015e93992cc8651aaea.png";
import imgDisenoSinTitulo971 from "figma:asset/5692c252f795a88e0a5053cab6545b706a71d055.png";

function Div() {
  return <div className="absolute h-[2108.417px] left-0 opacity-80 top-0 w-[2188px]" data-name="div" />;
}

function Div1() {
  return <div className="absolute h-[2108.417px] left-0 opacity-20 top-0 w-[2188px]" data-name="div" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0) 0%)" }} />;
}

function MotionDiv() {
  return <div className="absolute left-[600px] size-[520px] top-0" data-name="motion.div" />;
}

function Span() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] border-[1.333px] border-[rgba(255,255,255,0.2)] border-solid h-[26.667px] left-0 rounded-[44739200px] top-0 w-[90.479px]" data-name="span">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[12px] not-italic text-[12px] text-[rgba(255,255,255,0.9)] top-[4px] tracking-[0.6px] uppercase whitespace-nowrap">Editorial</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="absolute h-[26.667px] left-0 top-0 w-[90.479px]" data-name="div">
      <Span />
    </div>
  );
}

function P() {
  return <div className="absolute h-[97.5px] left-0 top-[146.67px] w-[520px]" data-name="p" />;
}

function ExternalLink() {
  return (
    <div className="absolute left-[217.5px] size-[18px] top-[15px]" data-name="ExternalLink">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="ExternalLink">
          <path d="M11.25 2.25H15.75V6.75" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M7.5 10.5L15.75 2.25" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p7686680} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function A() {
  return (
    <div className="absolute bg-white h-[48px] left-0 rounded-[44739200px] top-[411.5px] w-[259.5px]" data-name="a">
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[24px] left-[24px] not-italic text-[16px] text-black top-[10.33px] whitespace-nowrap">{`Ver Periódico Interactivo `}</p>
      <ExternalLink />
    </div>
  );
}

function MotionDiv1() {
  return (
    <div className="absolute blur-[0px] h-[459.5px] left-0 top-[30.25px] w-[520px]" data-name="motion.div">
      <Div3 />
      <P />
      <A />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[520px] relative shrink-0 w-full" data-name="Container">
      <MotionDiv />
      <MotionDiv1 />
      <div className="absolute h-[83px] left-0 top-[75.67px] w-[292px]" data-name="image 15">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage15} />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[800px] left-0 top-[40px] w-[1120px]" data-name="Container">
      <div className="absolute flex h-[575.119px] items-center justify-center left-[41px] top-[-150.67px] w-[580.61px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "21" } as React.CSSProperties}>
        <div className="flex-none rotate-[4.67deg]">
          <div className="h-[533px] relative w-[539px]" data-name="Free_A4_Floating_Brochure_Mockup_5 1">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="" className="absolute h-[130.3%] left-[-37.85%] max-w-none top-[-14.82%] w-[171.8%]" src={imgFreeA4FloatingBrochureMockup51} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[272px] left-[447px] top-[234.33px] w-[522px]" data-name="Magazine_Mockup_3 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[149.84%] left-[-10.3%] max-w-none top-[-26.04%] w-[122.48%]" src={imgMagazineMockup34} />
        </div>
      </div>
      <div className="absolute h-[508px] left-[208px] top-[598.33px] w-[705px]" data-name="Magazine_Mockup_1 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[134.1%] left-[-20.76%] max-w-none top-[-17.63%] w-[141.68%]" src={imgMagazineMockup11} />
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[1251.083px] relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col h-[1316.417px] items-start pt-[65.333px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.333px] inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[80px] h-[1916.417px] items-start left-[454px] px-[80px] top-[96px] w-[1280px]" data-name="div">
      <Container />
      <Container1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="border-[#171717] border-solid border-t-[1.333px] relative size-full" data-name="section">
      <Div />
      <Div1 />
      <Div2 />
      <div className="absolute left-[1094px] size-[531.948px] top-[83.67px]" data-name="Diseño sin título (97) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDisenoSinTitulo971} />
      </div>
    </div>
  );
}