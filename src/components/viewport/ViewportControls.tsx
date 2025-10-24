import { Button } from "@/components/ui/button";
import { 
  Grid3x3, 
  Box, 
  Layers, 
  Camera,
  Sun,
  MousePointer2
} from "lucide-react";

export const ViewportControls = () => {
  return (
    <div className="absolute top-4 left-4 flex flex-col gap-2">
      <div className="bg-panel/90 backdrop-blur-sm border border-panel-border rounded-lg p-2 space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Grid3x3 className="h-4 w-4 mr-2" />
          Grid
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Box className="h-4 w-4 mr-2" />
          Wireframe
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Layers className="h-4 w-4 mr-2" />
          Solid
        </Button>
      </div>

      <div className="bg-panel/90 backdrop-blur-sm border border-panel-border rounded-lg p-2 space-y-1">
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Camera className="h-4 w-4 mr-2" />
          Camera
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <Sun className="h-4 w-4 mr-2" />
          Lighting
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start">
          <MousePointer2 className="h-4 w-4 mr-2" />
          Transform
        </Button>
      </div>
    </div>
  );
};
