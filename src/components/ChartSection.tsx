const CONTRACT_ADDRESS = "2eMYCijQY4ZMvb3VBKX2NQ3jyYAK7zYV6YGzKZStpump";

const ChartSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          Live Chart
        </h2>
        <p className="text-center text-muted-foreground mb-10">
          Real-time price data from DEXScreener
        </p>

        {/* DEXScreener Embed */}
        <div className="relative rounded-xl overflow-hidden border border-border bg-card shadow-[0_0_60px_hsl(45_100%_50%_/_0.1)]">
          <iframe
            src={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}?embed=1&theme=dark&trades=0&info=0`}
            title="DEXScreener Chart"
            className="w-full h-[500px] md:h-[600px]"
            style={{ border: 'none' }}
          />
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { label: "Network", value: "Solana" },
            { label: "Type", value: "Meme Coin" },
            { label: "Platform", value: "Pump.fun" },
            { label: "Community", value: "Growing 🚀" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-border rounded-lg p-4 text-center hover:border-primary/50 transition-colors"
            >
              <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
              <p className="text-lg font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChartSection;
