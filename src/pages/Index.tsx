import { Toolbar } from "@/components/layout/Toolbar";
import { ProjectSidebar } from "@/components/layout/ProjectSidebar";
import { AIGenerationPanel } from "@/components/generation/AIGenerationPanel";
import { Scene3D } from "@/components/viewport/Scene3D";
import { ViewportControls } from "@/components/viewport/ViewportControls";

const Index = () => {
  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Toolbar />
      <div className="flex-1 flex overflow-hidden">
        <ProjectSidebar />
        <div className="flex-1 relative">
          <Scene3D />
          <ViewportControls />
        </div>
        <AIGenerationPanel />
      </div>
    </div>
  );
};

export default Index;
