const Communications = (props: any) => {
  return (
    <section className="p-2 py-4 flex w-full relative text-sm bg-gray-200">
      <dl className='w-full relative'>
        <dt className='absolute z-10 -top-1 left-4 px-2 max-w-max border-2 border-gray-800 rounded-full bg-gray-800 text-white font-bold text-xs'>{props.label}</dt>
        <dd className='mt-2 p-2 border-2 border-gray-800'>
          <dl>
            <div className='flex'>
              <dt className='hidden'>{props.data.communications_ability.label}</dt>
              <dd className='font-semibold'>{props.data.communications_ability.data}</dd>
            </div>
            <div className='flex'>
              <dt className='font-bold pr-4 after:content-[":"]'>{props.data.languages.label}</dt>
              <dd className='font-semibold'>{props.data.languages.data}</dd>
            </div>
          </dl>
        </dd>
      </dl>
    </section>
  );
}

export default Communications;