export default function HeroBannerMobile() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="390"
      height="920"
      viewBox="0 0 390 920"
      role="img"
    >
      <title>SkillUp Online Learning Platform — Mobile Hero Banner</title>
      <desc>
        Mobile hero banner for an online learning platform with teacher card,
        student cards, course tags, CTA buttons and stats
      </desc>

      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stop-color="#0d0d2b" />
          <stop offset="45%" stop-color="#0f1635" />
          <stop offset="75%" stop-color="#0d1d3a" />
          <stop offset="100%" stop-color="#081528" />
        </linearGradient>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#4f46e5" />
        </linearGradient>
        <linearGradient
          id="teacherAvatarGrad"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#8b5cf6" />
        </linearGradient>
        <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#6366f1" />
          <stop offset="100%" stop-color="#10b981" />
        </linearGradient>
        <radialGradient id="glowTop" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6366f1" stop-opacity="0.22" />
          <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="glowBottom" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.14" />
          <stop offset="100%" stop-color="#10b981" stop-opacity="0" />
        </radialGradient>
        <clipPath id="accentClip">
          <text
            x="22"
            y="182"
            font-family="'Segoe UI', Arial Black, sans-serif"
            font-size="34"
            font-weight="800"
          >
            Shape Your Future
          </text>
        </clipPath>
      </defs>

      <rect width="390" height="920" rx="20" fill="url(#bgGrad)" />

      <ellipse cx="340" cy="30" rx="200" ry="200" fill="url(#glowTop)" />

      <ellipse cx="80" cy="780" rx="160" ry="160" fill="url(#glowBottom)" />

      <g opacity="0.055">
        <g id="dr">
          <circle cx="28" cy="0" r="1" fill="white" />
          <circle cx="56" cy="0" r="1" fill="white" />
          <circle cx="84" cy="0" r="1" fill="white" />
          <circle cx="112" cy="0" r="1" fill="white" />
          <circle cx="140" cy="0" r="1" fill="white" />
          <circle cx="168" cy="0" r="1" fill="white" />
          <circle cx="196" cy="0" r="1" fill="white" />
          <circle cx="224" cy="0" r="1" fill="white" />
          <circle cx="252" cy="0" r="1" fill="white" />
          <circle cx="280" cy="0" r="1" fill="white" />
          <circle cx="308" cy="0" r="1" fill="white" />
          <circle cx="336" cy="0" r="1" fill="white" />
          <circle cx="364" cy="0" r="1" fill="white" />
        </g>
        <use href="#dr" transform="translate(0,28)" />
        <use href="#dr" transform="translate(0,56)" />
        <use href="#dr" transform="translate(0,84)" />
        <use href="#dr" transform="translate(0,112)" />
        <use href="#dr" transform="translate(0,140)" />
        <use href="#dr" transform="translate(0,168)" />
        <use href="#dr" transform="translate(0,196)" />
        <use href="#dr" transform="translate(0,224)" />
        <use href="#dr" transform="translate(0,252)" />
        <use href="#dr" transform="translate(0,280)" />
        <use href="#dr" transform="translate(0,308)" />
        <use href="#dr" transform="translate(0,336)" />
        <use href="#dr" transform="translate(0,364)" />
        <use href="#dr" transform="translate(0,392)" />
        <use href="#dr" transform="translate(0,420)" />
        <use href="#dr" transform="translate(0,448)" />
        <use href="#dr" transform="translate(0,476)" />
        <use href="#dr" transform="translate(0,504)" />
        <use href="#dr" transform="translate(0,532)" />
        <use href="#dr" transform="translate(0,560)" />
        <use href="#dr" transform="translate(0,588)" />
        <use href="#dr" transform="translate(0,616)" />
        <use href="#dr" transform="translate(0,644)" />
        <use href="#dr" transform="translate(0,672)" />
        <use href="#dr" transform="translate(0,700)" />
        <use href="#dr" transform="translate(0,728)" />
        <use href="#dr" transform="translate(0,756)" />
        <use href="#dr" transform="translate(0,784)" />
        <use href="#dr" transform="translate(0,812)" />
        <use href="#dr" transform="translate(0,840)" />
        <use href="#dr" transform="translate(0,868)" />
        <use href="#dr" transform="translate(0,896)" />
      </g>

      <rect
        x="22"
        y="28"
        width="196"
        height="28"
        rx="14"
        fill="#6366f1"
        fill-opacity="0.14"
        stroke="#6366f1"
        stroke-opacity="0.32"
        stroke-width="1"
      />
      <circle cx="40" cy="42" r="5" fill="#6366f1" />
      <text
        x="52"
        y="47"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#a5b4fc"
        letter-spacing="0.7"
      >
        ONLINE LEARNING PLATFORM
      </text>

      <text
        x="22"
        y="100"
        font-family="'Segoe UI', Arial Black, sans-serif"
        font-size="34"
        font-weight="800"
        fill="white"
      >
        Learn Skills That
      </text>

      <rect
        x="22"
        y="108"
        width="330"
        height="46"
        fill="url(#textGrad)"
        clip-path="url(#accentClip)"
      />

      <text
        x="22"
        y="210"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="13"
        fill="white"
        fill-opacity="0.48"
      >
        Expert-led courses in Web Dev, Design, Marketing
      </text>
      <text
        x="22"
        y="228"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="13"
        fill="white"
        fill-opacity="0.48"
      >
        &amp; more. Watch lessons at your own pace.
      </text>

      <rect
        x="22"
        y="246"
        width="84"
        height="26"
        rx="7"
        fill="#6366f1"
        fill-opacity="0.1"
        stroke="#6366f1"
        stroke-opacity="0.28"
        stroke-width="1"
      />
      <rect x="32" y="256" width="8" height="8" rx="2" fill="#6366f1" />
      <text
        x="45"
        y="264"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#a5b4fc"
      >
        Web Dev
      </text>

      <rect
        x="112"
        y="246"
        width="90"
        height="26"
        rx="7"
        fill="#ec4899"
        fill-opacity="0.1"
        stroke="#ec4899"
        stroke-opacity="0.28"
        stroke-width="1"
      />
      <rect x="122" y="256" width="8" height="8" rx="2" fill="#ec4899" />
      <text
        x="135"
        y="264"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#f9a8d4"
      >
        UI/UX Design
      </text>

      <rect
        x="208"
        y="246"
        width="82"
        height="26"
        rx="7"
        fill="#f59e0b"
        fill-opacity="0.1"
        stroke="#f59e0b"
        stroke-opacity="0.28"
        stroke-width="1"
      />
      <rect x="218" y="256" width="8" height="8" rx="2" fill="#f59e0b" />
      <text
        x="231"
        y="264"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#fcd34d"
      >
        Marketing
      </text>

      <rect
        x="296"
        y="246"
        width="62"
        height="26"
        rx="7"
        fill="white"
        fill-opacity="0.05"
        stroke="white"
        stroke-opacity="0.1"
        stroke-width="1"
      />
      <text
        x="308"
        y="264"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="500"
        fill="white"
        fill-opacity="0.38"
      >
        +40 more
      </text>

      <rect
        x="22"
        y="288"
        width="169"
        height="44"
        rx="11"
        fill="url(#btnGrad)"
      />
      <text x="40" y="315" font-family="Arial" font-size="15" fill="white">
        🚀
      </text>
      <text
        x="62"
        y="315"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="13"
        font-weight="700"
        fill="white"
      >
        Explore Courses
      </text>

      <rect
        x="199"
        y="288"
        width="169"
        height="44"
        rx="11"
        fill="none"
        stroke="white"
        stroke-opacity="0.14"
        stroke-width="1"
      />
      <circle cx="220" cy="310" r="10" fill="white" fill-opacity="0.14" />
      <polygon
        points="216,304 216,316 227,310"
        fill="white"
        fill-opacity="0.85"
      />
      <text
        x="234"
        y="316"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="13"
        font-weight="500"
        fill="white"
        fill-opacity="0.65"
      >
        Watch Demo
      </text>

      <rect
        x="100"
        y="348"
        width="190"
        height="26"
        rx="13"
        fill="#10b981"
        fill-opacity="0.1"
        stroke="#10b981"
        stroke-opacity="0.28"
        stroke-width="1"
      />
      <circle cx="118" cy="361" r="8" fill="#10b981" fill-opacity="0.18" />
      <text x="114" y="365" font-family="Arial" font-size="9" fill="#6ee7b7">
        ✨
      </text>
      <text
        x="130"
        y="366"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#6ee7b7"
      >
        New: AI &amp; ML Track
      </text>

      <rect
        x="100"
        y="386"
        width="190"
        height="218"
        rx="18"
        fill="#1e2147"
        stroke="#6366f1"
        stroke-opacity="0.32"
        stroke-width="1"
      />

      <circle cx="195" cy="442" r="38" fill="url(#teacherAvatarGrad)" />

      <ellipse cx="195" cy="440" rx="16" ry="18" fill="#f3c4a0" />
      <path
        d="M179 436 Q181 421 195 419 Q209 421 211 436 Q207 428 195 428 Q183 428 179 436Z"
        fill="#3d2b1f"
      />
      <ellipse
        cx="195"
        cy="462"
        rx="14"
        ry="9"
        fill="#4f46e5"
        fill-opacity="0.9"
      />
      <rect x="191" y="453" width="8" height="7" rx="2" fill="#f3c4a0" />
      <path d="M191 458 L187 467 L195 463 L203 467 L199 458Z" fill="#6366f1" />
      <ellipse cx="189" cy="439" rx="2" ry="2.2" fill="#2d1a0e" />
      <ellipse cx="201" cy="439" rx="2" ry="2.2" fill="#2d1a0e" />
      <rect
        x="186"
        y="436"
        width="6"
        height="5"
        rx="2.5"
        fill="none"
        stroke="#6366f1"
        stroke-width="1.2"
      />
      <rect
        x="197"
        y="436"
        width="6"
        height="5"
        rx="2.5"
        fill="none"
        stroke="#6366f1"
        stroke-width="1.2"
      />
      <line
        x1="192"
        y1="438"
        x2="197"
        y2="438"
        stroke="#6366f1"
        stroke-width="1.2"
      />
      <path
        d="M190 446 Q195 449 200 446"
        stroke="#c48a6a"
        stroke-width="1.1"
        fill="none"
        stroke-linecap="round"
      />

      <circle cx="224" cy="468" r="8" fill="#1e2147" />
      <circle cx="224" cy="468" r="6" fill="#10b981" />
      <circle cx="224" cy="468" r="3.5" fill="white" />

      <text
        x="195"
        y="492"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="12"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        Prof. Daniel M.
      </text>
      <text
        x="195"
        y="506"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.38"
        text-anchor="middle"
      >
        Lead Instructor · Web Dev
      </text>

      <rect
        x="114"
        y="516"
        width="162"
        height="52"
        rx="8"
        fill="white"
        fill-opacity="0.06"
      />
      <text
        x="124"
        y="530"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.32"
      >
        NOW TEACHING
      </text>
      <text
        x="124"
        y="544"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="500"
        fill="white"
        fill-opacity="0.82"
      >
        Advanced React Hooks
      </text>
      <rect
        x="124"
        y="550"
        width="142"
        height="3"
        rx="2"
        fill="white"
        fill-opacity="0.07"
      />
      <rect
        x="124"
        y="550"
        width="96"
        height="3"
        rx="2"
        fill="url(#progressGrad)"
      />
      <text
        x="124"
        y="577"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.32"
      >
        👥 1,240 students enrolled
      </text>

      <rect
        x="22"
        y="620"
        width="169"
        height="62"
        rx="13"
        fill="#111630"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />
      <circle cx="52" cy="651" r="18" fill="#6366f1" />
      <text
        x="52"
        y="656"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        AK
      </text>
      <text
        x="76"
        y="644"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="600"
        fill="white"
        fill-opacity="0.85"
      >
        Arjun K.
      </text>
      <text
        x="76"
        y="657"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
      >
        React Advanced
      </text>
      <rect
        x="76"
        y="663"
        width="46"
        height="13"
        rx="3"
        fill="#6366f1"
        fill-opacity="0.15"
      />
      <text
        x="80"
        y="673"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="8"
        font-weight="600"
        fill="#a5b4fc"
      >
        Web Dev
      </text>

      <rect
        x="199"
        y="620"
        width="169"
        height="62"
        rx="13"
        fill="#111630"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />
      <circle cx="229" cy="651" r="18" fill="#ec4899" />
      <text
        x="229"
        y="656"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        SR
      </text>
      <text
        x="253"
        y="644"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="600"
        fill="white"
        fill-opacity="0.85"
      >
        Sofia R.
      </text>
      <text
        x="253"
        y="657"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
      >
        Figma Mastery
      </text>
      <rect
        x="253"
        y="663"
        width="42"
        height="13"
        rx="3"
        fill="#ec4899"
        fill-opacity="0.12"
      />
      <text
        x="257"
        y="673"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="8"
        font-weight="600"
        fill="#f9a8d4"
      >
        Design
      </text>

      <rect
        x="22"
        y="692"
        width="169"
        height="62"
        rx="13"
        fill="#111630"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />
      <circle cx="52" cy="723" r="18" fill="#f59e0b" />
      <text
        x="52"
        y="728"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        LM
      </text>
      <text
        x="76"
        y="716"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="600"
        fill="white"
        fill-opacity="0.85"
      >
        Lena M.
      </text>
      <text
        x="76"
        y="729"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
      >
        SEO &amp; Growth
      </text>
      <rect
        x="76"
        y="735"
        width="52"
        height="13"
        rx="3"
        fill="#f59e0b"
        fill-opacity="0.12"
      />
      <text
        x="80"
        y="745"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="8"
        font-weight="600"
        fill="#fcd34d"
      >
        Marketing
      </text>

      <rect
        x="199"
        y="692"
        width="169"
        height="62"
        rx="13"
        fill="#111630"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />
      <circle cx="229" cy="723" r="18" fill="#10b981" />
      <text
        x="229"
        y="728"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        JT
      </text>
      <text
        x="253"
        y="716"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="11"
        font-weight="600"
        fill="white"
        fill-opacity="0.85"
      >
        James T.
      </text>
      <text
        x="253"
        y="729"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
      >
        Python Bootcamp
      </text>
      <rect
        x="253"
        y="735"
        width="46"
        height="13"
        rx="3"
        fill="#10b981"
        fill-opacity="0.12"
      />
      <text
        x="257"
        y="745"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="8"
        font-weight="600"
        fill="#6ee7b7"
      >
        Data Sci
      </text>

      <rect
        x="93"
        y="768"
        width="204"
        height="26"
        rx="13"
        fill="#10b981"
        fill-opacity="0.1"
        stroke="#10b981"
        stroke-opacity="0.28"
        stroke-width="1"
      />
      <circle cx="111" cy="781" r="8" fill="#10b981" fill-opacity="0.18" />
      <text x="107" y="785" font-family="Arial" font-size="9" fill="#6ee7b7">
        🔥
      </text>
      <text
        x="123"
        y="786"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="10"
        font-weight="600"
        fill="#6ee7b7"
      >
        38 students enrolled today
      </text>

      <line
        x1="22"
        y1="808"
        x2="368"
        y2="808"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />

      <text
        x="57"
        y="836"
        font-family="'Segoe UI', Arial Black, sans-serif"
        font-size="18"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        120K+
      </text>
      <text
        x="57"
        y="852"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
        text-anchor="middle"
        letter-spacing="0.6"
      >
        STUDENTS
      </text>

      <line
        x1="112"
        y1="820"
        x2="112"
        y2="856"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />

      <text
        x="152"
        y="836"
        font-family="'Segoe UI', Arial Black, sans-serif"
        font-size="18"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        850+
      </text>
      <text
        x="152"
        y="852"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
        text-anchor="middle"
        letter-spacing="0.6"
      >
        COURSES
      </text>

      <line
        x1="204"
        y1="820"
        x2="204"
        y2="856"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />

      <text
        x="248"
        y="836"
        font-family="'Segoe UI', Arial Black, sans-serif"
        font-size="18"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        4.9★
      </text>
      <text
        x="248"
        y="852"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
        text-anchor="middle"
        letter-spacing="0.6"
      >
        RATING
      </text>

      <line
        x1="298"
        y1="820"
        x2="298"
        y2="856"
        stroke="white"
        stroke-opacity="0.07"
        stroke-width="1"
      />

      <text
        x="338"
        y="836"
        font-family="'Segoe UI', Arial Black, sans-serif"
        font-size="18"
        font-weight="700"
        fill="white"
        text-anchor="middle"
      >
        98%
      </text>
      <text
        x="338"
        y="852"
        font-family="'Segoe UI', Arial, sans-serif"
        font-size="9"
        fill="white"
        fill-opacity="0.36"
        text-anchor="middle"
        letter-spacing="0.6"
      >
        DONE
      </text>

      <circle cx="360" cy="110" r="3.5" fill="#fbbf24" opacity="0.55" />
      <circle cx="360" cy="100" r="1.3" fill="#fbbf24" opacity="0.35" />
      <circle cx="350" cy="110" r="1.3" fill="#fbbf24" opacity="0.35" />
      <circle cx="370" cy="110" r="1.3" fill="#fbbf24" opacity="0.35" />
      <circle cx="360" cy="120" r="1.3" fill="#fbbf24" opacity="0.35" />

      <circle cx="30" cy="560" r="3" fill="#fbbf24" opacity="0.45" />
      <circle cx="30" cy="551" r="1.2" fill="#fbbf24" opacity="0.3" />
      <circle cx="21" cy="560" r="1.2" fill="#fbbf24" opacity="0.3" />
      <circle cx="39" cy="560" r="1.2" fill="#fbbf24" opacity="0.3" />
    </svg>
  );
}
