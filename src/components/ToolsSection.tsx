import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ToolsSection = () => {
  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Powerful <span className="gradient-text">LangChain Tools</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, deploy, and scale intelligent AI applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {langchainTools.map((tool, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-hover transition-smooth border-0 card-gradient">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-xl ${tool.iconBg} flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{tool.icon}</span>
                  </div>
                  <Badge variant={tool.status === 'Ready' ? 'default' : 'secondary'}>
                    {tool.status}
                  </Badge>
                </div>
                <div>
                  <CardTitle className="text-xl">{tool.title}</CardTitle>
                  <CardDescription className="text-base mt-2">
                    {tool.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Key Features:</div>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full hover:bg-primary hover:text-primary-foreground"
                >
                  Configure Tool
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const langchainTools = [
  {
    title: "LLM Models",
    description: "Connect to OpenAI, Anthropic, Cohere, and other leading language models",
    icon: "🤖",
    iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
    status: "Ready",
    features: [
      "Multi-provider support",
      "Streaming responses",
      "Token optimization",
      "Model switching"
    ]
  },
  {
    title: "Vector Stores",
    description: "Integrate with Pinecone, Weaviate, ChromaDB for semantic search",
    icon: "🔍",
    iconBg: "bg-gradient-to-br from-purple-500 to-purple-600",
    status: "Ready",
    features: [
      "Similarity search",
      "Metadata filtering",
      "Hybrid search",
      "Auto-indexing"
    ]
  },
  {
    title: "Memory Systems",
    description: "Persistent conversation memory and context management",
    icon: "🧠",
    iconBg: "bg-gradient-to-br from-green-500 to-green-600",
    status: "Ready",
    features: [
      "Conversation buffer",
      "Summary memory",
      "Entity extraction",
      "Context windows"
    ]
  },
  {
    title: "Document Loaders",
    description: "Load and process PDFs, web pages, databases, and more",
    icon: "📄",
    iconBg: "bg-gradient-to-br from-orange-500 to-orange-600",
    status: "Ready",
    features: [
      "Multi-format support",
      "Chunking strategies",
      "Metadata extraction",
      "Batch processing"
    ]
  },
  {
    title: "Agent Framework",
    description: "Build autonomous agents with tool usage and reasoning",
    icon: "🤖",
    iconBg: "bg-gradient-to-br from-red-500 to-red-600",
    status: "Ready",
    features: [
      "Tool integration",
      "ReAct framework",
      "Plan & execute",
      "Multi-agent systems"
    ]
  },
  {
    title: "Chain Builder",
    description: "Visual chain construction with drag-and-drop interface",
    icon: "⛓️",
    iconBg: "bg-gradient-to-br from-indigo-500 to-indigo-600",
    status: "Beta",
    features: [
      "Visual editor",
      "Pre-built templates",
      "Custom components",
      "Chain debugging"
    ]
  }
];

export default ToolsSection;