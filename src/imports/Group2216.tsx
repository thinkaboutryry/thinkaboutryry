import svgPaths from "./svg-mj5j4277n1";
import imgContainer from "figma:asset/efb475d415709193d72f3847baf63162bc7e5d5e.png";

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#ecfdf5] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-subtle</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#11863d] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-light</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#08602a] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#033b17] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-dark</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame7 />
      <Frame6 />
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Surface</p>
      <Frame15 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#11863d] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-light</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#08602a] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#033b17] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-dark</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
      <Frame10 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Border</p>
      <Frame16 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#064d20] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">link/label</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame11 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Text/Icon</p>
      <Frame17 />
    </div>
  );
}

function Primary() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[22.172px] items-start left-[547px] p-[14.19px] rounded-[5.321px] top-[331px]" data-name="Primary">
      <div aria-hidden="true" className="absolute border-[#babcd4] border-[0.222px] border-solid inset-0 pointer-events-none rounded-[5.321px]" />
      <Frame48 />
      <Frame49 />
      <Frame50 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#fef3c7] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-subtle</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#fbbf24] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-light</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f59e0b] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#b45309] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-dark</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame12 />
      <Frame13 />
      <Frame14 />
      <Frame19 />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Surface</p>
      <Frame18 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#fbbf24] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-light</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f59e0b] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#b45309] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-dark</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame21 />
      <Frame22 />
      <Frame23 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Border</p>
      <Frame20 />
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f59e0b] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">link/label</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Text/Icon</p>
      <Frame24 />
    </div>
  );
}

function Secondary() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[22.172px] items-start left-[7px] p-[14.19px] rounded-[5.321px] top-[591px]" data-name="Secondary">
      <div aria-hidden="true" className="absolute border-[#babcd4] border-[0.222px] border-solid inset-0 pointer-events-none rounded-[5.321px]" />
      <Frame51 />
      <Frame52 />
      <Frame53 />
    </div>
  );
}

