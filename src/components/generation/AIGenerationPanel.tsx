import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sparkles, Clock } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const AIGenerationPanel = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleGenerate = () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  return (
    <div className="w-[320px] border-l border-border bg-panel h-full flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          AI Generation
        </h2>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Prompt</Label>
            <Textarea
              id="prompt"
              placeholder="Describe your 3D model... (e.g., 'A futuristic helmet with glowing edges')"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px] resize-none bg-secondary border-border"
            />
          </div>

          <div className="space-y-2">
            <Label>Style Preset</Label>
            <Select defaultValue="realistic">
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realistic">Realistic</SelectItem>
                <SelectItem value="lowpoly">Low-poly</SelectItem>
                <SelectItem value="stylized">Stylized</SelectItem>
                <SelectItem value="technical">Technical</SelectItem>
                <SelectItem value="organic">Organic</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Quality</Label>
            <Select defaultValue="standard">
              <SelectTrigger className="bg-secondary border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="ultra">Ultra</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="advanced" className="border-border">
              <AccordionTrigger className="text-sm">Advanced Parameters</AccordionTrigger>
              <AccordionContent className="space-y-4 pt-2">
                <div className="space-y-2">
                  <Label className="text-sm">Polygon Count</Label>
                  <Slider defaultValue={[50]} max={100} step={1} className="py-2" />
                  <div className="text-xs text-muted-foreground">50K polygons</div>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Texture Resolution</Label>
                  <Select defaultValue="2k">
                    <SelectTrigger className="bg-secondary border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1k">1024x1024</SelectItem>
                      <SelectItem value="2k">2048x2048</SelectItem>
                      <SelectItem value="4k">4096x4096</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Level of Detail</Label>
                  <Slider defaultValue={[75]} max={100} step={1} className="py-2" />
                  <div className="text-xs text-muted-foreground">High detail</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {isGenerating && (
            <div className="space-y-2 p-4 bg-secondary/50 rounded-lg border border-border">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Generating...</span>
                <span className="text-primary font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                <span>Estimated: {Math.max(1, Math.ceil((100 - progress) / 20))} seconds</span>
              </div>
            </div>
          )}

          <Button 
            className="w-full bg-primary hover:bg-primary/90 font-semibold"
            onClick={handleGenerate}
            disabled={isGenerating || !prompt}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Generate Model
          </Button>

          <div className="border-t border-border pt-4">
            <h3 className="text-sm font-semibold mb-3">Recent Generations</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  className="aspect-square rounded-lg bg-secondary/50 hover:bg-secondary border border-border transition-colors flex items-center justify-center text-2xl"
                >
                  {i === 1 ? "🪖" : i === 2 ? "🐉" : "💎"}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};
