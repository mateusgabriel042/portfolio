import ChartStackedBarSkill from '@/components/Charts/Bar/Stacked/Skill/index'
import Heading from '@/components/Heading/Index'

export default function Home() {
  return (
    <>
      <Heading size="title" className='text-center text-black mt-4'>. : Habilidades : .</Heading>

      <div className='w-full mx-auto mt-9'>
        <Heading size="subtitle" className='text-center mt-4'>Principais</Heading>
        
        <div className='w-full grid grid-cols-3 gap-y-1 gap-x-5 mt-8'>
          <ChartStackedBarSkill percentage={80} label="PHP 8.2" size={4} />
          <ChartStackedBarSkill percentage={90} label="Laravel" size={4} />
          <ChartStackedBarSkill percentage={90} label="Javascript" size={4} />
          <ChartStackedBarSkill percentage={90} label="React js" size={4} />
          <ChartStackedBarSkill percentage={90} label="Next js" size={4} />
          <ChartStackedBarSkill percentage={60} label="Vue js" size={4} />
        </div>

        <Heading size="subtitle" className='text-center mt-4'>Outras</Heading>

        <div className='w-full grid grid-cols-3 gap-y-1 gap-x-5 mt-8'>
          <ChartStackedBarSkill percentage={100} label="HTML5 / CSS3" size={4} />
          <ChartStackedBarSkill percentage={100} label="Bootstrap 5" size={4} />
          <ChartStackedBarSkill percentage={80} label="Tailwind" size={4} />
          <ChartStackedBarSkill percentage={80} label="MySQL" size={4} />
          <ChartStackedBarSkill percentage={80} label="PostgreeSQL" size={4} />
          <ChartStackedBarSkill percentage={90} label="Git / Github / Gitbucket" size={4} />
          <ChartStackedBarSkill percentage={70} label="Figma" size={4} />
          <ChartStackedBarSkill percentage={90} label="SOLID" size={4} />
          <ChartStackedBarSkill percentage={90} label="API RESTFul" size={4} />
        </div>
      </div>
    </>
  )
}
