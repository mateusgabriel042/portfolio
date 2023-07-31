import Layout from './layout/index'
import { FaMapMarkerAlt, FaBirthdayCake } from 'react-icons/fa'
import { MdEmail, MdMan3 } from 'react-icons/md'

export default function Home() {
  return (
    <Layout>
      <h1 className='text-black w-full px-12 mt-12 font-semibold text-[30px]'>Sobre</h1>

      <div className='w-[calc(100%-9%)] mt-5 mx-auto h-[calc(100%-18%)]'>
        <div className='w-full flex justify-center gap-x-4'>
          <div className='flex items-center gap-x-2'>
            <FaBirthdayCake size="15" className="mt-[-3px]"/>
            <label className='text-sm'> 24 anos</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <FaMapMarkerAlt size="15" className="mt-[-3px]" />
            <label className='text-sm'>Natal/RN</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdMan3 size="17" className="mt-[-3px]"/>
            <label className='text-sm'>Solteiro</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <MdEmail size="17" className="mt-[-1px]"/>
            <label className='text-sm'>mateus.gabriel042@gmail.com</label>
          </div>
        </div>

        <p className='mt-4 w-full text-center px-20'>
          Sou um desenvolvedor full stack pleno com experiência no desenvolvimento de sistemas web em PHP,
          React e Next, bem como no manuseio de sistemas já em produção. Tenho formação em Análise e Desenvolvimento
          de Sistemas pela Estácio e em Técnico em Informática pelo IFRN Campus Macau, e atuei como instrutor de
          POO durante minha bolsa TAL no IFRN.
        </p>

        <div className='flex justify-center gap-x-3 mt-12'>
          <a href="#" className='px-7 py-1 rounded-full bg-black text-white text-sm' target='_blank'>Curriculo</a>
          <a href="#" className='px-7 py-1 rounded-full bg-black text-white text-sm' target='_blank'>Linkedin</a>
        </div>

        <div className='flex justify-center mt-14'>
          <div className='w-[560px] h-[70px] flex bg-gray-light'>
            <div className='w-[140px] h-full bg-black flex flex-col items-center justify-center'>
              <label className='text-sm text-white'>Projetos</label>
              <span className='text-[30px] text-white leading-tight'>13</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>Certificados</label>
              <span className='text-[30px] text-black leading-tight'>17</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>Anos de experiência</label>
              <span className='text-[30px] text-black leading-tight'>3,1</span>
            </div>

            <div className='w-[140px] h-full flex flex-col items-center justify-center'>
              <label className='text-sm text-black'>Publicações</label>
              <span className='text-[30px] text-black leading-tight'>0</span>
            </div>
          </div>
        </div>

      </div>
    </Layout>
    
  )
}
