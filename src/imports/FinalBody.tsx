import svgPaths from "./svg-95gpheffje";
import imgCtas from "figma:asset/9de1620e73066a66f409f0dbbd00bd7c517c14e9.png";

function HeaderLogo() {
  return (
    <div className="h-[46px] relative shrink-0 w-[194px]" data-name="header__logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194 46">
        <g clipPath="url(#clip0_51_12989)" id="header__logo">
          <path d={svgPaths.p2bbb8e00} fill="var(--fill-0, #08602A)" id="Vector" />
          <path d={svgPaths.p192dab00} fill="var(--fill-0, #08602A)" id="Vector_2" />
          <path d={svgPaths.p129b5180} fill="var(--fill-0, #08602A)" id="Vector_3" />
          <path d={svgPaths.pad0da00} fill="var(--fill-0, #08602A)" id="Vector_4" />
          <path d={svgPaths.p3c9ce100} fill="var(--fill-0, #08602A)" id="Vector_5" />
          <path d={svgPaths.p3ad9f500} fill="var(--fill-0, #08602A)" id="Vector_6" />
          <path d={svgPaths.p21859100} fill="var(--fill-0, #08602A)" id="Vector_7" />
          <path d={svgPaths.p408500} fill="var(--fill-0, #08602A)" id="Vector_8" />
          <path d={svgPaths.p164d3900} id="Vector_9" stroke="var(--stroke-0, #08602A)" strokeMiterlimit="10" strokeWidth="11" />
          <path d={svgPaths.pe168000} fill="var(--fill-0, #08602A)" id="Vector_10" />
        </g>
        <defs>
          <clipPath id="clip0_51_12989">
            <rect fill="white" height="46" width="194" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#08602a] text-[18px] tracking-[1px] whitespace-nowrap">Explorar</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#08602a] text-[18px] tracking-[1px] whitespace-nowrap">Calendario</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <p className="font-['Nunito:SemiBold',sans-serif] font-semibold leading-[30px] relative shrink-0 text-[#08602a] text-[18px] tracking-[1px] whitespace-nowrap">Directorio</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[89px]">
      <div aria-hidden="true" className="absolute border-[#d97706] border-b-2 border-solid inset-0 pointer-events-none" />
      <Frame11 />
    </div>
  );
}

function Nav() {
  return (
    <nav className="content-stretch flex gap-[26px] items-center relative shrink-0 w-[376px]" data-name="Nav">
      <Frame12 />
      <Frame13 />
      <Frame69 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Magnifier / 24 / Outline">
        <div className="absolute inset-[8.25%_8.37%_8.43%_8.25%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6766 16.6639">
            <path d={svgPaths.p31e78b20} fill="var(--fill-0, #08602A)" id="Vector" />
          </svg>
        </div>
      </div>
    </nav>
  );
}

function VuesaxLinearProfileCircle() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/profile-circle">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="profile-circle">
          <path d={svgPaths.p24eea380} id="Vector" stroke="var(--stroke-0, #08602A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p1875f400} id="Vector_2" stroke="var(--stroke-0, #08602A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <path d={svgPaths.p1f337080} id="Vector_3" stroke="var(--stroke-0, #08602A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
          <g id="Vector_4" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function HeaderButtons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-[275px]" data-name="header__buttons">
      <div className="relative shrink-0 size-[48px]" data-name="profile-circle">
        <VuesaxLinearProfileCircle />
      </div>
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-white whitespace-nowrap">¡Publica hoy!</p>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="content-stretch flex items-center relative shrink-0" data-name="Breadcrumb">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link 1">
          <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#333652] text-[14px] tracking-[0.75px] whitespace-nowrap">Inicio</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Angle Right/ 24 / Solid">
          <div className="absolute inset-[28.33%_37.08%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.2 10.4">
              <path d={svgPaths.p241a5100} fill="var(--fill-0, #A4A7C6)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link 2">
          <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#4a5565] text-[14px] whitespace-nowrap">Directorio</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Angle Right/ 24 / Solid">
          <div className="absolute inset-[28.33%_37.08%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.2 10.4">
              <path d={svgPaths.p241a5100} fill="var(--fill-0, #A4A7C6)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Link 3">
          <p className="font-['Nunito:Medium',sans-serif] font-medium leading-[24px] relative shrink-0 text-[#08602a] text-[14px] tracking-[0.75px] whitespace-nowrap">Gestor Culturales</p>
        </div>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center justify-center leading-[0] relative shrink-0 w-full">
      <div className="flex flex-col font-['Nunito:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center relative shrink-0 text-[#d97706] text-[64px] tracking-[-2px] w-full">
        <p className="leading-[80px]">Directorio cultural</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#333652] text-[16px] w-full">
        <p className="leading-[22px]">Conoce a los gestores, entidades y lugares que hacen posible la escena cultural de Barranquilla.</p>
      </div>
    </div>
  );
}

