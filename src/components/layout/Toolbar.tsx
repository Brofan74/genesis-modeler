import { Button } from "@/components/ui/button";
import { 
  Save, 
  FolderOpen, 
  FileUp, 
  Download, 
  Settings, 
  User,
  Maximize2,
  Undo2,
  Redo2
} from "lucide-react";

export const Toolbar = () => {
  return (
    <div className="h-14 border-b border-border bg-panel flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <h1 className="text-lg font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          AI 3D Studio
        </h1>
        <div className="h-6 w-px bg-border mx-2" />
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm">
            <FolderOpen className="h-4 w-4 mr-2" />
            Open
          </Button>
          <Button variant="ghost" size="sm">
            <Save className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="ghost" size="sm">
            <FileUp className="h-4 w-4 mr-2" />
            Import
          </Button>
          <Button variant="ghost" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 mr-2">
          <Button variant="ghost" size="icon">
            <Undo2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Redo2 className="h-4 w-4" />
          </Button>
        </div>
        <div className="h-6 w-px bg-border" />
        <Button variant="ghost" size="icon">
          <Maximize2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Settings className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <User className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
