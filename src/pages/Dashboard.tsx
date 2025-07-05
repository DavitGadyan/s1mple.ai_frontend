import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ToolsSection from "@/components/ToolsSection";
import S1mpleChatWithIntegrations from "@/components/S1mpleChatWithIntegrations";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <S1mpleChatWithIntegrations/>
    </div>
  );
};

export default Dashboard;
