import DynamicHeroIcon from "@/app/components/heroIcons";

export default function Contacts(props: any) {
  return (
    <section className="py-2 px-4 flex w-full text-sm">
      <div className="flex w-full">
        <dl className="flex w-full">
          <dt className="hidden">
            <h3>Contact</h3>
          </dt>
          <dd className="flex w-full justify-between">
            <dl className="flex min-w-max hover:fill-inherit">
              <dt className="flex self-center">
                <span className="hidden">Mobile</span>
                <DynamicHeroIcon
                  icon={"PhoneIcon"}
                  classes="flex-shrink-0 w-5 h-5 text-gray-800"
                />
              </dt>
              <dd className="pl-2">{props.mobile}</dd>
            </dl>
            <div className="border-r-2 border-gray-800"></div>
            <dl className="flex min-w-max">
              <dt className="flex self-center">
                <span className="hidden">Email</span>
                <DynamicHeroIcon
                  icon={"EnvelopeIcon"}
                  classes="flex-shrink-0 w-5 h-5 text-gray-800"
                />
              </dt>
              <dd className="pl-2">{props.email}</dd>
            </dl>
            <div className="border-r-2 border-gray-800"></div>
            <dl className="flex min-w-max">
              <dt className="flex self-center">
                <span className="hidden">Address</span>
                <DynamicHeroIcon
                  icon={"MapPinIcon"}
                  classes="flex-shrink-0 w-5 h-5 text-gray-800"
                />
              </dt>
              <dd className="pl-2">{props.address.join(", ")}</dd>
            </dl>
          </dd>
        </dl>
      </div>
    </section>
  );
}
