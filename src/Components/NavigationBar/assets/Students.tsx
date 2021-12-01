export default function StudentsIcon(
  props: React.SVGProps<SVGPathElement>
): JSX.Element {
  return (
    <svg width="32" height="35" viewBox="0 0 32 35" fill="none">
      <path
        d="M15.8823 4.42789C18.132 4.42789 19.9551 6.40793 19.9551 8.85138C19.9551 11.2948 18.132 13.2749 15.8823 13.2749C13.6325 13.2749 11.8094 11.2948 11.8094 8.85138C11.8094 6.40793 13.6325 4.42789 15.8823 4.42789ZM15.8823 23.3857C21.6424 23.3857 27.7129 26.4611 27.7129 27.8092V30.1263H4.05164V27.8092C4.05164 26.4611 10.1221 23.3857 15.8823 23.3857ZM15.8823 0.42569C11.5961 0.42569 8.12448 4.19619 8.12448 8.85138C8.12448 13.5066 11.5961 17.2771 15.8823 17.2771C20.1684 17.2771 23.64 13.5066 23.64 8.85138C23.64 4.19619 20.1684 0.42569 15.8823 0.42569ZM15.8823 19.3835C10.7039 19.3835 0.366699 22.2061 0.366699 27.8092V34.1285H31.3978V27.8092C31.3978 22.2061 21.0606 19.3835 15.8823 19.3835Z"
        fill="#858585"
        {...props}
      />
    </svg>
  );
}