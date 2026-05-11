import type { Config } from "tailwindcss"

/** Impacto Estudio — paleta marca (60 neutro · 30 superficies · 10 acento). */
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#F84677",
          cyan: "#00C1D5",
        },
      },
    },
  },
} satisfies Config
