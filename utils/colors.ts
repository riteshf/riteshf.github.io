import colorsData from "@/data/colors.json" with { type: "json" };

const colors = colorsData as Record<string, { color: string | null; url: string }>;

export const languageColor = (language: string) => {
  return colors[language]?.color ?? "gray";
};