function Frame70() {
  return (
    <div className="absolute h-[211.877px] left-[44.64px] top-[33.95px] w-[70.416px]">
      <div className="absolute bg-[#08602a] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[5.03px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#11863d] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[41.49px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#08602a] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[81.1px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#159947] border-[3.772px] border-solid inset-[-3.772px] pointer-events-none rounded-[11.317px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#033b17] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[126.37px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#08602a] content-stretch flex items-center justify-center left-[5.66px] opacity-40 px-[15.089px] py-[7.545px] rounded-[7.545px] top-[169.12px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="absolute h-[211.877px] left-[199.3px] top-[33.95px] w-[70.416px]">
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[5.03px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#11863d] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#08602a] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#91edb1] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[41.49px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#08602a] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#08602a] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[81.1px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#159947] border-[3.772px] border-solid inset-[-3.772px] pointer-events-none rounded-[11.317px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#08602a] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#21cf5e] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[126.37px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#08602a] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#08602a] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] opacity-40 px-[15.089px] py-[7.545px] rounded-[7.545px] top-[169.12px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#11863d] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#08602a] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="absolute h-[211.877px] left-[281.66px] top-[33.95px] w-[70.416px]">
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[5.03px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#064d20] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#11863d] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#91edb1] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[41.49px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#159947] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#033b17] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[81.1px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#000e03] border-[3.772px] border-solid inset-[-3.772px] pointer-events-none rounded-[11.317px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#11863d] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#21cf5e] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[126.37px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#159947] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#ecfdf5] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-center left-[5.66px] opacity-40 px-[15.089px] py-[7.545px] rounded-[7.545px] top-[169.12px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#064d20] border-[0.629px] border-solid inset-0 pointer-events-none rounded-[7.545px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#033b17] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="absolute h-[211.877px] left-[116.31px] top-[33.95px] w-[70.416px]">
      <div className="absolute bg-[#159947] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[5.03px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#064d20] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[41.49px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#159947] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[81.1px]" data-name="Primary Button">
        <div aria-hidden="true" className="absolute border-[#000e03] border-[3.772px] border-solid inset-[-3.772px] pointer-events-none rounded-[11.317px]" />
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#ecfdf5] content-stretch flex items-center justify-center left-[5.66px] px-[15.089px] py-[7.545px] rounded-[7.545px] top-[126.37px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[#033b17] text-[8.8px] whitespace-nowrap">Button</p>
      </div>
      <div className="absolute bg-[#159947] content-stretch flex items-center justify-center left-[5.66px] opacity-40 px-[15.089px] py-[7.545px] rounded-[7.545px] top-[169.12px]" data-name="Primary Button">
        <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[15.089px] relative shrink-0 text-[8.8px] text-white whitespace-nowrap">Button</p>
      </div>
    </div>
  );
}

function Botones() {
  return (
    <div className="absolute h-[245.828px] left-[523px] overflow-clip top-[572px] w-[364.655px]" data-name="Botones">
      <Frame70 />
      <Frame72 />
      <Frame73 />
      <Frame71 />
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-[2.51px] text-[#08602a] text-[7.545px] top-[45.27px] tracking-[0.6287px] whitespace-nowrap">Default</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-[5.66px] text-[#08602a] text-[7.545px] top-[84.25px] tracking-[0.6287px] whitespace-nowrap">Hover</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-0 text-[#08602a] text-[7.545px] top-[124.49px] tracking-[0.6287px] whitespace-nowrap">Focused</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-[5.66px] text-[#08602a] text-[7.545px] top-[170.38px] tracking-[0.6287px] whitespace-nowrap">Press</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-0 text-[#08602a] text-[7.545px] top-[214.39px] tracking-[0.6287px] whitespace-nowrap">Disabled</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-[99.34px] text-[#08602a] text-[7.545px] top-0 tracking-[0.6287px] whitespace-nowrap">Primario</p>
      <p className="absolute font-['Nunito:SemiBold',sans-serif] font-semibold leading-[15.089px] left-[251.49px] text-[#08602a] text-[7.545px] top-0 tracking-[0.6287px] whitespace-nowrap">Secundario</p>
      <div className="absolute content-stretch flex items-center justify-center left-[364.66px] opacity-40 px-[15.089px] py-[7.545px] rounded-[7.545px] top-[204.33px]" data-name="Clear Button" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[4.565px] py-[3.424px] relative shrink-0 w-[10.129px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3339] text-[6.847px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4.565px] relative w-full">
          <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[70.183px] relative shrink-0 text-[46.789px] text-black whitespace-nowrap">AaBbCc</p>
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[15.977px] items-start leading-[0] px-[6.847px] py-[3.424px] relative text-[6.847px] text-black w-full whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Family:
            </span>
            <span className="leading-[normal]">{` Nunito Bold`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Size:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 82px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Line Height:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 123px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Letter Spacing: `}</span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0px
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HeadingsH1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4.565px] self-stretch" data-name="Headings/H-1">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[9.129px] relative size-full">
          <Frame1 />
          <Frame2 />
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function HeadingsH() {
  return (
    <div className="bg-[#f6f8fa] h-[118.953px] relative rounded-[4.565px] shrink-0 w-full" data-name="Headings/H-1">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <HeadingsH1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4.565px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6.847px] items-start left-0 overflow-clip p-[11.412px] rounded-[11.412px] shadow-[0px_1.712px_28.53px_0px_rgba(0,0,0,0.07)] top-[144px] w-[451.339px]" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[6.847px] text-black uppercase whitespace-nowrap">Headings/H-1</p>
      <HeadingsH />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[4.565px] py-[3.424px] relative shrink-0 w-[10.129px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3339] text-[6.847px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4.565px] relative w-full">
          <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[58.2px] relative shrink-0 text-[38.8px] text-black whitespace-nowrap">AaBbCc</p>
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[15.977px] items-start leading-[0] px-[6.847px] py-[3.424px] relative text-[6.847px] text-black w-full whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Family:
            </span>
            <span className="leading-[normal]">{` Nunito Bold`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Size:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 68px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Line Height:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 102px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Letter Spacing: `}</span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0px
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HeadingsH3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4.565px] self-stretch" data-name="Headings/H-2">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[9.129px] relative size-full">
          <Frame27 />
          <Frame28 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function HeadingsH2() {
  return (
    <div className="bg-[#f6f8fa] h-[106.953px] relative rounded-[4.565px] shrink-0 w-full" data-name="Headings/H-2">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <HeadingsH3 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4.565px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6.847px] items-start left-[475px] overflow-clip p-[11.412px] rounded-[11.412px] shadow-[0px_1.712px_28.53px_0px_rgba(0,0,0,0.07)] top-[150px] w-[451.339px]" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[6.847px] text-black uppercase whitespace-nowrap">Headings/H-2</p>
      <HeadingsH2 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip px-[4.565px] py-[3.424px] relative shrink-0 w-[10.129px]" data-name="Frame">
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#2d3339] text-[6.847px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        &nbsp;
      </p>
    </div>
  );
}

function Frame32() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[4.565px] relative w-full">
          <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[47.93px] relative shrink-0 text-[31.953px] text-black whitespace-nowrap">AaBbCc</p>
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Frame">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex font-['Roboto:Bold',sans-serif] font-bold gap-[15.977px] items-start leading-[0] px-[6.847px] py-[3.424px] relative text-[6.847px] text-black w-full whitespace-nowrap">
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Family:
            </span>
            <span className="leading-[normal]">{` Nunito Bold`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Font Size:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 56px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>
              Line Height:
            </span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>{` 84px`}</span>
          </p>
          <p className="relative shrink-0" style={{ fontVariationSettings: "'wdth' 100" }}>
            <span className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] text-[#5e5e5e]" style={{ fontVariationSettings: "'wdth' 100" }}>{`Letter Spacing: `}</span>
            <span className="leading-[normal]" style={{ fontVariationSettings: "'wdth' 100" }}>
              0px
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function HeadingsH5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[4.565px] self-stretch" data-name="Headings/H-3">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pt-[9.129px] relative size-full">
          <Frame31 />
          <Frame32 />
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function HeadingsH4() {
  return (
    <div className="bg-[#f6f8fa] h-[95.953px] relative rounded-[4.565px] shrink-0 w-full" data-name="Headings/H-3">
      <div className="content-stretch flex items-start overflow-clip relative rounded-[inherit] size-full">
        <HeadingsH5 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.571px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[4.565px]" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6.847px] items-start left-[950px] overflow-clip p-[11.412px] rounded-[11.412px] shadow-[0px_1.712px_28.53px_0px_rgba(0,0,0,0.07)] top-[150px] w-[451.339px]" data-name="Frame">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[6.847px] text-black uppercase whitespace-nowrap">Headings/H-3</p>
      <HeadingsH4 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f2f3f7] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default-subtle</p>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-white h-[23.587px] relative rounded-[2.661px] shrink-0 w-[66.516px]">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.222px] border-solid inset-0 pointer-events-none rounded-[2.661px]" />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f2f2f2] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">disabled</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame35 />
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Surface</p>
      <Frame34 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#d3d5e4] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">default</p>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#f2f2f2] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">disabled</p>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Border</p>
      <Frame38 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#191b29] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">title</p>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#333652] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">body</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#656b9f] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">subtitle</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#a4a7c6] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">caption</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-white h-[23.587px] relative rounded-[2.661px] shrink-0 w-[66.516px]">
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[0.222px] border-solid inset-0 pointer-events-none rounded-[2.661px]" />
      </div>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">negative</p>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[3.548px] items-center relative shrink-0">
      <div className="bg-[#bfbfbf] h-[23.587px] rounded-[2.661px] shrink-0 w-[66.516px]" />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#121220] text-[6.652px] text-center whitespace-nowrap">disabled</p>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[5.321px] items-start relative shrink-0">
      <Frame42 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col gap-[5.321px] items-start relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] not-italic relative shrink-0 text-[#121220] text-[8.869px] text-center whitespace-nowrap">Text/Icon</p>
      <Frame41 />
    </div>
  );
}

function Grayscale() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[22.172px] items-start left-0 p-[14.19px] rounded-[5.321px] top-[331px]" data-name="Grayscale">
      <div aria-hidden="true" className="absolute border-[#babcd4] border-[0.222px] border-solid inset-0 pointer-events-none rounded-[5.321px]" />
      <Frame54 />
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <div className="bg-white content-stretch flex items-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Primary Tag">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#033b17] text-[12px] whitespace-nowrap">
          <p className="leading-[18px]">Teatro</p>
        </div>
      </div>
      <div className="bg-[#fef3c7] content-stretch flex items-center px-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Secondary Tag">
        <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b85900] text-[12px] whitespace-nowrap">
          <p className="leading-[18px]">$20.000</p>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[1_0_0] min-h-[194px] min-w-px relative w-full" data-name="Container">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[191.3%] left-[-1.62%] max-w-none top-[-4.42%] w-[105.92%]" src={imgContainer} />
        </div>
        <div className="absolute bg-[rgba(0,0,0,0.3)] inset-0" />
      </div>
      <div className="min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] px-[18px] py-[16px] relative size-full">
          <Frame67 />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return <div className="h-[24px] mb-[-3px] shrink-0 w-full" />;
}

