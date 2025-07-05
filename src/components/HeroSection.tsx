import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-gradient-to-br from-background via-accent/20 to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <p className="mb-6 text-lg">
                Portfolio {' '}
                <a
                  href="https://davitgadyan.github.io/portfolio_app_upwork/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  David Gadyan
                </a>
              </p>
              </Badge>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">S1mple AI</span> that seamlessly
                <br />
                connects with your
                <br />
                <span className="gradient-text">custom data, management, trading</span>
                <br />
                <span className="gradient-text">and other tools</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Advanced AI Agent platform created by David G. Connects data, 
                management tools, trading systems, and deploy powerful analytics for all your use cases at scale.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover shadow-hover px-8 py-6 text-lg"
              >
                Start Building Free
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="px-8 py-6 text-lg border-2"
              >
                View Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Enterprise security
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                No credit card required
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="card-gradient rounded-2xl p-8 shadow-elegant border">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">S1mple AI Tools</h3>
                  <Badge variant="secondary">Connected</Badge>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  Select the tools you want to connect to your AI agents
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center p-4 rounded-xl border bg-background/50 hover:bg-background transition-smooth hover:shadow-hover cursor-pointer"
                    >
                      <div className={`w-10 h-10 rounded-lg ${tool.bgColor} flex items-center justify-center mb-2`}>
                        <span className="text-white font-bold text-sm">{tool.icon}</span>
                      </div>
                      <span className="text-xs text-center font-medium">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const tools = [
  { name: "Gmail", icon: "✉️", bgColor: "bg-red-500" },
  { name: "Calendar", icon: "📅", bgColor: "bg-blue-500" },
  { name: "Financial Data", icon: "💹", bgColor: "bg-green-500" },
  { name: "Analytics", icon: "📊", bgColor: "bg-purple-500" },
  { name: "Trading", icon: "📈", bgColor: "bg-green-500" },
  { name: "Wallet", icon: "💰", bgColor: "bg-yellow-500" },

];

export default HeroSection;