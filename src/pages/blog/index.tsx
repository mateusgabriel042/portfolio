import Heading from "@/components/Heading/Index";

export default function Home() {
  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Blog : .</Heading>
      <div className='w-[calc(100%-9%)] mt-5 mx-auto h-[calc(100%-18%)]'>
        <div className='flex justify-center mt-[140px]'>
          <Heading size="subtitle" className="text-dark-gray text-center">Em breve!</Heading>
        </div>
      </div>
    </>
    
  )
}
