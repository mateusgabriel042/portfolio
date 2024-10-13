import ChartStackedBarSkill from '@/components/Charts/Bar/Stacked/Skill/index'
import Heading from '@/components/Heading/Index'
import { getDictionaryUseClient } from '@/dictionaries/dictionary-use-client'
import { useRouter } from 'next/router';
import Styles from "./styles.module.css";

export default function Home() {
  const { lang }:any = useRouter().query;
  const dict = getDictionaryUseClient(lang);

  const BarSkill = (props:any) => {
    return (
      <div className={Styles.bar_skill}>
        <div className={Styles[`progress_${props.percentage}`]}>
          <span>{props.skill}</span>
          <span>{props.percentage}%</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Heading size="title" className='text-center text-dark-gray mt-4'>{dict.page_skills.title}</Heading>

      <div className='w-full mx-auto mt-9 pb-8'>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-y-[25px] gap-x-5 mt-8'>
          <BarSkill percentage={90} skill="PHP" />
          <BarSkill percentage={100} skill="Laravel" />
          <BarSkill percentage={90} skill="Javascript" />
          <BarSkill percentage={90} skill="React/Next" />
          <BarSkill percentage={70} skill="Vue.js" />
          <BarSkill percentage={100} skill="HTML5 / CSS3" />
          <BarSkill percentage={100} skill="Bootstrap 5" />
          <BarSkill percentage={90} skill="Tailwind" />
          <BarSkill percentage={90} skill="MySQL" />
          <BarSkill percentage={80} skill="PostgreeSQL" />
          <BarSkill percentage={70} skill="Git / GitHub / GitBucket" />
          <BarSkill percentage={80} skill="SOLID" />
          <BarSkill percentage={80} skill="API RESTFul" />
          <BarSkill percentage={60} skill="Figma" />
        </div>
      </div>
    </>
  )
}