function VuesaxBoldPersonalcard() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/personalcard">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="personalcard">
          <path d={svgPaths.p1b6bd3f0} fill="var(--fill-0, white)" id="Vector" />
          <g id="Vector_2" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function VuesaxBoldPeople() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/people">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="people">
          <path d="M20 0H0V20H20V0Z" fill="var(--fill-0, #B85900)" id="Vector" opacity="0" />
          <path d={svgPaths.p8a82680} fill="var(--fill-0, #B85900)" id="Vector_2" />
          <path d={svgPaths.p39928880} fill="var(--fill-0, #B85900)" id="Vector_3" />
          <path d={svgPaths.p6b10a00} fill="var(--fill-0, #B85900)" id="Vector_4" />
          <path d={svgPaths.pbd59380} fill="var(--fill-0, #B85900)" id="Vector_5" />
          <path d={svgPaths.p1e3ca570} fill="var(--fill-0, #B85900)" id="Vector_6" />
          <path d={svgPaths.p38106880} fill="var(--fill-0, #B85900)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-start justify-end py-[10px] relative shrink-0 w-full">
      <div className="bg-[#b85900] content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="header__button--secondary">
        <div className="relative shrink-0 size-[20px]" data-name="Property 1=bold">
          <VuesaxBoldPersonalcard />
        </div>
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-white whitespace-nowrap">Gestores culturales</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="header__button--secondary">
        <div aria-hidden="true" className="absolute border border-[#d97706] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="relative shrink-0 size-[20px]" data-name="Property 1=bold">
          <VuesaxBoldPeople />
        </div>
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#b85900] text-[14px] whitespace-nowrap">Entidades culturales</p>
      </div>
      <div className="bg-white content-stretch flex gap-[8px] items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="header__button--secondary">
        <div aria-hidden="true" className="absolute border border-[#d97706] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="House User/ 24 / Solid">
          <div className="absolute inset-[8.65%_8.33%_8.33%_8.52%]" data-name="Vector">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6289 16.6042">
              <path d={svgPaths.p30f9fd80} fill="var(--fill-0, #B85900)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#b85900] text-[14px] whitespace-nowrap">Lugares Culturales</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame9 />
      <Frame15 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#333652] text-[12px]">
            <p className="leading-[20px]">Buscar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#656b9f] text-[12px] whitespace-nowrap">Buscar gestor..</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#f2f3f7] h-[56px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Magnifier / 24 / Outline">
            <div className="absolute inset-[8.25%_8.37%_8.43%_8.25%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6766 16.6639">
                <path d={svgPaths.p31e78b20} fill="var(--fill-0, #08602A)" id="Vector" />
              </svg>
            </div>
          </div>
          <Frame4 />
        </div>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Dropdown">
      <Frame5 />
    </div>
  );
}

function Categorias() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[273px]" data-name="categorias">
      <Frame41 />
      <Dropdown />
    </div>
  );
}

function Frame42() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] relative w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Nunito:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#333652] text-[12px]">
            <p className="leading-[20px]">Categorías</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#656b9f] text-[12px] whitespace-nowrap">Elige una categoría</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-[#f2f3f7] h-[56px] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[16px] relative size-full">
          <Frame7 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="down arrow / 24 / Outline">
            <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5416 6.24659">
                <path d={svgPaths.p3c3ab600} fill="var(--fill-0, #656B9F)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Dropdown">
      <Frame6 />
    </div>
  );
}

function Categorias1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[186px]" data-name="Categorías">
      <Frame42 />
      <Dropdown1 />
    </div>
  );
}

function Publico() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[29px] relative shrink-0" data-name="Público">
      <button className="bg-[#08602a] content-stretch cursor-pointer flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[14px] text-left text-white whitespace-nowrap">Buscar</p>
      </button>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Container">
      <div className="content-start flex flex-wrap gap-[0px_15px] items-start relative shrink-0" data-name="filtros directorio">
        <Categorias />
        <Categorias1 />
        <Publico />
      </div>
    </div>
  );
}

function CuteFace1() {
  return (
    <div className="absolute inset-[0_0.22%_0.04%_-4.78%]" data-name="Cute_Face_3_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6147 95.4603">
        <g id="Cute_Face_3_">
          <path d={svgPaths.p34ab05f0} fill="var(--fill-0, #F7D3B5)" id="Vector" />
          <path d={svgPaths.p2c955180} fill="var(--fill-0, #F7D3B5)" id="Vector_2" />
          <path d={svgPaths.p2c472340} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p3ac66880} fill="var(--fill-0, #F7D3B5)" id="Vector_4" />
          <path d={svgPaths.p16542f80} fill="var(--fill-0, #F7D3B5)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pdfac300} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p436a400} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2762cc00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p12602d00} fill="var(--fill-0, #ED938A)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.p1ff90200} fill="var(--fill-0, #ED938A)" id="Vector_8" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <CuteFace1 />
    </div>
  );
}

function Outfit6() {
  return (
    <div className="absolute inset-[6.32%_12.57%_20.55%_0.26%]" data-name="outfit_15_1_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99.3524 54.6107">
        <g id="outfit_15_1_">
          <path d={svgPaths.p10da2b00} fill="var(--fill-0, #444444)" id="Vector" />
          <path d={svgPaths.p2bacaa80} fill="var(--fill-0, #444444)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.pd156d40} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p1adf69f2} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Outfit() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <Outfit6 />
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6547 16.8993">
        <g id="Eyes">
          <path clipRule="evenodd" d={svgPaths.p11cd1500} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p27bb5940} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p2adb5a00} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.pfb6fd00} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p2fc78900} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p3ada57c0} fill="var(--fill-0, #423232)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mouth() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[0_-11.63%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.1616 6.28813">
          <g id="Mouth">
            <path clipRule="evenodd" d={svgPaths.p2a050870} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Hate (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-16.08%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 82.118">
          <g id="Hair">
            <path d={svgPaths.p35e21d00} fill="var(--fill-0, #423232)" id="style_22" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Moustache() {
  return (
    <div className="absolute bottom-[51.22%] left-[44.51%] right-[13.21%] top-1/4" data-name="Moustache_1_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2672 8.22346">
        <g id="Moustache_1_">
          <path d={svgPaths.p3202ba80} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p9443700} fill="var(--fill-0, #423232)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Accessories() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <Moustache />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face />
      <Outfit />
      <Eyes />
      <Mouth />
      <Hair />
      <Accessories />
    </div>
  );
}

