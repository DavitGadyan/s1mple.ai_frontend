import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">s1</span>
            </div>
            <h1 className="text-xl font-bold text-foreground"> <a href="/" className="text-muted-foreground hover:text-foreground transition-smooth">s1mple.ai</a></h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-smooth">
              Dashboard
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Tools
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Agents
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Chains
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-smooth">
              Docs
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary-hover shadow-elegant">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;