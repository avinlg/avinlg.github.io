import * as HeroIcons from "@heroicons/react/20/solid";

type IconName = keyof typeof HeroIcons;
interface IconProps {
    icon: IconName;
    classes: string;
}

export const DynamicHeroIcon = ({ icon, classes }: IconProps) => {
  const SingleIcon = HeroIcons[icon];

  return (
      <SingleIcon className={classes} />
  );
};

export default DynamicHeroIcon;