import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LyricsSectionProps {
  isOpen: boolean;
  trackTitle: string | null;
  lyrics: string;
  onClose: () => void;
}

const LyricsSection = ({
  isOpen,
  trackTitle,
  lyrics,
  onClose,
}: LyricsSectionProps) => {
  if (!isOpen || !trackTitle) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl max-h-[80vh] bg-white">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-montserrat text-2xl font-bold text-slate-800">
              {trackTitle}
            </h2>
            <Button
              onClick={onClose}
              variant="ghost"
              size="sm"
              className="hover:bg-gray-100"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>

          <div className="overflow-y-auto max-h-[60vh] prose prose-slate max-w-none">
            <div className="font-open-sans text-lg leading-relaxed whitespace-pre-line text-gray-700">
              {lyrics}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="font-open-sans text-sm text-gray-500 italic text-center">
              © Авторский текст • Все права защищены
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LyricsSection;
