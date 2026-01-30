/**
 * Engrate design tokens as CSS custom properties.
 *
 * In Tailwind CSS v4, configuration is done via CSS using the @theme directive.
 * Consumers should import the styles.css from this package which includes all
 * the design tokens.
 *
 * @example
 * ```css
 * /* In your main CSS file *\/
 * @import '@engrate/components/styles.css';
 * ```
 *
 * For legacy compatibility, the theme tokens are exported here as well.
 */
export declare const engrateTheme: {
    readonly colors: {
        readonly sunflower: {
            readonly DEFAULT: "#FFBE26";
            readonly hover: "#E5AB22";
        };
        readonly 'lemon-meringue': "#FFF8A2";
        readonly vanilla: "#FFFCD0";
        readonly eggshell: "#FFFDE8";
        readonly primary: "#1A1A1A";
        readonly secondary: "#4A4A4A";
        readonly tertiary: "#6A6A6A";
        readonly white: "#FFFFFF";
        readonly main: "#FAFAFA";
        readonly alt: "#F5F5F5";
        readonly card: "#F9F9F9";
        readonly contrast: "#EFEFEF";
        readonly border: "#E5E5E5";
        readonly 'warm-purple': "#721B5D";
        readonly 'cool-purple': "#9B4ED8";
        readonly 'electric-blue': "#0080FF";
        readonly 'deep-blue': "#002FA7";
        readonly error: "#DC2626";
    };
    readonly fontFamily: {
        readonly display: readonly ["Libre Baskerville", "serif"];
        readonly sans: readonly ["Work Sans", "sans-serif"];
        readonly mono: readonly ["IBM Plex Mono", "monospace"];
    };
};
export { engrateTheme as egComponentsPreset };
export default engrateTheme;
