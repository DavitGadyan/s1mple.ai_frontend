import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  return (
    <section className="w-full py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Core <span className="gradient-text">Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Designed to help your team build smarter AI applications and make better decisions, faster.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth border-0 card-gradient">
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    title: "Connect Your Data Sources",
    description: "Seamlessly integrate with your existing databases, APIs, and knowledge bases to create intelligent applications.",
    icon: "🔗",
    iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/20",
    benefits: [
      "100+ pre-built connectors",
      "Real-time data synchronization",
      "Secure API integrations",
      "Custom connector support"
    ]
  },
  {
    title: "AI-Powered Insights in Minutes",
    description: "Our platform analyzes your data to surface what matters most, helping you build smarter applications quickly.",
    icon: "⚡",
    iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-600/20",
    benefits: [
      "Automated data processing",
      "Intelligent pattern recognition",
      "Real-time recommendations",
      "Contextual understanding"
    ]
  },
  {
    title: "Scale Team Productivity",
    description: "Empower your development team with powerful tools and pre-built components to focus on what truly matters.",
    icon: "🚀",
    iconBg: "bg-gradient-to-br from-green-500/20 to-green-600/20",
    benefits: [
      "Drag-and-drop interface",
      "Pre-built templates",
      "Collaborative development",
      "Automated deployment"
    ]
  }
];

export default FeaturesSection;