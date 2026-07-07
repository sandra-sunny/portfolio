import { createClient } from "@supabase/supabase-js";

async function getStats() {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    const { data, error } = await supabase
      .from("page_views")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data) return null;

    const total = data.length;
    const unique = new Set(data.map((r: any) => r.session_id)).size;
    const today = data.filter((r: any) =>
      new Date(r.created_at).toDateString() === new Date().toDateString()
    ).length;

    // Referrer breakdown
    const refs: Record<string, number> = {};
    data.forEach((r: any) => {
      const ref = r.referrer
        ? new URL(r.referrer).hostname.replace("www.", "")
        : "direct";
      refs[ref] = (refs[ref] || 0) + 1;
    });

    // Country breakdown
    const countries: Record<string, number> = {};
    data.forEach((r: any) => {
      const c = r.country || "Unknown";
      countries[c] = (countries[c] || 0) + 1;
    });

    // Recent 10
    const recent = data.slice(0, 10);

    return { total, unique, today, refs, countries, recent };
  } catch {
    return null;
  }
}

export default async function Dashboard() {
  const stats = await getStats();

  if (!stats) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{background:"#1C1C2E"}}>
        <div className="text-center">
          <p className="text-white text-xl mb-2">Dashboard unavailable</p>
          <p className="text-gray-400 text-sm">Supabase not configured yet. See README for setup.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8" style={{background:"#1C1C2E", fontFamily:"'DM Sans', sans-serif"}}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <a href="/" className="text-teal-400 text-sm hover:underline mb-4 block">← Back to Portfolio</a>
          <h1 className="text-3xl font-bold text-white mb-1" style={{fontFamily:"'DM Serif Display', serif"}}>
            Portfolio Analytics
          </h1>
          <p className="text-gray-400 text-sm">Who's been viewing your work</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: "Total Views", value: stats.total },
            { label: "Unique Visitors", value: stats.unique },
            { label: "Views Today", value: stats.today },
          ].map((s) => (
            <div key={s.label} className="rounded-lg p-6 border" style={{background:"#252538", borderColor:"rgba(13,148,136,0.3)"}}>
              <div className="text-4xl font-bold mb-1" style={{color:"#F59E0B", fontFamily:"'DM Serif Display', serif"}}>{s.value}</div>
              <div className="text-sm text-gray-400">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Referrers */}
          <div className="rounded-lg p-6 border" style={{background:"#252538", borderColor:"rgba(255,255,255,0.07)"}}>
            <h3 className="text-white font-semibold mb-4">Traffic Sources</h3>
            <div className="space-y-3">
              {Object.entries(stats.refs)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 8)
                .map(([ref, count]) => (
                  <div key={ref} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{ref}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 rounded-full bg-gray-700">
                        <div className="h-1.5 rounded-full"
                          style={{background:"#0D9488", width:`${(count/stats.total)*100}%`}} />
                      </div>
                      <span className="text-xs text-gray-400 w-6 text-right">{count}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Countries */}
          <div className="rounded-lg p-6 border" style={{background:"#252538", borderColor:"rgba(255,255,255,0.07)"}}>
            <h3 className="text-white font-semibold mb-4">Visitors by Country</h3>
            <div className="space-y-3">
              {Object.entries(stats.countries)
                .sort(([,a], [,b]) => b - a)
                .slice(0, 8)
                .map(([country, count]) => (
                  <div key={country} className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{country}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1.5 rounded-full bg-gray-700">
                        <div className="h-1.5 rounded-full"
                          style={{background:"#7D3C98", width:`${(count/stats.total)*100}%`}} />
                      </div>
                      <span className="text-xs text-gray-400 w-6 text-right">{count}</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Recent visits */}
        <div className="rounded-lg border overflow-hidden" style={{background:"#252538", borderColor:"rgba(255,255,255,0.07)"}}>
          <div className="px-6 py-4 border-b" style={{borderColor:"rgba(255,255,255,0.07)"}}>
            <h3 className="text-white font-semibold">Recent Visits</h3>
          </div>
          <div className="divide-y" style={{borderColor:"rgba(255,255,255,0.05)"}}>
            {stats.recent.map((r: any) => (
              <div key={r.id} className="px-6 py-3 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{background:"#0D9488"}} />
                  <span className="text-sm text-gray-300">{r.referrer ? new URL(r.referrer).hostname : "direct"}</span>
                </div>
                <span className="text-xs text-gray-500">{r.country || "—"}</span>
                <span className="text-xs text-gray-500 tabular-nums">
                  {new Date(r.created_at).toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
