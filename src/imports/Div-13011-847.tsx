function Span() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[111.997px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[-1.11px] tracking-[1.2px] uppercase whitespace-nowrap">Rol</p>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] h-[61.944px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[-0.33px] not-italic text-[14px] text-white top-[20.93px] w-[68px]">Editorial Designer</p>
      </div>
    </div>
  );
}

function Span1() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[112.014px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[-23.33px] not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[-1.11px] tracking-[1.2px] uppercase whitespace-nowrap">Software</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="flex-[1_0_0] h-[61.944px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span1 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[-23.33px] not-italic text-[14px] text-white top-[20.98px] whitespace-nowrap">InDesign, Figma</p>
      </div>
    </div>
  );
}

function Span2() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[111.997px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[-1.11px] tracking-[1.2px] uppercase whitespace-nowrap">Tipo</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[61.944px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span2 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[20.98px] whitespace-nowrap">Periódico</p>
      </div>
    </div>
  );
}

function Span3() {
  return (
    <div className="absolute h-[15.99px] left-0 top-0 w-[112.014px]" data-name="span">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.4)] top-[-1.11px] tracking-[1.2px] uppercase whitespace-nowrap">Año</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[61.944px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Span3 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[20.98px] whitespace-nowrap">2024</p>
      </div>
    </div>
  );
}

export default function Div() {
  return (
    <div className="content-stretch flex items-start justify-between pt-[33.108px] relative size-full" data-name="div">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t-[1.111px] inset-0 pointer-events-none" />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
    </div>
  );
}