function PrimaryTag() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[20px]">{`Teatro `}</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag />
    </div>
  );
}

function PrimaryTag1() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Corporación Artística Baúl Polisémico</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame29 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">Eduardo Lora</p>
      <PrimaryTag1 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame21 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame27 />
      <Frame24 />
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#b5e2dc] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Ronan Whitaker">
          <MaskGroup />
        </div>
      </div>
      <Frame28 />
    </div>
  );
}

function CardDirectorioGestor() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function CuteFace() {
  return (
    <div className="absolute inset-[0_0_0.04%_-4.57%]" data-name="Cute_Face_2_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6148 95.4603">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p3b40600} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p2c955180} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p2c472340} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p3ac66880} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p16542f80} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p51d3e40} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p436a400} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p3d40af80} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p12602d00} fill="var(--fill-0, #F2A5B2)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.pfc15a00} fill="var(--fill-0, #F2A5B2)" id="Vector_8" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face1() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <CuteFace />
    </div>
  );
}

function Outfit1() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.972 74.6715">
        <g id="Outfit">
          <path d={svgPaths.p33edc380} fill="var(--fill-0, #BEE3EB)" id="Vector" />
          <path d={svgPaths.p25cbec80} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3e4b7cc0} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p3f24a830} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Eyes1() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6547 16.8993">
        <g id="Eyes">
          <path d={svgPaths.p10739880} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p325ba780} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p6d1a880} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p19ab0700} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.pdebc000} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p3936cc00} fill="var(--fill-0, #423232)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mouth1() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[0_-4.72%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3467 6.28813">
          <g id="Mouth">
            <path clipRule="evenodd" d={svgPaths.p22565240} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair1() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-7.36%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 75.946">
          <g id="Hair">
            <path d={svgPaths.p34be2d00} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p13c0d080} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p1fc35980} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories1() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <div className="absolute inset-[-36.44%_-2.32%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.3003 47.1869">
          <g id="Accessories">
            <path d={svgPaths.p20656300} fill="var(--fill-0, #B7AEA9)" id="Vector" opacity="0.6" />
            <path d={svgPaths.p8fa4e00} fill="var(--fill-0, #B7AEA9)" id="Vector_2" opacity="0.6" />
            <path d={svgPaths.p3599ee00} fill="var(--fill-0, #B7AEA9)" id="Vector_3" opacity="0.6" />
            <path d={svgPaths.p27ace480} fill="var(--fill-0, #DBC3ED)" id="Vector_4" opacity="0.29" />
            <path d={svgPaths.p1c80b100} fill="var(--fill-0, #C4ADD8)" id="Vector_5" opacity="0.23" />
            <path d={svgPaths.p13638b00} fill="var(--fill-0, #DBC3ED)" id="Vector_6" opacity="0.29" />
            <path d={svgPaths.p261ade00} fill="var(--fill-0, #C4ADD8)" id="Vector_7" opacity="0.23" />
            <path clipRule="evenodd" d={svgPaths.p180e41f0} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p1ffdbcf0} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p29cb6bb0} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup1() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face1 />
      <Outfit1 />
      <Eyes1 />
      <Mouth1 />
      <Hair1 />
      <Accessories1 />
    </div>
  );
}

function PrimaryTag2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[20px]">Rutas y Recorridos</p>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag2 />
    </div>
  );
}

function PrimaryTag3() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Fundación Caribe Cultural</p>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame35 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">Ana Díaz</p>
      <PrimaryTag3 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame34 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame33 />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame32 />
      <Frame36 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#f4da92] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Zara Delgado">
          <MaskGroup1 />
        </div>
      </div>
      <Frame31 />
    </div>
  );
}

function CardDirectorioGestor1() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame30 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function CuteFace2() {
  return (
    <div className="absolute inset-[0_0.22%_0.04%_-4.78%]" data-name="Cute_Face_3_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6147 95.4603">
        <g id="Cute_Face_3_">
          <path d={svgPaths.pb198380} fill="var(--fill-0, #F7D3B5)" id="Vector" />
          <path d={svgPaths.p3d75e400} fill="var(--fill-0, #F7D3B5)" id="Vector_2" />
          <path d={svgPaths.p3ee54b80} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p16b6e500} fill="var(--fill-0, #F7D3B5)" id="Vector_4" />
          <path d={svgPaths.p16542f80} fill="var(--fill-0, #F7D3B5)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p2c633700} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p13389c00} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.pd923c0} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p12602d00} fill="var(--fill-0, #ED938A)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.p1ff90200} fill="var(--fill-0, #ED938A)" id="Vector_8" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face2() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <CuteFace2 />
    </div>
  );
}

