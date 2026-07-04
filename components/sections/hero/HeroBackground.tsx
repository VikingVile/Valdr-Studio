const columnGroups = [
  {
    side: "left",
    offset: "2vw",
    opacity: 0.13,
    streams: [
      { animation: "valdrBinaryDownA", duration: "22s", delay: "-4s", sequence: "010110100101011001011010" },
      { animation: "valdrBinaryUpB", duration: "31s", delay: "-16s", sequence: "110010101101001011001010" },
      { animation: "valdrBinaryDownC", duration: "27s", delay: "-9s", sequence: "001011010010110100101101" },
      { animation: "valdrBinaryUpD", duration: "36s", delay: "-21s", sequence: "101001011010010110100101" },
    ],
  },
  {
    side: "left",
    offset: "4.9vw",
    opacity: 0.11,
    streams: [
      { animation: "valdrBinaryUpA", duration: "34s", delay: "-18s", sequence: "101101001010110010110100" },
      { animation: "valdrBinaryDownB", duration: "25s", delay: "-7s", sequence: "010010110100101101001011" },
      { animation: "valdrBinaryUpC", duration: "39s", delay: "-25s", sequence: "110100101101001010110010" },
      { animation: "valdrBinaryDownD", duration: "29s", delay: "-13s", sequence: "001101001011010010101101" },
    ],
  },
  {
    side: "left",
    offset: "7.8vw",
    opacity: 0.095,
    streams: [
      { animation: "valdrBinaryDownD", duration: "41s", delay: "-29s", sequence: "011010010110100101011001" },
      { animation: "valdrBinaryUpA", duration: "28s", delay: "-11s", sequence: "100101101001011010010110" },
      { animation: "valdrBinaryDownB", duration: "35s", delay: "-20s", sequence: "010110010101101001011010" },
      { animation: "valdrBinaryUpC", duration: "24s", delay: "-6s", sequence: "111001010110100101100101" },
    ],
  },
  {
    side: "left",
    offset: "15vw",
    opacity: 0.075,
    streams: [
      { animation: "valdrBinaryUpD", duration: "30s", delay: "-12s", sequence: "010101101001011001011010" },
      { animation: "valdrBinaryDownA", duration: "44s", delay: "-33s", sequence: "101101001011010010110010" },
      { animation: "valdrBinaryUpB", duration: "26s", delay: "-8s", sequence: "001011010110010101101001" },
      { animation: "valdrBinaryDownC", duration: "37s", delay: "-19s", sequence: "110010110100101101001010" },
    ],
  },
  {
    side: "right",
    offset: "2vw",
    opacity: 0.13,
    streams: [
      { animation: "valdrBinaryUpA", duration: "23s", delay: "-6s", sequence: "101001011010010110010101" },
      { animation: "valdrBinaryDownB", duration: "32s", delay: "-18s", sequence: "010101101001011010010110" },
      { animation: "valdrBinaryUpC", duration: "28s", delay: "-10s", sequence: "110100101011001011010010" },
      { animation: "valdrBinaryDownD", duration: "37s", delay: "-24s", sequence: "001010110100101101001011" },
    ],
  },
  {
    side: "right",
    offset: "4.9vw",
    opacity: 0.11,
    streams: [
      { animation: "valdrBinaryDownA", duration: "35s", delay: "-21s", sequence: "011001011010010101101001" },
      { animation: "valdrBinaryUpB", duration: "26s", delay: "-8s", sequence: "101101001011001010110100" },
      { animation: "valdrBinaryDownC", duration: "40s", delay: "-30s", sequence: "010110100101101001011001" },
      { animation: "valdrBinaryUpD", duration: "30s", delay: "-14s", sequence: "110010101101001010110100" },
    ],
  },
  {
    side: "right",
    offset: "7.8vw",
    opacity: 0.095,
    streams: [
      { animation: "valdrBinaryUpD", duration: "42s", delay: "-31s", sequence: "001101001011010010101101" },
      { animation: "valdrBinaryDownA", duration: "29s", delay: "-12s", sequence: "010010110100101101001011" },
      { animation: "valdrBinaryUpB", duration: "36s", delay: "-22s", sequence: "101001011010010110100101" },
      { animation: "valdrBinaryDownC", duration: "25s", delay: "-7s", sequence: "110100101011001011010010" },
    ],
  },
  {
    side: "right",
    offset: "10.7vw",
    opacity: 0.075,
    streams: [
      { animation: "valdrBinaryDownD", duration: "31s", delay: "-16s", sequence: "010110010101101001011010" },
      { animation: "valdrBinaryUpA", duration: "45s", delay: "-35s", sequence: "111001010110100101100101" },
      { animation: "valdrBinaryDownB", duration: "27s", delay: "-9s", sequence: "011010010110100101011001" },
      { animation: "valdrBinaryUpC", duration: "38s", delay: "-26s", sequence: "100101101001011010010110" },
    ],
  },
] as const;

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-dvh w-screen max-w-full overflow-hidden xl:block"
      aria-hidden="true"
    >
      <style>{`
        @keyframes valdrBinaryDownA {
          0% { transform: translate3d(-1px, -50%, 0); }
          50% { transform: translate3d(1px, 0%, 0); }
          100% { transform: translate3d(-1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownB {
          0% { transform: translate3d(1px, -50%, 0); }
          45% { transform: translate3d(-2px, -3%, 0); }
          100% { transform: translate3d(1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownC {
          0% { transform: translate3d(0px, -50%, 0); }
          55% { transform: translate3d(2px, 2%, 0); }
          100% { transform: translate3d(-1px, 50%, 0); }
        }

        @keyframes valdrBinaryDownD {
          0% { transform: translate3d(2px, -50%, 0); }
          50% { transform: translate3d(-1px, 0%, 0); }
          100% { transform: translate3d(2px, 50%, 0); }
        }

        @keyframes valdrBinaryUpA {
          0% { transform: translate3d(1px, 50%, 0); }
          50% { transform: translate3d(-1px, 0%, 0); }
          100% { transform: translate3d(1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpB {
          0% { transform: translate3d(-1px, 50%, 0); }
          45% { transform: translate3d(2px, 3%, 0); }
          100% { transform: translate3d(-1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpC {
          0% { transform: translate3d(0px, 50%, 0); }
          55% { transform: translate3d(-2px, -2%, 0); }
          100% { transform: translate3d(1px, -50%, 0); }
        }

        @keyframes valdrBinaryUpD {
          0% { transform: translate3d(-2px, 50%, 0); }
          50% { transform: translate3d(1px, 0%, 0); }
          100% { transform: translate3d(-2px, -50%, 0); }
        }
      `}</style>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.62) 25%, rgba(0,0,0,0.24) 29%, transparent 34%, transparent 66%, rgba(0,0,0,0.24) 71%, rgba(0,0,0,0.62) 75%, black 80%, black 100%)",
          maskImage:
            "linear-gradient(to right, black 0%, black 20%, rgba(0,0,0,0.62) 25%, rgba(0,0,0,0.24) 29%, transparent 34%, transparent 66%, rgba(0,0,0,0.24) 71%, rgba(0,0,0,0.62) 75%, black 80%, black 100%)",
        }}
      >
        {columnGroups.map((group, groupIndex) => (
          <div
            key={`${group.side}-${group.offset}-${groupIndex}`}
            className="absolute top-[-50vh] h-[200vh] w-[46px] select-none overflow-hidden"
            style={
              group.side === "left"
                ? { left: group.offset, opacity: group.opacity }
                : { right: group.offset, opacity: group.opacity }
            }
          >
            {group.streams.map((stream, streamIndex) => (
              <div
                key={`${stream.animation}-${stream.duration}-${streamIndex}`}
                className="absolute top-0 h-full w-4 whitespace-pre-wrap break-all font-mono text-[11px] font-medium leading-[1.9] tracking-[0.45em] text-white/90 blur-[0.12px] [writing-mode:vertical-rl]"
                style={{
                  left: `${streamIndex * 13}px`,
                  animation: `${stream.animation} ${stream.duration} linear infinite`,
                  animationDelay: stream.delay,
                }}
              >
                {(stream.sequence.repeat(22) + stream.sequence.repeat(22))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
