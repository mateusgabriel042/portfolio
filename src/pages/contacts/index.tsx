import Heading from "@/components/Heading/Index";
import Link from "next/link";
import { useQRCode } from 'next-qrcode';

export default function Home() {
  const { Canvas } = useQRCode();

  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Contatos : .</Heading>

      <div className='w-full mt-[60px] mx-auto'>
        <div className='w-full'>
          <ul className='flex w-full flex-col gap-y-3'>

            <li className='flex justify-center'>
              <div className='flex items-center gap-x-2'>
                <h3 className='font-bold text-dark-gray'>Whatsapp:</h3>
                <label className=" text-dark-gray">(84) 99993 - 2183</label>
              </div>
            </li>

            <li className='flex justify-center'>
              <div className='flex items-center gap-x-2'>
                <h3 className='font-bold text-dark-gray'>Email:</h3>
                <label className=" text-dark-gray">mateus.gabriel042@gmail.com</label>
              </div>
            </li>

            <li className='flex justify-center'>
              <div className='flex items-center gap-x-2'>
                <h3 className='font-bold text-dark-gray'>Meu site:</h3>
                <label className=" text-dark-gray">Em breve!</label>
              </div>
            </li>
          </ul>

          <div className="flex justify-center gap-y-1 mt-9 flex-wrap">
            <label className="w-full text-[12px] text-center text-dark-gray">whatsapp</label>
            <Canvas
              text={'https://wa.me/5584999932183'}
              options={{
                errorCorrectionLevel: 'M',
                margin: 0,
                scale: 2,
                width: 100,
                color: {
                  dark: '#878787',
                  light: '#ffffff',
                },
              }}
            />
          </div>
        </div>
      </div>
    </>

  )
}
