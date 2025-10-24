import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Clock, Star, Folder } from "lucide-react";

const recentProjects = [
  { id: 1, name: "Sci-Fi Helmet", preview: "🪖", date: "2 hours ago" },
  { id: 2, name: "Dragon Statue", preview: "🐉", date: "Yesterday" },
  { id: 3, name: "Modern Chair", preview: "🪑", date: "2 days ago" },
  { id: 4, name: "Crystal Gem", preview: "💎", date: "3 days ago" },
];

export const ProjectSidebar = () => {
  return (
    <div className="w-[280px] border-r border-border bg-panel h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <Button className="w-full bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Recent Projects</h3>
            </div>
            <div className="space-y-2">
              {recentProjects.map((project) => (
                <button
                  key={project.id}
                  className="w-full p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors text-left group"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{project.preview}</div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate group-hover:text-primary transition-colors">
                        {project.name}
                      </div>
                      <div className="text-xs text-muted-foreground">{project.date}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Star className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Favorites</h3>
            </div>
            <div className="text-sm text-muted-foreground text-center py-4">
              No favorites yet
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <Folder className="h-4 w-4 text-muted-foreground" />
              <h3 className="text-sm font-semibold">Asset Library</h3>
            </div>
            <div className="space-y-1">
              <button className="w-full p-2 rounded text-sm hover:bg-secondary/50 transition-colors text-left">
                Characters
              </button>
              <button className="w-full p-2 rounded text-sm hover:bg-secondary/50 transition-colors text-left">
                Props
              </button>
              <button className="w-full p-2 rounded text-sm hover:bg-secondary/50 transition-colors text-left">
                Environments
              </button>
              <button className="w-full p-2 rounded text-sm hover:bg-secondary/50 transition-colors text-left">
                Materials
              </button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
