import React, { useState } from "react";
import TrackCard from "./TrackCard";

interface Track {
  id: string;
  title: string;
  duration: string;
  mood: string;
  description: string;
  lyrics: string;
}

interface TracksGridProps {
  onTrackPlay: (track: Track) => void;
  onLyricsShow: (track: Track) => void;
  currentTrack: string | null;
  isPlaying: boolean;
}

const TracksGrid = ({
  onTrackPlay,
  onLyricsShow,
  currentTrack,
  isPlaying,
}: TracksGridProps) => {
  const tracks: Track[] = [
    {
      id: "1",
      title: "Космическая одиссея",
      duration: "4:33",
      mood: "Эпическая",
      description: "Музыкальное путешествие сквозь галактики и звёзды",
      lyrics: `В бескрайних просторах космоса,
Где звёзды танцуют в тишине,
Летит моя душа свободная
К неведомой планете-мечте.

Припев:
Космическая одиссея зовёт,
Сквозь млечный путь меня ведёт,
В галактиках найду свой дом,
Среди созвездий золотом.

Планеты кружат в ритме вечном,
Кометы чертят путь во тьме,
И сердце бьётся бесконечно
В космической симфонии.`,
    },
    {
      id: "2",
      title: "Осенний вальс",
      duration: "4:12",
      mood: "Лирическая",
      description: "Нежная мелодия об осенней любви и воспоминаниях",
      lyrics: `Листья жёлтые кружатся,
Словно в вальсе золотом,
Наши души растворяются
В танце с ветром и дождём.

Припев:
Осенний вальс играет в сердце,
Мелодию любви поёт,
И в памяти навек останется
Тот миг, что осень принесёт.

Ты помнишь, как мы танцевали
Под шорох листьев у реки?
Как звёзды нам благословляли
Союз двух любящих душ...`,
    },
    {
      id: "3",
      title: "Рассвет надежды",
      duration: "3:28",
      mood: "Вдохновляющая",
      description: "Гимн новому дню и новым возможностям",
      lyrics: `Первый луч пробьёт туманы,
Новый день придёт опять,
И надежды караваны
Будут в небе танцевать.

Припев:
Рассвет надежды в душе моей,
Гонит прочь все тени,
Впереди — мильон огней,
Впереди — везение!

Каждое утро — как чистый лист,
Где можно начать сначала,
Будь смелым, будь оптимист —
Жизнь только началась!`,
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-montserrat text-3xl font-bold text-center text-slate-800 mb-12">
          Музыкальная коллекция
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              title={track.title}
              duration={track.duration}
              mood={track.mood}
              description={track.description}
              onPlay={() => onTrackPlay(track)}
              onShowLyrics={() => onLyricsShow(track)}
              isPlaying={currentTrack === track.title && isPlaying}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TracksGrid;
