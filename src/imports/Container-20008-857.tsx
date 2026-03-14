import imgFinalLaMagdalena143 from "figma:asset/f3984f644189b9967c3ec575088cfa86cd209bb8.png";
import imgImageBeforeComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca from "figma:asset/acecbbe54b80d38dac4e701bf1cdb1bbbe14a5b8.png";

function MagdalenaProject() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[896px]" data-name="MagdalenaProject">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[447.5px] not-italic text-[#737373] text-[14px] text-center top-0 tracking-[1.4px] uppercase whitespace-nowrap">De Marca Anterior a Nueva Marca</p>
    </div>
  );
}

function MagdalenaProject1() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[28px] w-[896px]" data-name="MagdalenaProject">
      <p className="flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[16px] min-h-px min-w-px not-italic relative text-[#737373] text-[12px] text-center">Desliza la barra para ver la evolución del diseño</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[139px] top-0">
      <div className="absolute h-[469px] left-[139px] top-0 w-[565px]" data-name="FINAL LA MAGDALENA-14 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120.74%] left-[-0.02%] max-w-none top-0 w-[100.04%]" src={imgFinalLaMagdalena143} />
        </div>
      </div>
    </div>
  );
}

function ImageBeforeComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[892px]" data-name="Image (Before: Comparación La Magdalena: Marca Anterior vs Nueva Marca)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageBeforeComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca} />
    </div>
  );
}

function ImageAfterComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca() {
  return (
    <div className="absolute bg-[#800000] h-[500px] left-px overflow-clip top-px w-[892px]" data-name="Image (After: Comparación La Magdalena: Marca Anterior vs Nueva Marca)">
      <Group />
      <ImageBeforeComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-px size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M12.5 15L7.5 10L12.5 5" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[13px] size-[20px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #525252)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-white h-[40px] relative rounded-[33554400px] shrink-0 w-[34px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[33554400px] shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon />
        <Icon1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute bg-white content-stretch flex h-[500px] items-center justify-center left-[445px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.3)] top-px w-[4px]" data-name="Container">
      <Container2 />
    </div>
  );
}

function ImageComparisonSlider() {
  return (
    <div className="bg-[#f5f5f5] h-[502px] relative rounded-[16px] shrink-0 w-full" data-name="ImageComparisonSlider">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <ImageAfterComparacionLaMagdalenaMarcaAnteriorVsNuevaMarca />
        <Container1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function MagdalenaProject2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[504px] left-[35px] rounded-[16px] top-[115px] w-[896px]" data-name="MagdalenaProject">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <ImageComparisonSlider />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <MagdalenaProject />
      <MagdalenaProject1 />
      <MagdalenaProject2 />
    </div>
  );
}