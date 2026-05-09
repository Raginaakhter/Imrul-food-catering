function Logo() {
  return (
    <svg width="100%" viewBox="0 0 680 220">
      {/* Outer ring */}
      <circle cx="100" cy="110" r="58" fill="none" stroke="#1d4ed8" strokeWidth="0.8"/>
      <circle cx="100" cy="110" r="52" fill="none" stroke="#1d4ed8" strokeWidth="0.3" strokeDasharray="3 5"/>

      {/* Fork */}
      <g stroke="#1d4ed8" strokeLinecap="round" fill="none">
        <line x1="91" y1="76" x2="91" y2="144" strokeWidth="1.4"/>
        <line x1="87" y1="76" x2="87" y2="96" strokeWidth="1.2"/>
        <line x1="95" y1="76" x2="95" y2="96" strokeWidth="1.2"/>
        <path d="M87 96 Q91 104 95 96" strokeWidth="1.2"/>
      </g>

      {/* Knife */}
      <g stroke="#1d4ed8" strokeLinecap="round" fill="none">
        <line x1="109" y1="76" x2="109" y2="144" strokeWidth="1.4"/>
        <path d="M109 76 Q116 86 109 100" strokeWidth="1.2"/>
      </g>

      {/* Ornaments */}
      <polygon points="100,66 103,70 100,74 97,70" fill="#1d4ed8" opacity="0.6"/>
      <polygon points="100,146 103,150 100,154 97,150" fill="#1d4ed8" opacity="0.6"/>

      {/* IMRUL */}
      <text x="186" y="94"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="52" fontWeight="600" fontStyle="italic"
        fill="#1a1410" letterSpacing="4">Imrul</text>

      <line x1="186" y1="104" x2="560" y2="104" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.5"/>

      {/* Exclusive */}
      <text x="186" y="148"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="38" fontWeight="300" fontStyle="italic"
        fill="#1d4ed8" letterSpacing="2">Exclusive</text>

      <line x1="186" y1="158" x2="560" y2="158" stroke="#1d4ed8" strokeWidth="0.6" opacity="0.5"/>

      {/* CATERING */}
      <text x="189" y="180"
        fontFamily="Jost, sans-serif"
        fontSize="11" fontWeight="500"
        fill="#6b6258" letterSpacing="8">CATERING</text>

      <polygon points="560,126 564,130 560,134 556,130" fill="#1d4ed8" opacity="0.5"/>
    </svg>
  );
}
export default Logo;