import { ExternalLink } from "lucide-react";

const CONTRACT_ADDRESS = "2eMYCijQY4ZMvb3VBKX2NQ3jyYAK7zYV6YGzKZStpump";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              White History Month
            </h3>
            <p className="text-sm text-muted-foreground">
              The legendary meme coin on Solana
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://pump.fun/coin/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Pump.fun
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`https://dexscreener.com/solana/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              DEXScreener
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={`https://solscan.io/token/${CONTRACT_ADDRESS}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              Solscan
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            This is a meme coin. Not financial advice. Do your own research. 🐸
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
