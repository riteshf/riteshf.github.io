import colors from "@/data/colors.json" assert { type: "json" };

export const languageColor = (language: string) => {
  if (typeof colors[language] !== "undefined") {
    return colors[language].color;
  } else {
    return "gray";
  }
};
