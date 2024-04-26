import Heading from "@/components/Heading/Index";
import { GoMortarBoard } from "react-icons/go";
import { VscDebugBreakpointLog } from "react-icons/vsc";

export default function Home() {
  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Formação : .</Heading>

      <div className='w-full mt-[70px] mx-auto'>
        <div className='flex w-[80%] mx-auto justify-center gap-x-5'>

          <div className='relative flex flex-1 flex-col rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-23px] rounded-full w-[45px] h-[45px] flex items-center justify-center bg-orange text-white text-sm'>
              <GoMortarBoard size="25" />
            </div>
            <h1 className='text-[15px]'>Técnico em Informática</h1>
            <h3 className='text-[13px] font-bold text-blue'>IFRN</h3>
            <label className='text-black text-sm'>09/09/2009 - 09/09/2009</label>
            <span className='text-[13px] text-green'>Concluído</span>
          </div>

          <div className='relative flex flex-1 flex-col rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-23px] rounded-full w-[45px] h-[45px] flex items-center justify-center bg-orange text-white text-sm'>
              <GoMortarBoard size="25" />
            </div>
            <h1 className='text-[15px]'>Análise e Desenvolvimento de Sistemas</h1>
            <h3 className='text-[13px] font-bold text-blue'>Estácio</h3>
            <label className='text-black text-sm'>04/01/2014 - 12/02/2019</label>
            <span className='text-[13px] text-green'>Concluído</span>
          </div>
        </div>

        <div className='w-full mt-[60px] flex justify-center flex-wrap'>
        
          <Heading size="subtitle" className="w-full text-center mb-7">Atividades e participações</Heading>  

          <ul className='flex w-[80%] justify-center items-center flex-wrap gap-4'>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>Secitex</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>IV SCT Parnamirim/RN</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>IV CONEDU</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>Microempresa Jr. Achievement</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>Monitoria de POO no IFRN</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>4ª EXPOTEC IFRN</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>5ª EXPOTEC IFRN</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>II Seminário Cientifico de Acari</li>
            <VscDebugBreakpointLog size={12} />
            <li className='text-gray'>XI CONNEPI IFAL</li>
          </ul>
        </div>
      </div>
    </>

  )
}
