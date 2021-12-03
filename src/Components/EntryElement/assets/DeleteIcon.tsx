type DeleteIconProps = {
  handleOnClick: () => void;
};

export default function DeleteIcon({
  handleOnClick,
}: DeleteIconProps): JSX.Element {
  return (
    <svg
      onClick={handleOnClick}
      width="14"
      height="18"
      viewBox="0 0 14 18"
      fill="none"
    >
      <path
        d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
        fill="black"
      />
    </svg>
  );
}
