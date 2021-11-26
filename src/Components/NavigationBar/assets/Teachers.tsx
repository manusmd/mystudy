export default function TeachersIcon(
  props: React.SVGProps<SVGPathElement>
): JSX.Element {
  return (
    <svg
      width="39"
      height="36"
      viewBox="0 0 39 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.285 -1.52588e-05L0.0766602 12L7.06151 16.36V28.36L19.285 36L31.5085 28.36V16.36L35.0009 14.18V28H38.4933V12L19.285 -1.52588e-05ZM31.1941 12L19.285 19.44L7.37582 12L19.285 4.55999L31.1941 12ZM28.016 25.98L19.285 31.44L10.5539 25.98V18.54L19.285 24L28.016 18.54V25.98Z"
        {...props}
      />
    </svg>
  );
}
