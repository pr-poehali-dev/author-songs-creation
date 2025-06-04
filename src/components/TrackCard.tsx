import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface TrackCardProps {
  title: string;
  duration: string;
  mood: string;
  description: string;
  onPlay: () => void;
  onShowLyrics: () => void;
  isPlaying?: boolean;
}

const TrackCard = ({
  title,
  duration,
  mood,
  description,
  onPlay,
  onShowLyrics,
  isPlaying = false,
}: TrackCardProps) => {
  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="font-montserrat text-xl font-semibold text-slate-800 mb-2">
            {title}
          </h3>
          <Badge
            variant="secondary"
            className="bg-purple-100 text-purple-700 mb-3"
          >
            {mood}
          </Badge>
          <p className="font-open-sans text-sm text-gray-600 mb-4">
            {description}
          </p>
        </div>
        <span className="font-open-sans text-sm text-gray-500 ml-4">
          {duration}
        </span>
      </div>

      <div className="flex space-x-2">
        <Button
          onClick={onPlay}
          size="sm"
          className={`flex items-center space-x-2 ${
            isPlaying
              ? "bg-purple-600 hover:bg-purple-700"
              : "bg-slate-700 hover:bg-slate-800"
          }`}
        >
          <Icon name={isPlaying ? "Pause" : "Play"} size={16} />
          <span className="font-open-sans text-sm">
            {isPlaying ? "Пауза" : "Играть"}
          </span>
        </Button>

        <Button
          onClick={onShowLyrics}
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 border-purple-200 text-purple-700 hover:bg-purple-50"
        >
          <Icon name="FileText" size={16} />
          <span className="font-open-sans text-sm">Текст</span>
        </Button>
      </div>
    </Card>
  );
};

export default TrackCard;
