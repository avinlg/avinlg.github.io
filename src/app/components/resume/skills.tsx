import AutoGrid from '@/app/components/ui/auto_grid';
import CircularProgressBar from '@/app/components/ui/circular_progress_bar';

const Skill = (props: any) => {
  const proficiency = props.data*10;
  return (
    <dl className="flex p-1 w-full min-w-1/3 justify-between bg-white rounded font-bold text-xs">
      <dt className="pl-1 w-10/12 self-center">{props.label}</dt>
      <CircularProgressBar className='!w-2/12 !h-auto' progress={proficiency}>
        <div className="flex text-2xl w-full h-full justify-center">
          <dd className="self-center">{`${proficiency}%`}</dd>
        </div>
      </CircularProgressBar>
    </dl>
  );
}

const getSkills = (skills:any) => {
  let skillComponents = [];
  for(let skill in skills) {
    if (skills.hasOwnProperty(skill)) {
      skillComponents.push(<Skill key={skill} {...skills[skill]} />)
    }
  }
  return skillComponents;
} 

const Skills = (props: any) => {
  return (
    <section className="p-2 py-4 flex w-full relative text-sm bg-gray-200">
      <dl className='w-full relative'>
        <dt className='absolute z-10 -top-1 left-4 px-2 max-w-max border-2 border-gray-800 rounded-full bg-gray-800 text-white font-bold text-xs'>{props.label}</dt>
        <dd className='mt-2 p-2 border-2 border-gray-800'>
          <AutoGrid cols={4}>
            {getSkills(props.data)}
          </AutoGrid>
        </dd>
      </dl>
    </section>
  );
}

export default Skills;