function Frame68() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Nunito:ExtraBold',sans-serif] font-extrabold leading-[30px] min-h-px min-w-px relative text-[#064d20] text-[22px]">Apúntale al Medio</p>
    </div>
  );
}

function TitleContainer() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Title Container">
      <Frame68 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center justify-center mb-[-3px] relative shrink-0 w-full">
      <TitleContainer />
      <div className="content-stretch flex gap-[8px] h-[28px] items-center justify-center px-[12px] py-[8px] relative rounded-[12px] shrink-0" data-name="Toggle Counter">
        <div className="relative shrink-0 size-[28px]" data-name="Iconly/Sharp/Bold/Heart">
          <div className="absolute inset-[12.88%_9.37%_12.88%_9.38%]" data-name="Fill 202">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.7502 20.7856">
              <path clipRule="evenodd" d={svgPaths.p11635372} fill="var(--fill-0, #E00034)" fillRule="evenodd" id="Fill 202" />
            </svg>
          </div>
        </div>
        <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#333652] text-[14px] whitespace-nowrap">5</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[3px] relative shrink-0 w-full">
      <Frame60 />
      <Frame69 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Frame61 />
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#191b29] text-[16px] w-full">Conecta con Ar, Er y Contac en esta obra de teatro: una aventura para aprender y salvar a La Tierra del caos ambiental.</p>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Iconly/Curved/Bold/Location">
        <div className="absolute inset-[10.42%_16.67%]" data-name="Fill 394">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 19">
            <path clipRule="evenodd" d={svgPaths.p10c57d00} fill="var(--fill-0, #064D20)" fillRule="evenodd" id="Fill 394" />
          </svg>
        </div>
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333652] text-[14px] tracking-[0.75px] whitespace-nowrap">Nueva Acrópolis</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <div className="relative shrink-0 size-[24px]" data-name="Solid/General/Clock">
        <div className="absolute inset-[14.58%]" data-name="Icon">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path clipRule="evenodd" d={svgPaths.p2ea1af0} fill="var(--fill-0, #064D20)" fillRule="evenodd" id="Icon" />
          </svg>
        </div>
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333652] text-[14px] tracking-[0.75px] w-[180px]">16:00 p.m.</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[224px]">
      <Frame66 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="relative shrink-0 size-[22px]" data-name="Iconly/Sharp/Bold/Calendar">
        <div className="absolute inset-[8.85%_13.23%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1792 18.1042">
            <g id="Vector">
              <path clipRule="evenodd" d={svgPaths.p30433e00} fill="var(--fill-0, #064D20)" fillRule="evenodd" />
              <path clipRule="evenodd" d={svgPaths.p35031900} fill="var(--fill-0, #064D20)" fillRule="evenodd" />
            </g>
          </svg>
        </div>
      </div>
      <p className="font-['Nunito:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#333652] text-[14px] tracking-[0.75px] w-[86px]">13 Dic 2025</p>
      <Frame65 />
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-[348px]">
      <Frame59 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-[348px]">
      <Frame58 />
      <Frame64 />
    </div>
  );
}

