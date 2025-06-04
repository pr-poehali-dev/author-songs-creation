import React, { useState } from "react";
import Hero from "@/components/Hero";
import TracksGrid from "@/components/TracksGrid";
import MusicPlayer from "@/components/MusicPlayer";
import LyricsSection from "@/components/LyricsSection";

interface Track {
  id: string;
  title: string;
  duration: string;
  mood: string;
  description: string;
  lyrics: string;
}

const Index = () => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showLyrics, setShowLyrics] = useState(false);
  const [selectedLyricsTrack, setSelectedLyricsTrack] = useState<Track | null>(
    null,
  );

  const handleTrackPlay = (track: Track) => {
    if (currentTrack?.id === track.id) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  const handleLyricsShow = (track: Track) => {
    setSelectedLyricsTrack(track);
    setShowLyrics(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    // Здесь будет логика перехода к следующему треку
    console.log("Next track");
  };

  const handlePrev = () => {
    // Здесь будет логика перехода к предыдущему треку
    console.log("Previous track");
  };

  const handleProgressChange = (value: number[]) => {
    setProgress(value[0]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-purple-50">
      <Hero />

      <TracksGrid
        onTrackPlay={handleTrackPlay}
        onLyricsShow={handleLyricsShow}
        currentTrack={currentTrack?.title || null}
        isPlaying={isPlaying}
      />

      <MusicPlayer
        currentTrack={currentTrack?.title || null}
        isPlaying={isPlaying}
        progress={progress}
        onPlayPause={handlePlayPause}
        onNext={handleNext}
        onPrev={handlePrev}
        onProgressChange={handleProgressChange}
      />

      <LyricsSection
        isOpen={showLyrics}
        trackTitle={selectedLyricsTrack?.title || null}
        lyrics={selectedLyricsTrack?.lyrics || ""}
        onClose={() => setShowLyrics(false)}
      />
    </div>
  );
};

export default Index;
