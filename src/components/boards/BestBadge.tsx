import MedalIcon from "/public/images/ic_medal.svg";

const BestBadge = () => {
  return (
    <div className="flexcenter gap-[4px] w-[102px] h-[30px] rounded-b-[32px] bg-blue text-white font-semibold text-[16px]">
      <MedalIcon />
      Best
    </div>
  );
};

export default BestBadge;
