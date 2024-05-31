const SortIcon = ({ isLike }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 6.5V17.5M15 17.5L11.5 14M15 17.5L18.5 14"
      stroke={isLike ? "#3692FF" : "#1F2937"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.8999 15.5L9.4999 15.5"
      stroke={isLike ? "#3692FF" : "#1F2937"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M5 7.5H10"
      stroke={isLike ? "#3692FF" : "#1F2937"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M6.2998 11.5L9.4998 11.5"
      stroke={isLike ? "#3692FF" : "#1F2937"}
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export default SortIcon;
