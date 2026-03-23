export function HeroIllustration() {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Background Elements */}
      <circle cx="400" cy="300" r="250" fill="#e6f4ff" />
      <circle cx="400" cy="300" r="200" fill="#f5f7fa" />

      {/* Grid Pattern */}
      <path
        d="M200 100H600M200 200H600M200 300H600M200 400H600M200 500H600M200 100V500M300 100V500M400 100V500M500 100V500M600 100V500"
        stroke="#e0e7ff"
        strokeWidth="2"
      />

      {/* Main Device - Laptop */}
      <g transform="translate(300, 250)">
        {/* Laptop Base */}
        <rect x="0" y="120" width="200" height="10" rx="2" fill="#0056b3" />

        {/* Laptop Screen */}
        <rect x="20" y="0" width="160" height="120" rx="4" fill="#0056b3" />
        <rect x="25" y="5" width="150" height="110" rx="2" fill="#ffffff" />

        {/* Screen Content */}
        <rect x="35" y="15" width="130" height="10" rx="2" fill="#e6f4ff" />
        <rect
          x="35"
          y="30"
          width="80"
          height="8"
          rx="2"
          fill="#00a0b0"
          opacity="0.7"
        />
        <rect x="35" y="45" width="110" height="8" rx="2" fill="#e6f4ff" />
        <rect x="35" y="60" width="90" height="8" rx="2" fill="#e6f4ff" />

        {/* Code Brackets */}
        <path
          d="M50 85L40 95L50 105"
          stroke="#0056b3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70 85L80 95L70 105"
          stroke="#0056b3"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Floating Elements */}
        <circle cx="-50" cy="30" r="25" fill="#00a0b0" opacity="0.2" />
        <circle cx="-50" cy="30" r="15" fill="#00a0b0" opacity="0.4" />
        <circle cx="250" cy="70" r="20" fill="#0056b3" opacity="0.2" />
        <circle cx="250" cy="70" r="10" fill="#0056b3" opacity="0.4" />

        {/* Gear Icon */}
        <circle cx="-80" cy="100" r="20" fill="#0056b3" opacity="0.1" />
        <circle cx="-80" cy="100" r="10" fill="#0056b3" opacity="0.2" />
        <path
          d="M-80 90V110M-90 100H-70M-87 93L-73 107M-87 107L-73 93"
          stroke="#0056b3"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Database Icon */}
        <ellipse cx="230" cy="20" rx="15" ry="8" fill="#00a0b0" opacity="0.3" />
        <path
          d="M215 20V40M245 20V40"
          stroke="#00a0b0"
          strokeWidth="2"
          opacity="0.5"
        />
        <ellipse cx="230" cy="40" rx="15" ry="8" fill="#00a0b0" opacity="0.3" />

        {/* Connecting Lines */}
        <path
          d="M-50 30H25M250 70H150M-80 100L25 100M230 40V60H150"
          stroke="#0056b3"
          strokeWidth="1"
          strokeDasharray="4 2"
        />
      </g>

      {/* Floating UI Elements */}
      <g transform="translate(150, 150)">
        <rect
          x="0"
          y="0"
          width="80"
          height="40"
          rx="4"
          fill="#0056b3"
          opacity="0.8"
        />
        <rect x="10" y="10" width="40" height="5" rx="2" fill="white" />
        <rect
          x="10"
          y="20"
          width="60"
          height="5"
          rx="2"
          fill="white"
          opacity="0.7"
        />
        <rect
          x="10"
          y="30"
          width="30"
          height="5"
          rx="2"
          fill="white"
          opacity="0.5"
        />
      </g>

      <g transform="translate(550, 380)">
        <rect
          x="0"
          y="0"
          width="70"
          height="70"
          rx="8"
          fill="#00a0b0"
          opacity="0.8"
        />
        <circle cx="35" cy="25" r="10" fill="white" />
        <rect x="15" y="45" width="40" height="5" rx="2" fill="white" />
        <rect
          x="20"
          y="55"
          width="30"
          height="5"
          rx="2"
          fill="white"
          opacity="0.7"
        />
      </g>

      {/* Abstract Shapes */}
      <path
        d="M150 450C150 450 200 480 250 450C300 420 350 480 400 450C450 420 500 480 550 450C600 420 650 450 650 450"
        stroke="#00a0b0"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <circle
          key={i}
          cx={200 + Math.random() * 400}
          cy={150 + Math.random() * 300}
          r={1 + Math.random() * 3}
          fill={Math.random() > 0.5 ? "#0056b3" : "#00a0b0"}
          opacity={0.3 + Math.random() * 0.7}
        />
      ))}
    </svg>
  );
}