function Outfit2() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <div className="absolute inset-[-2.85%_0_0_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 115.7 76.8023">
          <g id="Outfit">
            <path d={svgPaths.p3bfafd00} fill="var(--fill-0, #6060D8)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.p3d67e600} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p2fa3f600} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p202cfe80} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_3" />
            <path clipRule="evenodd" d={svgPaths.p3c4c6400} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_4" />
            <path clipRule="evenodd" d={svgPaths.p1931f80} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_5" />
            <path d={svgPaths.p24149480} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p1e564b40} fill="var(--fill-0, white)" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p393d7180} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_6" />
            <path clipRule="evenodd" d={svgPaths.p1a324200} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_7" />
            <path clipRule="evenodd" d={svgPaths.p2704fa00} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes2() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6547 16.8994">
        <g id="Eyes">
          <path d={svgPaths.p70dee00} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p361f7d80} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p1fec9100} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p36717ff0} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p44bc100} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p3936cc00} fill="var(--fill-0, #423232)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mouth2() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[-16%_-1.46%_-7.27%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9629 7.75154">
          <g id="Mouth">
            <path d={svgPaths.p1690f800} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p2b316800} fill="var(--fill-0, #FE9DAB)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.pd404000} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.pf4b2770} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair2() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-11.85%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 79.1267">
          <g id="Hair">
            <path d={svgPaths.pff8ed00} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p3989f480} fill="var(--fill-0, #423232)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories2() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <div className="absolute inset-[0_0_-125%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.0211 77.815">
          <g id="Accessories">
            <path d={svgPaths.p1ec97300} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p10bed200} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
            <path d={svgPaths.p140b8c80} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.pffed500} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup2() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face2 />
      <Outfit2 />
      <Eyes2 />
      <Mouth2 />
      <Hair2 />
      <Accessories2 />
    </div>
  );
}

function PrimaryTag4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p>
          <span className="font-['Nunito:Medium',sans-serif] font-medium leading-[20px]">Exposiciones</span>
          <span className="leading-[20px]">{` `}</span>
        </p>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag4 />
    </div>
  );
}

function PrimaryTag5() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Fundación El Guayacán</p>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame44 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">Luis Alberto Mencía</p>
      <PrimaryTag5 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame43 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame40 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame39 />
      <Frame45 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#b5e2dc] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Atlas Brooks">
          <MaskGroup2 />
        </div>
      </div>
      <Frame38 />
    </div>
  );
}

function CardDirectorioGestor2() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame37 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function BeardFace() {
  return (
    <div className="absolute inset-[0_0.33%_0.04%_-4.89%]" data-name="Beard_Face_1_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6148 95.4603">
        <g id="Beard_Face_1_">
          <path d={svgPaths.pf4c0200} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p1a3aab00} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p1c70f500} fill="var(--fill-0, #EFBD9C)" id="Vector_3" />
          <path d={svgPaths.p24be3c80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p2cd2f000} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p30afef00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p1e94e500} fill="var(--fill-0, #EFBD9C)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p38005880} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p103ca100} fill="var(--fill-0, #423232)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Face3() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <BeardFace />
    </div>
  );
}

function Outfit3() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.972 74.6715">
        <g id="Outfit">
          <path d={svgPaths.p10237e00} fill="var(--fill-0, #FFDE55)" id="Vector" />
          <path d={svgPaths.p1dd53f0} fill="var(--fill-0, #423232)" id="Vector_2" />
          <g id="Vector (Stroke)" />
          <path d={svgPaths.p36c61e80} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p19457800} fill="var(--fill-0, #423232)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p214b5070} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path clipRule="evenodd" d={svgPaths.p37003cf0} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_3" />
        </g>
      </svg>
    </div>
  );
}

function Eyes3() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6547 16.8993">
        <g id="Eyes">
          <path d={svgPaths.p19478ff2} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p35335a80} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path d={svgPaths.p365a9680} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p1006a600} fill="var(--fill-0, #423232)" id="Vector_4" />
          <path clipRule="evenodd" d={svgPaths.p2dac7800} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p230aff40} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Mouth3() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[-16%_-1.46%_-7.27%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9629 7.75154">
          <g id="Mouth">
            <path d={svgPaths.p1690f800} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p24c6cc00} fill="var(--fill-0, #FE9DAB)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p353cc900} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p3e958b00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair3() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-16.08%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 82.118">
          <g id="Hair">
            <path d={svgPaths.p2f04dc00} fill="var(--fill-0, #423232)" id="style_22" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories3() {
  return <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories" />;
}

function MaskGroup3() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face3 />
      <Outfit3 />
      <Eyes3 />
      <Mouth3 />
      <Hair3 />
      <Accessories3 />
    </div>
  );
}

function PrimaryTag6() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[20px]">Danza</p>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag6 />
    </div>
  );
}

function PrimaryTag7() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Fundación Puertas del Río</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame51 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">Carlos Medina</p>
      <PrimaryTag7 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame50 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame49 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame48 />
      <Frame52 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#f7c0b5] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Eamon Mercer">
          <MaskGroup3 />
        </div>
      </div>
      <Frame47 />
    </div>
  );
}

