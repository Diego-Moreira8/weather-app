const translations: Record<string, string> = {
  clear: "limpo",
  clouds: "nublado",
  atmosphere: "névoa",
  drizzle: "chuvisco",
  rain: "chuva",
  snow: "neve",
  thunderstorm: "tempestade",
};

export default function getTranslatedCondition(condition: string): string {
  return translations[condition] || "";
}
