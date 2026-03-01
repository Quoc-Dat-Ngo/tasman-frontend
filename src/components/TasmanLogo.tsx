const TasmanLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g transform="skewX(-12)">
        {/* <!-- T --> */}
        <path
          d="M40 60 H150 V80 H105 V150 H80 V80 H40 Z"
          className="fill-sky-400"
        />

        {/* <!-- S --> */}
        <path
          d="
        M130 95
        C150 95 160 105 160 120
        C160 135 145 145 125 145
        C110 145 95 138 90 125
        L110 118
        C113 125 120 130 128 130
        C138 130 145 125 145 118
        C145 110 138 105 125 105
        C105 105 95 95 95 80
        C95 65 110 55 130 55
        C145 55 158 62 163 75
        L143 82
        C140 75 135 70 127 70
        C118 70 112 75 112 82
        C112 90 118 95 130 95
        Z
      "
          className="fill-white"
        />
      </g>
    </svg>
  );
};

export default TasmanLogo;