function CardDirectorioGestor3() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame46 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function BlackFace() {
  return (
    <div className="absolute inset-[0_0.11%_0.04%_-4.67%]" data-name="Black_Face_3_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6148 95.4603">
        <g id="Black_Face_3_">
          <path d={svgPaths.p337f6500} fill="var(--fill-0, #AD827B)" id="Vector" />
          <path d={svgPaths.p355be300} fill="var(--fill-0, #AD827B)" id="Vector_2" />
          <path d={svgPaths.p2c472340} fill="var(--fill-0, #8E5650)" id="Vector_3" />
          <path d={svgPaths.p24be3c80} fill="var(--fill-0, #AD827B)" id="Vector_4" />
          <path d={svgPaths.p2cd2f000} fill="var(--fill-0, #AD827B)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.pdfac300} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p26c87ff0} fill="var(--fill-0, #8E605C)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2762cc00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Face4() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <BlackFace />
    </div>
  );
}

function Outfit4() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.972 74.6715">
        <g id="Outfit">
          <g id="outfit_6">
            <g id="Group">
              <path d={svgPaths.p293e5c80} fill="var(--fill-0, #544D4D)" id="Vector" />
              <path clipRule="evenodd" d={svgPaths.p292d0880} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
              <path clipRule="evenodd" d={svgPaths.p2d033da0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)_2" />
            </g>
            <path d={svgPaths.p2dc89f80} fill="var(--fill-0, white)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p2fcb0880} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_3" />
            <path d={svgPaths.p23a96c80} fill="var(--fill-0, white)" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p2918cb00} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_4" />
            <path clipRule="evenodd" d={svgPaths.p3b34bc00} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_5" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p251f2b80} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_6" />
          <path clipRule="evenodd" d={svgPaths.p196b6f80} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_7" />
          <path clipRule="evenodd" d={svgPaths.p20f5d300} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_8" />
          <path clipRule="evenodd" d={svgPaths.p198cae00} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_9" />
          <path clipRule="evenodd" d={svgPaths.pc1d2700} fill="var(--fill-0, #CCCCCC)" fillRule="evenodd" id="Vector (Stroke)_10" />
        </g>
      </svg>
    </div>
  );
}

function Eyes4() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6547 16.8993">
        <g id="Eyes">
          <path d={svgPaths.pd0e5c00} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p381e6f00} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p35710200} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p2f5d8280} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Mouth4() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[-16%_-1.46%_-7.27%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9629 7.75154">
          <g id="Mouth">
            <path d={svgPaths.p1690f800} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p24c6cc00} fill="var(--fill-0, #FE9DAB)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p353cc900} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p3e958b00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair4() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-8.58%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 76.8139">
          <g id="Hair">
            <path d={svgPaths.p23c29900} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p2684e180} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
            <path d={svgPaths.p9b01c80} fill="var(--fill-0, #423232)" id="Vector_3" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories4() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <div className="absolute inset-[0_0_-125%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.0211 77.8149">
          <g id="Accessories">
            <path d={svgPaths.p3bc5eb00} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p382fab00} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
            <path d={svgPaths.p13d3dcc0} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.p459e000} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function MaskGroup4() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face4 />
      <Outfit4 />
      <Eyes4 />
      <Mouth4 />
      <Hair4 />
      <Accessories4 />
    </div>
  );
}

function PrimaryTag8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[20px] whitespace-pre">{`Ferias  y Festivales`}</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag8 />
    </div>
  );
}

function PrimaryTag9() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Colectivo Línea Abierta</p>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame58 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">Daniela Hoyos</p>
      <PrimaryTag9 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame57 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame56 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame55 />
      <Frame59 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#b5e2dc] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Everly Harper">
          <MaskGroup4 />
        </div>
      </div>
      <Frame54 />
    </div>
  );
}

function CardDirectorioGestor4() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame53 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function CuteFace3() {
  return (
    <div className="absolute inset-[0_0_0.04%_-4.57%]" data-name="Cute_Face_2_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75.6148 95.4603">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p2f1081c0} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p29626280} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p3bc0bfa0} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p22091d00} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p2cd2f000} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p1ef13470} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p377e3d80} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2a6b2080} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p12602d00} fill="var(--fill-0, #F2A5B2)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.p6a16080} fill="var(--fill-0, #F2A5B2)" id="Vector_8" opacity="0.42" />
        </g>
      </svg>
    </div>
  );
}

function Face5() {
  return (
    <div className="absolute inset-[19.47%_21.87%_-0.47%_16.8%]" data-name="Face">
      <CuteFace3 />
    </div>
  );
}

function Outfit5() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <div className="absolute inset-[-0.61%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113.972 75.1257">
          <g id="Outfit">
            <path d={svgPaths.p2e7d1300} fill="var(--fill-0, #48D89E)" id="Vector" />
            <g id="Mask Group">
              <mask height="56" id="mask0_51_13022" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="98" x="2" y="0">
                <path d={svgPaths.p2e7d1300} fill="var(--fill-0, #48D89E)" id="Vector_2" />
              </mask>
              <g mask="url(#mask0_51_13022)">
                <g id="Group">
                  <path d={svgPaths.p1226a700} fill="var(--fill-0, #FCED7E)" id="Vector_3" />
                  <path d={svgPaths.pe607aa0} fill="var(--fill-0, #FCED7E)" id="Vector_4" />
                  <path d={svgPaths.p35196a00} fill="var(--fill-0, #FCED7E)" id="Vector_5" />
                  <path d={svgPaths.p3f2df180} fill="var(--fill-0, #FCED7E)" id="Vector_6" />
                  <path d={svgPaths.p2c943600} fill="var(--fill-0, #FCED7E)" id="Vector_7" />
                  <path d={svgPaths.p14251280} fill="var(--fill-0, #FCED7E)" id="Vector_8" />
                  <path d={svgPaths.p2342080} fill="var(--fill-0, #FCED7E)" id="Vector_9" />
                </g>
              </g>
            </g>
            <path clipRule="evenodd" d={svgPaths.p330f6800} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p3ce6a840} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p16c00100} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_3" />
            <path clipRule="evenodd" d={svgPaths.pad46f00} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_4" />
            <path clipRule="evenodd" d={svgPaths.p11ee8180} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_5" />
            <path clipRule="evenodd" d={svgPaths.p2f893000} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_6" />
            <path clipRule="evenodd" d={svgPaths.pced6500} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_7" />
            <path clipRule="evenodd" d={svgPaths.p1efe7d80} fill="var(--fill-0, #329369)" fillRule="evenodd" id="Vector (Stroke)_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes5() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30.6546 16.8994">
        <g id="Eyes">
          <path d={svgPaths.p184d5100} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p32443c80} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p290f4500} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.pcef6280} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Mouth5() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[0_-4.72%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.3467 6.28813">
          <g id="Mouth">
            <path clipRule="evenodd" d={svgPaths.p20dac5f0} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair5() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-7.26%_0_-4.32%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 98.252 78.9354">
          <g id="Hair">
            <path d={svgPaths.p16eec800} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p2a3fcf80} fill="var(--fill-0, #423232)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories5() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55.0211 34.5847">
        <g id="Accessories">
          <path clipRule="evenodd" d={svgPaths.pe89c00} fill="var(--fill-0, #FFDE55)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p2ee4d880} fill="var(--fill-0, #FFDE55)" id="Vector" />
          <path d={svgPaths.p35f10200} fill="var(--fill-0, #FF6B57)" id="Vector_2" />
          <path d={svgPaths.p3aa1940} fill="var(--fill-0, #FFDE55)" id="Vector_3" />
          <path d={svgPaths.p909a080} fill="var(--fill-0, #FFDE55)" id="Vector_4" />
          <path d={svgPaths.p3fe1f880} fill="var(--fill-0, #FF6B57)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function MaskGroup5() {
  return (
    <div className="absolute contents inset-[19.47%_-1.13%_-26.3%_4.47%]" data-name="Mask Group">
      <Face5 />
      <Outfit5 />
      <Eyes5 />
      <Mouth5 />
      <Hair5 />
      <Accessories5 />
    </div>
  );
}

