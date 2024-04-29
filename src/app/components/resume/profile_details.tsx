import getDateWithOrdinals from '@/app/lib/date';

export default function ProfileDetails(props: any) {
  const dob = new Date(props.dob.split('-').reverse().join('-'));
  const formatedDob = getDateWithOrdinals(dob);
  return (
    <section className={`py-2 px-4 flex w-full text-sm bg-gray-200 ${props.className}`}>
      <div className="flex w-full justify-between">
        <dl className="hidden">
          <dt>Full Name:</dt>
          <dd>{props.fullName}</dd>
        </dl>
        <dl className="flex min-w-max">
          <dt>Born on</dt>
          <dd className="pl-1 font-bold">{formatedDob}</dd>
        </dl>
            <div className="border-r-2 border-gray-800"></div>
        <dl className="flex min-w-max">
          <dt className="min-w-20">Gender</dt>
          <dd className="pl-4">{props.gender}</dd>
        </dl>
            <div className="border-r-2 border-gray-800"></div>
        <dl className="flex min-w-max">
          <dt className="min-w-20">Nationality</dt>
          <dd className="pl-4">{props.nationality}</dd>
        </dl>
      </div>
    </section>
  );
}
