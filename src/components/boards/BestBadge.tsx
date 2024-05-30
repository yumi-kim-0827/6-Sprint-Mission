import MedalIcon from "/public/images/ic_medal.svg";

const BestBadge = () => {
  return (
    <div className="flexcenter h-[30px] w-[102px] gap-[4px] rounded-b-[32px] bg-blue text-[16px] font-semibold text-white">
      <MedalIcon />
      Best
    </div>
  );
};

export default BestBadge;
