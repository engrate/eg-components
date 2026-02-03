import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const engrateLogoVariants: (props?: ({
    size?: "sm" | "lg" | "md" | "xl" | "xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
type ResponsiveCompact = boolean | {
    base?: boolean;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
    xl?: boolean;
    '2xl'?: boolean;
};
interface EngrateLogoProps extends React.SVGAttributes<SVGSVGElement>, VariantProps<typeof engrateLogoVariants> {
    /**
     * Show only the icon without the wordmark.
     * Supports responsive values: `{ base: true, md: false }`
     */
    compact?: ResponsiveCompact;
}
declare const EngrateLogo: React.ForwardRefExoticComponent<EngrateLogoProps & React.RefAttributes<SVGSVGElement>>;
export { EngrateLogo, engrateLogoVariants, type EngrateLogoProps, type ResponsiveCompact, };
