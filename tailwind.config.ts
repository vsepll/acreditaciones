import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))", // Richer Burgundy
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Slightly lighter, vibrant burgundy for accents
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        burgundy: {
          DEFAULT: "#6A040F", // Richer Default Burgundy
          light: "#9D0208", // More vibrant light
          dark: "#370617", // Deeper dark
          extralight: "#FEEAEC", // Very light for backgrounds/tints
          foreground: "#FFFFFF",
        },
        neutral: {
          // Extended neutral palette
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)", // For larger rounding
        "2xl": "calc(var(--radius) + 8px)",
      },
      fontSize: {
        // Example of typographic scale refinement
        xs: ".75rem",
        sm: ".875rem",
        base: "1rem", // 16px
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.5rem", // Adjusted for impact
        "5xl": "3.25rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      boxShadow: {
        // Refined shadows for a softer, more modern look
        soft: "0 4px 15px rgba(0, 0, 0, 0.05)",
        "soft-md": "0 6px 20px rgba(0, 0, 0, 0.07)",
        "soft-lg": "0 10px 30px rgba(0, 0, 0, 0.08)",
        glass: "0 2px 12px rgba(0, 0, 0, 0.04)", // More subtle glass
        "glass-burgundy": "0 4px 20px rgba(106, 4, 15, 0.1)", // Glass with burgundy tint
      },
      backgroundImage: {
        "subtle-gradient": "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--neutral-50)) 100%)",
        "burgundy-gradient": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "subtle-pulse": {
          // Softer pulse
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(157, 2, 8, 0.2)" },
          "50%": { transform: "scale(1.02)", boxShadow: "0 0 0 8px rgba(157, 2, 8, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards", // Slightly longer duration
        "subtle-pulse": "subtle-pulse 2.5s infinite ease-in-out",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