function PrimaryTag10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#656b9f] text-[12px] tracking-[1px] whitespace-nowrap">
        <p className="leading-[20px]">Talleres</p>
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <PrimaryTag10 />
    </div>
  );
}

function PrimaryTag11() {
  return (
    <div className="content-stretch flex items-center relative rounded-[5.329px] shrink-0 w-[237.803px]" data-name="Primary Tag">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] whitespace-nowrap">
        <p className="leading-[18px]">Corporación Arte y Territorio</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame65 />
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[26px] relative shrink-0 text-[#064d20] text-[16px] text-center whitespace-nowrap">María Camila Artiaga</p>
      <PrimaryTag11 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame64 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame63 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <div className="bg-[#08602a] content-stretch flex items-center justify-center px-[15.987px] py-[7.993px] relative rounded-[7.993px] shrink-0 w-[237.803px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.987px] relative shrink-0 text-[9.33px] text-white whitespace-nowrap">Ver perfil</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[11.324px] items-start min-h-px min-w-px relative">
      <Frame62 />
      <Frame66 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[20.65px] items-center justify-center min-h-px min-w-px relative">
      <div className="bg-[#e9eaf1] relative rounded-[8.993px] shrink-0 size-[117.902px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-[2.998px] border-solid border-white inset-[-2.998px] pointer-events-none rounded-[11.991px]" />
        <div className="absolute bg-[#f7c0b5] inset-0 overflow-clip rounded-[6.661px]" data-name="Illustrations / Avatars / Luna Montgomery">
          <MaskGroup5 />
        </div>
      </div>
      <Frame61 />
    </div>
  );
}

function CardDirectorioGestor5() {
  return (
    <div className="bg-white relative rounded-[6.661px] shrink-0 w-[403px]" data-name="card directorio gestor">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.322px] py-[8.66px] relative rounded-[inherit] w-full">
        <Frame60 />
      </div>
      <div aria-hidden="true" className="absolute border-[#f2f2f2] border-[0.666px] border-solid inset-0 pointer-events-none rounded-[6.661px] shadow-[0px_6.661px_9.992px_-1.998px_rgba(0,0,0,0.1),0px_0px_3.997px_0px_rgba(0,0,0,0.07)]" />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-start flex flex-wrap gap-[26px] items-start relative shrink-0 w-full">
      <CardDirectorioGestor />
      <CardDirectorioGestor1 />
      <CardDirectorioGestor2 />
      <CardDirectorioGestor3 />
      <CardDirectorioGestor4 />
      <CardDirectorioGestor5 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] w-full">
        <p className="leading-[18px]">(8) gestores encontrados</p>
      </div>
      <Frame25 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[27px] items-start min-h-px min-w-px py-[5px] relative">
      <Container />
      <Frame26 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame20 />
    </div>
  );
}

