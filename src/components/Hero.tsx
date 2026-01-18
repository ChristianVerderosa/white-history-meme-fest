import { Copy, ExternalLink, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import trumpSign from "@/assets/trump-sign.png";

const CONTRACT_ADDRESS = "2eMYCijQY4ZMvb3VBKX2NQ3jyYAK7zYV6YGzKZStpump";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(45_100%_50%_/_0.15)_0%,_transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(30_100%_50%_/_0.1)_0%,_transparent_50%)]" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main image with glow effect */}
        <div className="relative mb-8 animate-float">
          <div className="absolute inset-0 blur-3xl bg-primary/20 rounded-full scale-75" />
          <img
            src={trumpSign}
            alt="White History Month"
            className="relative w-64 h-64 md:w-80 md:h-80 object-contain mx-auto drop-shadow-[0_0_30px_hsl(45_100%_50%_/_0.5)] rounded-xl"
            style={{ background: 'transparent' }}
          />
        </div>

        {/* Title with gradient */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
          White History Month
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The most legendary meme coin on Solana. Join the movement. 🚀
        </p>

        {/* Contract Address Box */}
        <div className="bg-card border border-border rounded-lg p-4 mb-8 max-w-2xl mx-auto backdrop-blur-sm">
          <p className="text-sm text-muted-foreground mb-2">Contract Address (CA)</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <code className="font-mono text-sm md:text-base text-primary break-all">
              {CONTRACT_ADDRESS}
            </code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="shrink-0 hover:bg-primary/20 hover:text-primary"
            >
              {copied ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <Copy className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            variant="hero"
            size="lg"
            className="text-lg px-8"
            onClick={() => window.open(`https://pump.fun/coin/${CONTRACT_ADDRESS}`, '_blank')}
          >
            Buy on Pump.fun
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-lg px-8 border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => window.open(`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`, '_blank')}
          >
            View Chart
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
