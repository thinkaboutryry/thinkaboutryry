import clsx from "clsx";
import svgPaths from "./svg-mayimixtu";
type IconH5Body1Props = {
  additionalClassNames?: string;
};

function IconH5Body1({ additionalClassNames = "" }: IconH5Body1Props) {
  return (
    <div className={clsx("absolute bg-[#edeff1] rounded-[16px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-0 border-[#800000] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="content-stretch flex flex-col gap-[24.41px] items-start px-[32.547px] py-[24.41px] relative size-full">
        <IconH5Body text="&nbsp;" text1="&nbsp;" />
      </div>
    </div>
  );
}
type Frame2339IconNumberProps = {
  additionalClassNames?: string;
};

function Frame2339IconNumber({ additionalClassNames = "" }: Frame2339IconNumberProps) {
  return (
    <div className={clsx("absolute bg-[#800000] rounded-[100px]", additionalClassNames)}>
      <div className="content-stretch flex items-start p-[24.41px] relative size-full">
        <div className="flex-[1_0_0] h-full min-h-px min-w-px overflow-clip" data-name="Icon" />
      </div>
    </div>
  );
}
type Frame2339TimelineAtomProps = {
  additionalClassNames?: string;
};

function Frame2339TimelineAtom({ additionalClassNames = "" }: Frame2339TimelineAtomProps) {
  return (
    <div className={clsx("absolute bg-white h-[122.05px] rounded-[12.205px] top-[453.81px] w-[406.832px]", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border-[#2569ed] border-[2.034px] border-solid inset-0 pointer-events-none rounded-[12.205px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[61.025px] py-[12.205px] size-full" />
      </div>
    </div>
  );
}
type HelperProps = {
  additionalClassNames?: string;
};

function Helper({ additionalClassNames = "" }: HelperProps) {
  return (
    <div className={additionalClassNames}>
      <div className="content-stretch flex flex-col items-start relative w-full">
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-3.05px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202.399 3.05124">
              <line id="Line 2" stroke="var(--stroke-0, #2569ED)" strokeWidth="3.05124" x2="202.399" y1="1.52562" y2="1.52562" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
type LineProps = {
  additionalClassNames?: string;
};

function Line({ additionalClassNames = "" }: LineProps) {
  return <Helper additionalClassNames={clsx("absolute top-[514.83px] w-[24.41px]", additionalClassNames)} />;
}
type Frame2339HelperProps = {
  additionalClassNames?: string;
};

function Frame2339Helper({ additionalClassNames = "" }: Frame2339HelperProps) {
  return (
    <div className={clsx("-translate-y-1/2 absolute flex items-center justify-center top-[calc(50%-6px)]", additionalClassNames)}>
      <div className="-rotate-90 flex-none h-px w-[202.399px]">
        <Helper additionalClassNames="relative w-full" />
      </div>
    </div>
  );
}
type IconH5BodyProps = {
  text: string;
  text1: string;
};

function IconH5Body({ text, text1 }: IconH5BodyProps) {
  return (
    <div className="content-stretch flex flex-col gap-[8.137px] items-center leading-[normal] relative shrink-0 text-black text-center w-full">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold relative shrink-0 text-[40.68px] w-full">{text}</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 text-[32.55px] w-full">{text1}</p>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Frame2339Helper additionalClassNames="left-[27.54%] right-[72.46%]" />
      <Frame2339Helper additionalClassNames="left-1/2 right-1/2" />
      <Frame2339Helper additionalClassNames="left-[72.46%] right-[27.54%]" />
      <Frame2339TimelineAtom additionalClassNames="left-[325.32px]" />
      <Line additionalClassNames="left-[732.15px]" />
      <Frame2339TimelineAtom additionalClassNames="left-[756.56px]" />
      <Line additionalClassNames="left-[1163.39px]" />
      <Frame2339TimelineAtom additionalClassNames="left-[1187.8px]" />
      <Frame2339IconNumber additionalClassNames="inset-[26.43%_69.08%_61.08%_24.14%]" />
      <Frame2339IconNumber additionalClassNames="inset-[59.88%_46.62%_27.64%_46.6%]" />
      <Frame2339IconNumber additionalClassNames="inset-[26.43%_24.16%_61.08%_69.06%]" />
      <div className="absolute bg-[#edeff1] inset-[60.38%_61.88%_18.01%_16.93%] rounded-[16px]" data-name="Icon + H5 + Body">
        <div className="content-stretch flex flex-col gap-[24.41px] items-start px-[32.547px] py-[24.41px] relative size-full">
          <IconH5Body text="&nbsp;" text1="&nbsp;" />
        </div>
      </div>
      <IconH5Body1 additionalClassNames="inset-[16.84%_39.4%_61.55%_39.41%]" />
      <IconH5Body1 additionalClassNames="inset-[60.5%_16.88%_17.89%_61.93%]" />
      <p className="-translate-x-1/2 absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.2] left-[960px] not-italic text-[#800000] text-[62.463px] text-center top-[61px] tracking-[-1.2493px] w-[1920px]">Conceptualización</p>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] left-[528.23px] not-italic opacity-85 text-[#000614] text-[42.943px] text-center top-[546.82px] tracking-[-0.6442px] w-[405.815px]">
        <p className="leading-[1.5]">Calidez</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] left-[1392.91px] not-italic opacity-85 text-[#000614] text-[42.943px] text-center top-[547px] tracking-[-0.6442px] w-[405.815px]">
        <p className="leading-[1.5]">Orgánico</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-end leading-[0] left-[961.91px] not-italic opacity-85 text-[#000614] text-[42.943px] text-center top-[547px] tracking-[-0.6442px] w-[405.815px]">
        <p className="leading-[1.5]">Dinamismo</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] left-[528.23px] not-italic opacity-85 text-[#000614] text-[26.84px] text-center top-[824.26px] tracking-[-0.4026px] w-[341.4px]">
        <p>
          <span className="leading-[1.5]">{`Evoca `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">hospitalidad</span>
          <span className="leading-[1.5]">{` y `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">confort</span>
          <span className="leading-[1.5]">{`, un lugar donde los usuarios se sientan `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">bienvenidos</span>
          <span className="leading-[1.5]">.</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] left-[1391.34px] not-italic opacity-85 text-[#000614] text-[26.84px] text-center top-[822px] tracking-[-0.4026px] w-[374.681px]">
        <p>
          <span className="leading-[1.5]">{`Representa la `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">naturaleza</span>
          <span className="leading-[1.5]">{` y `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">sostenibilidad</span>
          <span className="leading-[1.5]">{`, conectando la marca con el `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">entorno</span>
          <span className="leading-[1.5]">{`; diseño `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">fluido</span>
          <span className="leading-[1.5]">{` y materiales amigables.`}</span>
        </p>
      </div>
      <div className="-translate-x-1/2 -translate-y-full absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-end leading-[0] left-[957.7px] not-italic opacity-85 text-[#000614] text-[26.84px] text-center top-[368px] tracking-[-0.4026px] w-[341.4px]">
        <p>
          <span className="leading-[1.5]">{`Refleja el `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">movimiento</span>
          <span className="leading-[1.5]">{` `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">alineado</span>
          <span className="leading-[1.5]">{` con la vida de la `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[1.5] not-italic">carretera</span>
          <span className="leading-[1.5]">, se transmite en formas curvas del diseño.</span>
        </p>
      </div>
      <div className="absolute left-[482.06px] size-[92.328px] top-[294.95px]" data-name="icon-park-outline:family">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 92.3283 92.3283">
          <g id="icon-park-outline:family">
            <path clipRule="evenodd" d={svgPaths.p5670f0} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p1aaa0e80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)_2" />
            <path clipRule="evenodd" d={svgPaths.p1acae980} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)_3" />
            <path clipRule="evenodd" d={svgPaths.p190a8d00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector (Stroke)_4" />
          </g>
        </svg>
      </div>
      <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[1.5] left-[32px] not-italic text-[#800000] text-[24px] top-0 tracking-[-0.36px] whitespace-nowrap">06</p>
      <div className="absolute left-[912px] size-[99px] top-[640px]" data-name="material-symbols:route-outline">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 99 99">
          <g id="material-symbols:route-outline">
            <path d={svgPaths.p288a6800} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute contents left-0 top-[926px]" />
      <div className="absolute bg-[#800000] h-[84px] left-0 top-[959px] w-[1920px]" />
      <div className="absolute h-[74.383px] left-[1752px] top-[966px] w-[74.029px]" data-name="FINAL LA MAGDALENA-11 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74.0286 74.383">
          <g id="FINAL LA MAGDALENA-11 2">
            <path d={svgPaths.p1f810d80} fill="var(--fill-0, #F0DAB5)" id="Vector" />
          </g>
        </svg>
      </div>
      <div className="absolute h-[54px] left-[96px] top-[975px] w-[244px]" data-name="FINAL LA MAGDALENA-13 2">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 244 54">
          <g id="FINAL LA MAGDALENA-13 2">
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
      <div className="absolute left-[1339px] size-[104px] top-[288px]" data-name="typcn:waves-outline">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
          <g id="typcn:waves-outline">
            <path d={svgPaths.p2fffde80} fill="var(--fill-0, white)" id="Vector" />
          </g>
        </svg>
      </div>
    </div>
  );
}