import { useMemo, useState } from "react";
import { TrendingUp, Wallet, CalendarClock, Sun } from "lucide-react";
import { Reveal } from "./Reveal";

const SYSTEMS = [
  { label: "6kW", cost: 109900, offset: 0.55 },
  { label: "8kW", cost: 149900, offset: 0.7 },
  { label: "15kW", cost: 289900, offset: 0.9 },
];

const YEARS = 10;
const TARIFF_ESCALATION = 0.1; // annual grid price increase

const rand = (n: number) => `R ${Math.round(n).toLocaleString("en-ZA")}`;

export function RoiCalculator() {
  const [bill, setBill] = useState(3500);
  const [sysIdx, setSysIdx] = useState(1);

  const data = useMemo(() => {
    const sys = SYSTEMS[sysIdx];
    const monthlySaving = bill * sys.offset;
    const annualSaving = monthlySaving * 12;
    const payback = sys.cost / annualSaving;

    // Cumulative cost with vs without solar over YEARS, escalating tariff
    const points: { year: number; withSolar: number; without: number }[] = [];
    let cumGrid = 0;
    let cumSolarRemainingBill = sys.cost; // upfront
    for (let y = 1; y <= YEARS; y++) {
      const esc = Math.pow(1 + TARIFF_ESCALATION, y - 1);
      cumGrid += bill * 12 * esc;
      cumSolarRemainingBill += bill * (1 - sys.offset) * 12 * esc;
      points.push({ year: y, withSolar: cumSolarRemainingBill, without: cumGrid });
    }
    const tenYearSaving = points[YEARS - 1].without - points[YEARS - 1].withSolar;

    return { sys, monthlySaving, payback, points, tenYearSaving };
  }, [bill, sysIdx]);

  const maxVal = Math.max(...data.points.map((p) => p.without));
  const w = 520;
  const h = 220;
  const pad = { l: 8, r: 8, t: 16, b: 24 };
  const innerW = w - pad.l - pad.r;
  const innerH = h - pad.t - pad.b;
  const x = (i: number) => pad.l + (i / (YEARS - 1)) * innerW;
  const y = (v: number) => pad.t + innerH - (v / maxVal) * innerH;

  const line = (key: "withSolar" | "without") =>
    data.points.map((p, i) => `${i === 0 ? "M" : "L"} ${x(i)} ${y(p[key])}`).join(" ");

  const area = `${line("without")} L ${x(YEARS - 1)} ${pad.t + innerH} L ${x(0)} ${pad.t + innerH} Z`;

  return (
    <section id="calculator" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            Interactive ROI Calculator
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-foreground sm:text-4xl md:text-5xl">
            See Your Solar Savings
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estimate how much you could save by switching to solar. Adjust your
            bill and system size below.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          {/* Controls + stats */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col gap-7 rounded-3xl border border-border bg-card p-7">
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-semibold text-foreground">
                    Monthly electricity bill
                  </label>
                  <span className="font-display text-lg font-extrabold text-primary">
                    {rand(bill)}
                  </span>
                </div>
                <input
                  type="range"
                  min={800}
                  max={20000}
                  step={100}
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="mt-3 w-full accent-[oklch(0.55_0.14_162)]"
                />
                <div className="mt-1 flex justify-between text-[11px] text-muted-foreground">
                  <span>R 800</span>
                  <span>R 20,000</span>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground">
                  System size
                </label>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {SYSTEMS.map((s, i) => (
                    <button
                      key={s.label}
                      onClick={() => setSysIdx(i)}
                      className={`rounded-xl border px-3 py-3 text-sm font-bold transition-all ${
                        sysIdx === i
                          ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-glow)]"
                          : "border-border bg-secondary text-foreground hover:border-primary/40"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl bg-secondary p-4">
                  <Wallet className="h-5 w-5 text-primary" />
                  <p className="mt-2 font-display text-xl font-extrabold text-foreground">
                    {rand(data.monthlySaving)}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Est. monthly saving
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-4">
                  <CalendarClock className="h-5 w-5 text-gold" />
                  <p className="mt-2 font-display text-xl font-extrabold text-foreground">
                    {data.payback.toFixed(1)} yrs
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    Payback period
                  </p>
                </div>
                <div className="rounded-2xl bg-[var(--gradient-emerald)] p-4 text-primary-foreground">
                  <TrendingUp className="h-5 w-5" />
                  <p className="mt-2 font-display text-xl font-extrabold">
                    {rand(data.tenYearSaving)}
                  </p>
                  <p className="text-[11px] opacity-90">10-year saving</p>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-6 py-3.5 text-sm font-bold text-gold-foreground transition-transform hover:scale-[1.02]"
              >
                <Sun className="h-4 w-4" />
                Get my exact quote
              </a>
            </div>
          </Reveal>

          {/* Chart */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-lg font-bold text-foreground">
                  Cumulative electricity cost over {YEARS} years
                </h3>
                <div className="flex items-center gap-4 text-xs font-medium">
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                    Without solar
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    With EcoFrost
                  </span>
                </div>
              </div>

              <div className="mt-4 flex-1">
                <svg
                  viewBox={`0 0 ${w} ${h}`}
                  className="h-auto w-full"
                  role="img"
                  aria-label="Graph comparing electricity cost with and without solar over ten years"
                >
                  <defs>
                    <linearGradient id="grid-fill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.58 0.22 27)" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="oklch(0.58 0.22 27)" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {[0.25, 0.5, 0.75, 1].map((g) => (
                    <line
                      key={g}
                      x1={pad.l}
                      x2={w - pad.r}
                      y1={pad.t + innerH - g * innerH}
                      y2={pad.t + innerH - g * innerH}
                      stroke="oklch(0.9 0.01 160)"
                      strokeWidth={1}
                    />
                  ))}

                  <path d={area} fill="url(#grid-fill)" />
                  <path
                    d={line("without")}
                    fill="none"
                    stroke="oklch(0.58 0.22 27)"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />
                  <path
                    d={line("withSolar")}
                    fill="none"
                    stroke="oklch(0.55 0.14 162)"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                  />

                  {[0, 4, 9].map((i) => (
                    <text
                      key={i}
                      x={x(i)}
                      y={h - 6}
                      textAnchor="middle"
                      className="fill-muted-foreground"
                      style={{ fontSize: 11 }}
                    >
                      Yr {i + 1}
                    </text>
                  ))}
                </svg>
              </div>

              <div className="mt-4 rounded-2xl bg-secondary px-5 py-4 text-center">
                <p className="text-sm text-muted-foreground">
                  By year {YEARS}, you could keep{" "}
                  <span className="font-display font-extrabold text-primary">
                    {rand(data.tenYearSaving)}
                  </span>{" "}
                  in your pocket instead of paying the grid.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Estimates only, based on a {Math.round(TARIFF_ESCALATION * 100)}% annual
          tariff increase. Actual savings depend on usage and site conditions.
        </p>
      </div>
    </section>
  );
}