function CuteFace1() {
  return (
    <div className="absolute inset-[0_0.22%_0.04%_-4.78%]" data-name="Cute_Face_3_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.392 19.4317">
        <g id="Cute_Face_3_">
          <path d={svgPaths.p618ba00} fill="var(--fill-0, #F7D3B5)" id="Vector" />
          <path d={svgPaths.p33b01100} fill="var(--fill-0, #F7D3B5)" id="Vector_2" />
          <path d={svgPaths.p2163e0f0} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p1cf83bf0} fill="var(--fill-0, #F7D3B5)" id="Vector_4" />
          <path d={svgPaths.p5799680} fill="var(--fill-0, #F7D3B5)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p1be1db00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p9b60080} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2757aa00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p8d1bd40} fill="var(--fill-0, #ED938A)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.p2b452e00} fill="var(--fill-0, #ED938A)" id="Vector_8" opacity="0.42" />
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

function Outfit() {
  return (
    <div className="absolute inset-[62.97%_-1.13%_-26.3%_4.47%]" data-name="Outfit">
      <div className="absolute inset-[-2.85%_0_0_-1.52%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5517 15.6337">
          <g id="Outfit">
            <path d={svgPaths.p107d2d00} fill="var(--fill-0, #6060D8)" id="Vector" />
            <path clipRule="evenodd" d={svgPaths.pfecd380} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p3ae01900} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p207af000} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_3" />
            <path clipRule="evenodd" d={svgPaths.pb15c9c0} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_4" />
            <path clipRule="evenodd" d={svgPaths.p14193e40} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_5" />
            <path d={svgPaths.p2c46bd00} fill="var(--fill-0, white)" id="Vector_2" />
            <path d={svgPaths.p3704ae00} fill="var(--fill-0, white)" id="Vector_3" />
            <path clipRule="evenodd" d={svgPaths.p302093f0} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_6" />
            <path clipRule="evenodd" d={svgPaths.p28cad240} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_7" />
            <path clipRule="evenodd" d={svgPaths.p17de09e8} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Eyes() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.24 3.44">
        <g id="Eyes">
          <path d={svgPaths.p3c2a4040} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.p25a76340} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2b75f100} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p35323f00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p2c241400} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p16363c00} fill="var(--fill-0, #423232)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mouth() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[-16%_-1.46%_-7.27%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.43515 1.57789">
          <g id="Mouth">
            <path d={svgPaths.pb61ec00} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p1c13f8c0} fill="var(--fill-0, #FE9DAB)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p1ec5d440} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p244bcb2} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Hair() {
  return (
    <div className="absolute inset-[19.99%_8.45%_20.01%_8.22%]" data-name="Hair">
      <div className="absolute inset-[-11.85%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16.1069">
          <g id="Hair">
            <path d={svgPaths.p32082e00} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p24bf4d00} fill="var(--fill-0, #423232)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Accessories() {
  return (
    <div className="absolute inset-[47.3%_23.53%_23.37%_29.8%]" data-name="Accessories">
      <div className="absolute inset-[0_0_-125%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.2 15.8399">
          <g id="Accessories">
            <path d={svgPaths.p326765f0} fill="var(--fill-0, white)" id="Vector" />
            <g id="Group">
              <path d={svgPaths.p17396a00} fill="var(--fill-0, white)" id="Vector_2" />
            </g>
            <path d={svgPaths.p12306080} fill="var(--fill-0, #E5E5E5)" id="Vector_3" />
            <path d={svgPaths.p2b5ba300} fill="var(--fill-0, white)" id="Vector_4" />
          </g>
        </svg>
      </div>
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

function CuteFace() {
  return (
    <div className="absolute inset-[0_0_0.04%_-4.57%]" data-name="Cute_Face_2_">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.392 19.4317">
        <g id="Cute_Face_2_">
          <path d={svgPaths.p2fed6e00} fill="var(--fill-0, #FEE4BF)" id="Vector" />
          <path d={svgPaths.p125eb6f0} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
          <path d={svgPaths.p222c8680} fill="var(--fill-0, #EFBDA5)" id="Vector_3" />
          <path d={svgPaths.p28470b80} fill="var(--fill-0, #FEE4BF)" id="Vector_4" />
          <path d={svgPaths.p5799680} fill="var(--fill-0, #FEE4BF)" id="Vector_5" />
          <path clipRule="evenodd" d={svgPaths.p9aeac80} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path d={svgPaths.p9b60080} fill="var(--fill-0, #EFBDA5)" id="Vector_6" />
          <path clipRule="evenodd" d={svgPaths.p2f00c700} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.pdac06b1} fill="var(--fill-0, #F2A5B2)" id="Vector_7" opacity="0.42" />
          <path d={svgPaths.p5553500} fill="var(--fill-0, #F2A5B2)" id="Vector_8" opacity="0.42" />
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
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.2 15.2">
        <g id="Outfit">
          <path d={svgPaths.p1e59b500} fill="var(--fill-0, #BEE3EB)" id="Vector" />
          <path d={svgPaths.pfad7a71} fill="var(--fill-0, white)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p3f94d9f0} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p1ffcbd80} fill="var(--fill-0, #544D4D)" fillRule="evenodd" id="Vector (Stroke)_2" />
        </g>
      </svg>
    </div>
  );
}

function Eyes1() {
  return (
    <div className="absolute inset-[36.3%_26.2%_49.37%_47.8%]" data-name="Eyes">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.24 3.44">
        <g id="Eyes">
          <path d={svgPaths.pea33a00} fill="var(--fill-0, #423232)" id="Vector" />
          <path d={svgPaths.pa8f8500} fill="var(--fill-0, #423232)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p32648d00} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p20e47c80} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)_2" />
          <path d={svgPaths.p2f1f7770} fill="var(--fill-0, #423232)" id="Vector_3" />
          <path d={svgPaths.p1c2a6100} fill="var(--fill-0, #423232)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Mouth1() {
  return (
    <div className="absolute inset-[57.29%_37.11%_37.38%_52.89%]" data-name="Mouth">
      <div className="absolute inset-[0_-4.72%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.51327 1.28">
          <g id="Mouth">
            <path clipRule="evenodd" d={svgPaths.p34776a40} fill="var(--fill-0, #423232)" fillRule="evenodd" id="Vector (Stroke)" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 15.4594">
          <g id="Hair">
            <path d={svgPaths.p16f78c80} fill="var(--fill-0, #423232)" id="Vector" />
            <path d={svgPaths.p32468600} fill="var(--fill-0, #FEE4BF)" id="Vector_2" />
            <path clipRule="evenodd" d={svgPaths.p3d4080} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)" />
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
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.4604 9.60528">
          <g id="Accessories">
            <path d={svgPaths.pcf81571} fill="var(--fill-0, #B7AEA9)" id="Vector" opacity="0.6" />
            <path d={svgPaths.p2f854100} fill="var(--fill-0, #B7AEA9)" id="Vector_2" opacity="0.6" />
            <path d={svgPaths.p12749370} fill="var(--fill-0, #B7AEA9)" id="Vector_3" opacity="0.6" />
            <path d={svgPaths.p236adf00} fill="var(--fill-0, #DBC3ED)" id="Vector_4" opacity="0.29" />
            <path d={svgPaths.p148be00} fill="var(--fill-0, #C4ADD8)" id="Vector_5" opacity="0.23" />
            <path d={svgPaths.p4203200} fill="var(--fill-0, #DBC3ED)" id="Vector_6" opacity="0.29" />
            <path d={svgPaths.p8e1800} fill="var(--fill-0, #C4ADD8)" id="Vector_7" opacity="0.23" />
            <path clipRule="evenodd" d={svgPaths.p26030a80} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p1054a200} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p360e6dc0} fill="var(--fill-0, #4EC2DD)" fillRule="evenodd" id="Vector (Stroke)_3" />
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

function Frame57() {
  return (
    <div className="content-stretch flex items-start pr-[8px] relative shrink-0">
      <div className="bg-[#e9eaf1] mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
        <div className="absolute bg-[#b5e2dc] inset-0 overflow-clip rounded-[9999px]" data-name="Illustrations / Avatars / Atlas Brooks">
          <MaskGroup />
        </div>
      </div>
      <div className="bg-[#e9eaf1] mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
        <div className="absolute bg-[#f4da92] inset-0 overflow-clip rounded-[9999px]" data-name="Illustrations / Avatars / Zara Delgado">
          <MaskGroup1 />
        </div>
      </div>
      <div className="bg-[#d3d5e4] mr-[-8px] relative rounded-[9999px] shrink-0 size-[24px]" data-name="Avatar">
        <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-[-2px] pointer-events-none rounded-[10001px]" />
        <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Nunito:Medium',sans-serif] font-medium justify-center leading-[0] left-1/2 text-[#656b9f] text-[12px] text-center top-1/2 tracking-[1px] whitespace-nowrap">
          <p className="leading-[20px]">+5</p>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="h-[228px] relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center pb-[16px] px-[16px] relative size-full">
          <Frame63 />
          <Frame62 />
          <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Facepile">
            <Frame57 />
            <div className="flex flex-col font-['Nunito:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#333652] text-[12px] text-center whitespace-nowrap">
              <p className="leading-[18px]">Han agendado</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Boton() {
  return (
    <div className="relative shrink-0 w-full" data-name="boton">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="bg-[#08602a] cursor-pointer flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Primary Button">
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center p-[12px] relative w-full">
              <p className="font-['Nunito:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-white whitespace-nowrap">Ver detalles</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Inter:Bold_Italic',sans-serif] font-bold italic justify-center leading-[0] left-[701px] text-[#272833] text-[72px] text-center top-[49px] tracking-[-4.5938px] w-[936px]">
        <p>
          <span className="leading-[98px]">{`Sistema de `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[98px] not-italic text-[#f39a09]">Diseño</span>
        </p>
      </div>
      <Primary />
      <Secondary />
      <Botones />
      <Frame />
      <Frame26 />
      <Frame30 />
      <Grayscale />
      <div className="absolute bg-white content-stretch flex flex-col h-[502px] items-center left-[988px] min-w-[286px] overflow-clip rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_0px_6px_0px_rgba(0,0,0,0.07)] top-[315px] w-[380px]" data-name="card">
        <Container />
        <Content />
        <Boton />
      </div>
    </div>
  );
}