function Main() {
  return (
    <div className="h-[772px] relative shrink-0 w-full" data-name="main">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-center pb-[48px] px-[83px] relative size-full">
          <Frame16 />
          <Frame18 />
          <Frame19 />
        </div>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col h-[775px] items-start relative shrink-0 w-[1440px]">
      <Main />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 text-center w-[908px]">
      <div className="flex flex-col font-['Nunito:ExtraBold_Italic',sans-serif] font-extrabold italic justify-center leading-[80px] min-w-full relative shrink-0 text-[#f2f3f7] text-[64px] tracking-[-2px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`¡Haz parte del `}</p>
        <p>Directorio Cultural!</p>
      </div>
      <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[0px] text-white w-[698px]">
        <p className="text-[16px]">
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">Completa</span>
          <span className="leading-[22px]">{` o `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">actualiza</span>
          <span className="leading-[22px]">{` tu ficha como `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">gestor</span>
          <span className="leading-[22px]">{`, `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">entidad</span>
          <span className="leading-[22px]">{`, o `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">espacio</span>
          <span className="leading-[22px]">{` `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">cultural</span>
          <span className="leading-[22px]">{` para que otras personas `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">puedan</span>
          <span className="leading-[22px]">{` `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">encontrarte</span>
          <span className="leading-[22px]">{` en el `}</span>
          <span className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px]">directorio de CultuBAQ</span>
          <span className="leading-[22px]">.</span>
        </p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[1280px]">
      <Frame10 />
      <div className="bg-white content-stretch flex items-center justify-center px-[24px] py-[12px] relative rounded-[12px] shrink-0" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border border-[#11863d] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#08602a] text-[14px] whitespace-nowrap">Postúlate aquí</p>
      </div>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="h-[53.93px] relative shrink-0 w-[290.245px]" data-name="footer_logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 290.245 53.9299">
        <g id="footer_logo">
          <path d={svgPaths.p36b7900} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p22681a80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.pd0efc80} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p38e44b80} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p25ef2ec0} fill="var(--fill-0, white)" id="Vector_5" />
          <path d={svgPaths.p2d269a80} fill="var(--fill-0, white)" id="Vector_6" />
          <path d={svgPaths.p3ed8d500} fill="var(--fill-0, white)" id="Vector_7" />
          <path d={svgPaths.p3012edc0} fill="var(--fill-0, white)" id="Vector_8" />
          <path d={svgPaths.p1ab46c80} fill="var(--fill-0, white)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function StreamlineUltimateWeatherSunBold() {
  return (
    <div className="relative shrink-0 size-[28.8px]" data-name="streamline-ultimate:weather-sun-bold">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8 28.8">
        <g clipPath="url(#clip0_51_12843)" id="streamline-ultimate:weather-sun-bold">
          <path d={svgPaths.p1eaac800} fill="var(--fill-0, #B85900)" id="Vector" />
          <path d={svgPaths.p12128a00} fill="var(--fill-0, #B85900)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_51_12843">
            <rect fill="white" height="28.8" width="28.8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="relative rounded-[32212202px] shrink-0 size-[57.6px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pr-[0.015px] relative size-full">
        <StreamlineUltimateWeatherSunBold />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Nunito:Bold',sans-serif] font-bold leading-[22px] left-0 text-[#b85900] text-[14px] top-[-1.44px] whitespace-nowrap">Barranquilla</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28.8px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['ABeeZee:Regular',sans-serif] leading-[28.8px] left-0 not-italic text-[#b85900] text-[19.2px] top-[-2.64px] whitespace-nowrap">32°C</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] h-[52.8px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute content-stretch flex h-[19.185px] items-start left-0 top-0 w-[61.185px]" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito:Bold',sans-serif] font-bold leading-[22px] min-h-px min-w-px relative text-[#b85900] text-[14px] text-right">10/12/25</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute content-stretch flex h-[19.185px] items-start left-0 top-[19.19px] w-[61.185px]" data-name="Paragraph">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#b85900] text-[14px] text-right whitespace-nowrap">Miércoles</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[38.37px] relative shrink-0 w-[61.185px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[14.4px] h-[57.6px] items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito:Bold',sans-serif] font-bold leading-[22px] min-h-px min-w-px relative text-[#b85900] text-[14px] text-center">jue</p>
    </div>
  );
}

function MaterialSymbolsWeatherMixOutline() {
  return (
    <div className="absolute left-[4.71px] size-[22.603px] top-[6.49px]" data-name="material-symbols:weather-mix-outline">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.6025 22.6025">
        <g id="material-symbols:weather-mix-outline">
          <path d={svgPaths.p379f0600} fill="var(--fill-0, #B85900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[33.6px] relative shrink-0 w-full" data-name="Paragraph">
      <MaterialSymbolsWeatherMixOutline />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#b85900] text-[14px] text-center whitespace-nowrap">28°C</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[81.57px] relative shrink-0 w-[29.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-start relative size-full">
        <Paragraph4 />
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito:Bold',sans-serif] font-bold leading-[22px] min-h-px min-w-px relative text-[#b85900] text-[14px] text-center">vie</p>
    </div>
  );
}

function StreamlineUltimateWeatherSunBold1() {
  return (
    <div className="absolute left-[4.15px] size-[20.719px] top-[6.49px]" data-name="streamline-ultimate:weather-sun-bold">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.719 20.719">
        <g clipPath="url(#clip0_51_12696)" id="streamline-ultimate:weather-sun-bold">
          <path d={svgPaths.p1d404100} fill="var(--fill-0, #B85900)" id="Vector" />
          <path d={svgPaths.p266c9f80} fill="var(--fill-0, #B85900)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_51_12696">
            <rect fill="white" height="20.719" width="20.719" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[33.6px] relative shrink-0 w-full" data-name="Paragraph">
      <StreamlineUltimateWeatherSunBold1 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#b85900] text-[14px] text-center whitespace-nowrap">31°C</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[81.57px] relative shrink-0 w-[29.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="flex-[1_0_0] font-['Nunito:Bold',sans-serif] font-bold leading-[22px] min-h-px min-w-px relative text-[#b85900] text-[14px] text-center">sáb</p>
    </div>
  );
}

function FluentWeatherHailDay24Regular() {
  return (
    <div className="absolute left-[1.2px] size-[25.428px] top-[4.09px]" data-name="fluent:weather-hail-day-24-regular">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25.4278 25.4278">
        <g id="fluent:weather-hail-day-24-regular">
          <path d={svgPaths.p27c73d80} fill="var(--fill-0, #B85900)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[33.6px] relative shrink-0 w-full" data-name="Paragraph">
      <FluentWeatherHailDay24Regular />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[19.185px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[22px] relative shrink-0 text-[#b85900] text-[14px] text-center whitespace-nowrap">30°C</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[81.57px] relative shrink-0 w-[29.88px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.8px] items-start relative size-full">
        <Paragraph10 />
        <Paragraph11 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[81.57px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pl-[21.93px] pr-[21.96px] relative size-full">
        <Container7 />
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[96.93px] items-start pt-[15.36px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#451a03] border-solid border-t-[0.96px] inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function FooterCalendar() {
  return (
    <div className="bg-[#fef3c7] content-stretch flex flex-col h-[195px] items-start pb-[0.96px] pt-[20.16px] px-[20.16px] relative rounded-[12px] shrink-0 w-[289px]" data-name="footer__calendar">
      <Container1 />
      <Container5 />
    </div>
  );
}

function FooterLeft() {
  return (
    <div className="content-stretch flex flex-col gap-[41px] items-start relative shrink-0 w-[350.182px]" data-name="footer__left">
      <FooterLogo />
      <FooterCalendar />
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[16px] text-white w-[min-content] whitespace-pre-wrap">{`©2025  diseñado por Ryder Barrios y María Frías`}</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito:Regular',sans-serif] font-normal gap-[14px] items-start leading-[22px] relative shrink-0 text-[18px] w-[125px]">
      <p className="relative shrink-0 w-full">Home</p>
      <p className="relative shrink-0 w-full">Explorar</p>
      <p className="relative shrink-0 w-full">Calendario</p>
      <p className="relative shrink-0 w-full">Directorio</p>
      <p className="relative shrink-0 w-full">Publicar evento</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-col font-['Nunito:Regular',sans-serif] font-normal gap-[14px] items-start leading-[22px] relative shrink-0 text-[18px] w-full">
      <p className="relative shrink-0 w-full">FAQ</p>
      <p className="relative shrink-0 w-full">Política de publicación</p>
      <p className="relative shrink-0 w-full">Términos y condiciones</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#d97706] content-stretch flex items-center justify-center p-[10px] relative rounded-[30px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Solid/Brands/Instagram">
        <div className="absolute inset-[11.64%_11.7%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3842 18.4151">
            <g id="Subtract">
              <path d={svgPaths.pae1e180} fill="var(--fill-0, white)" />
              <path clipRule="evenodd" d={svgPaths.p1be00a80} fill="var(--fill-0, white)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#d97706] content-stretch flex items-center justify-center p-[10px] relative rounded-[30px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Solid/Brands/Facebook">
        <div className="absolute inset-[11.98%_29.06%_11.98%_28.65%]" data-name="Union">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.15 18.25">
            <path d={svgPaths.p15a88bf0} fill="var(--fill-0, white)" id="Union" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[40px]">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Frame 15">
          <rect fill="var(--fill-0, #D97706)" height="39" rx="19.5" width="39" x="0.5" y="0.5" />
          <rect height="39" rx="19.5" stroke="var(--stroke-0, white)" width="39" x="0.5" y="0.5" />
          <path d={svgPaths.p36db4b00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#d97706] content-stretch flex items-center justify-center p-[10px] relative rounded-[30px] shrink-0 size-[40px]">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[30px]" />
      <div className="relative shrink-0 size-[24px]" data-name="Solid/Brands/Whatsapp">
        <div className="absolute inset-[8.33%_8.33%_9.01%_8.68%]" data-name="Subtract">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9159 19.8381">
            <path d={svgPaths.p3e1fa980} fill="var(--fill-0, white)" id="Subtract" stroke="var(--stroke-0, white)" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0">
      <Frame1 />
      <Frame3 />
      <Frame />
      <Frame2 />
    </div>
  );
}

function FooterRight() {
  return (
    <div className="content-start flex flex-wrap gap-[106px_94px] h-[368px] items-start justify-end relative shrink-0 w-[684px]" data-name="footer__right">
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-[139px]" data-name="Component 30">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[32px] min-w-full relative shrink-0 text-[24px] tracking-[1px] w-[min-content]">Navegación</p>
        <Frame67 />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-[187px]" data-name="Component 31">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] tracking-[1px] w-full">{`Información `}</p>
        <Frame68 />
      </div>
      <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 text-white w-[170px]" data-name="Component 32">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] tracking-[1px] w-full">Contáctanos</p>
        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[18px] w-full">cultubaq@gmail.com</p>
      </div>
      <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="Component 29">
        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[18px] text-white whitespace-nowrap">Síguenos</p>
        <Frame8 />
      </div>
    </div>
  );
}

export default function FinalBody() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center relative size-full" data-name="Final Body">
      <div className="bg-white content-stretch flex gap-[216px] items-center justify-center max-w-[1440px] overflow-clip px-[81px] py-[10px] relative shrink-0 w-[1440px]" data-name="header usuario">
        <HeaderLogo />
        <Nav />
        <HeaderButtons />
      </div>
      <Frame17 />
      <div className="content-stretch flex h-[382px] items-center justify-center py-[96px] relative rounded-[30px] shrink-0 w-[1280px]" data-name="CTAS">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[30px] size-full" src={imgCtas} />
          <div className="absolute bg-[rgba(0,0,0,0.8)] inset-0 rounded-[30px]" />
        </div>
        <Frame14 />
      </div>
      <div className="bg-[#033b17] content-stretch flex h-[477px] items-center justify-between px-[81px] py-[10px] relative shrink-0 w-[1440px]" data-name="Footer">
        <FooterLeft />
        <FooterRight />
      </div>
    </div>
  );
}