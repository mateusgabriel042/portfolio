import Heading from "@/components/Heading/Index";

export default function Home() {
  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Experiências : .</Heading>

      <div className='w-full mt-[60px] mx-auto'>
        <div className='grid grid-cols-3 gap-x-5 gap-y-4'>
          <div className='relative rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-23px] rounded-full w-[45px] h-[45px] flex items-center justify-center bg-purple text-white text-sm'>
              <label>PJ</label>
            </div>
            <h1 className='text-[15px]'>IETÉ</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Fullstack Pleno</h3>
            <label className='text-black text-sm'>10/2021 - <span className='text-green'>Atualmente</span></label>

            <h3 className='text-[13px] font-bold text-black my-2'>Responsabilidades</h3>
            <ul className='w-full text-xs'>
              <li>- Desenvolvimento Full Stack;</li>
              <li>- APIs RESTfull;</li>
              <li>- Arquitetura Multi Tenancy;</li>
              <li>- SOLID e PSR12.</li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>Projetos</h3>
            <ul className='w-full text-xs'>
              <li>- SIMED;</li>
              <li>- Easit;</li>
              <li>- Accountabiblity;</li>
              <li>- SSSystem.</li>
            </ul>
          </div>

          <div className='relative rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-23px] rounded-full w-[45px] h-[45px] flex items-center bg-purple justify-center text-white text-sm'>
              <label>PJ</label>
            </div>

            <h1 className='text-[15px]'>IHOLD Bank</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Fullstack Pleno</h3>
            <label className='text-black text-sm'>09/2023 - 01/2024</label>

            <h3 className='text-[13px] font-bold text-black my-2'>Responsabilidades</h3>
            <ul className='w-full text-xs'>
              <li>- Integração API da CARTOS;</li>
              <li>- Criação de arquivo de remessa CNAB 400. </li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>Projetos</h3>
            <ul className='w-full text-xs'>
              <li>- IHOLD Bank.</li>
            </ul>
          </div>

          <div className='relative rounded-lg border border-1 px-7 py-4'>
            <div className='absolute right-[25px] top-[-23px] rounded-full w-[95px] h-[45px] flex items-center justify-center bg-orange text-white text-sm'>
              <label>Freelancer</label>
            </div>
            <h1 className='text-[15px]'>Score Milk</h1>
            <h3 className='text-[13px] font-bold text-blue'>Dev. Frontend Júnior</h3>
            <label className='text-black text-sm'>07/2023 - 09/2023</label>

            <h3 className='text-[13px] font-bold text-black my-2'>Responsabilidades</h3>
            <ul className='w-full text-xs'>
              <li>- Desenvolvimento de frontend em vue.js</li>
            </ul>

            <h3 className='text-[13px] font-bold text-black my-2'>Projetos</h3>
            <ul className='w-full text-xs'>
              <li>- Snack Prompts.</li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center mt-8'>
          <label className='bg-blue text-white text-sm rounded-full px-7 py-3'>#4 anos de experiência</label>
        </div>
      </div>
    </>
    
  )
}
