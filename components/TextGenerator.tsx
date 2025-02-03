"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export function TextGenerator({ words }: { words: string }) {
  return <TextGenerateEffect words={words} filter={false}/>;
}
