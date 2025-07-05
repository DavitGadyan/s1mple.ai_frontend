const StatsSection = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-primary/5 via-blue-500/5 to-primary/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-3xl sm:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const stats = [
  {
    value: "100+",
    label: "Integrations",
    description: "Third-party tools & APIs"
  },
  {
    value: "50K+",
    label: "Developers",
    description: "Building with our platform"
  },
  {
    value: "99.9%",
    label: "Uptime",
    description: "Enterprise reliability"
  },
  {
    value: "24/7",
    label: "Support",
    description: "Expert assistance"
  }
];

export default StatsSection;