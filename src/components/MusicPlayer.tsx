import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Icon from "@/components/ui/icon";

interface MusicPlayerProps {
  currentTrack: string | null;
  isPlaying: boolean;
  progress: number;
  onPlayPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onProgressChange: (value: number[]) => void;
}

const MusicPlayer = ({
  currentTrack,
  isPlaying,
  progress,
  onPlayPause,
  onNext,
  onPrev,
  onProgressChange,
}: MusicPlayerProps) => {
  if (!currentTrack) return null;

  return (
    <Card className="fixed bottom-6 left-6 right-6 p-4 bg-white/95 backdrop-blur-md shadow-2xl border-purple-200">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <Button
            onClick={onPrev}
            size="sm"
            variant="ghost"
            className="hover:bg-purple-100"
          >
            <Icon name="SkipBack" size={16} />
          </Button>

          <Button
            onClick={onPlayPause}
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 w-10 h-10 rounded-full"
          >
            <Icon name={isPlaying ? "Pause" : "Play"} size={18} />
          </Button>

          <Button
            onClick={onNext}
            size="sm"
            variant="ghost"
            className="hover:bg-purple-100"
          >
            <Icon name="SkipForward" size={16} />
          </Button>
        </div>

        <div className="flex-1">
          <div className="font-montserrat text-sm font-medium text-slate-800 mb-1">
            {currentTrack}
          </div>
          <Slider
            value={[progress]}
            onValueChange={onProgressChange}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div className="flex items-center space-x-2">
          <Icon name="Volume2" size={16} className="text-gray-500" />
          <Slider defaultValue={[70]} max={100} step={1} className="w-20" />
        </div>
      </div>
    </Card>
  );
};

export default MusicPlayer;
