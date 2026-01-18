import banner from "@/assets/banner.png";
import heroCollage from "@/assets/hero-collage.png";

const Gallery = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(45_100%_50%_/_0.1)_0%,_transparent_60%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-4 text-primary">
          The Movement
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Join the most epic community in crypto history
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Banner image */}
          <div className="relative group overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={banner}
              alt="White History Month Banner"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Hero collage */}
          <div className="relative group overflow-hidden rounded-xl border border-border bg-card">
            <img
              src={heroCollage}
              alt="White History Month Collage"
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              emoji: "🔥",
              title: "Community Driven",
              description: "Built by the people, for the people",
            },
            {
              emoji: "💎",
              title: "Diamond Hands",
              description: "Hold strong, reap the rewards",
            },
            {
              emoji: "🚀",
              title: "To The Moon",
              description: "No limits, only gains",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 hover:shadow-[0_0_30px_hsl(45_100%_50%_/_0.1)] transition-all duration-300"
            >
              <span className="text-4xl mb-4 block">{feature.emoji}</span>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
