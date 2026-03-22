"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
    tall,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    tall?: boolean;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-sm relative bg-gray-100 overflow-hidden w-full transition-all duration-300 ease-out",
        tall ? "h-72 md:h-[28rem]" : "h-60 md:h-96",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex items-end py-8 px-5 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.title}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type CardType = {
  title: string;
  src: string;
};

export function FocusCards({
  cards,
  columns = 3,
}: {
  cards: CardType[];
  columns?: 2 | 3 | 4;
}) {
  const [hovered, setHovered] = useState<number | null>(null);

  const gridCols =
    columns === 2 ? "md:grid-cols-2" :
    columns === 4 ? "md:grid-cols-4" :
    "md:grid-cols-3";

  const maxW =
    columns === 2 ? "max-w-3xl" :
    columns === 4 ? "max-w-6xl" :
    "max-w-5xl";

  return (
    <div className={cn("grid grid-cols-1 gap-5 md:gap-8 mx-auto w-full", gridCols, maxW)}>
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          tall={columns === 2}
        />
      ))}
    </div>
  );
}
