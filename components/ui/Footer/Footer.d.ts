import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const footerVariants: (props?: ({
    variant?: "default" | "filled" | "dark" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface FooterProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof footerVariants> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Footer component for page footer content.
 * Supports multiple variants and sizes for different use cases.
 *
 * @example
 * ```tsx
 * <Footer>
 *   <FooterContent>
 *     <FooterSection>
 *       <FooterHeading>Company</FooterHeading>
 *       <FooterLinks>
 *         <Link href="/about">About</Link>
 *         <Link href="/careers">Careers</Link>
 *       </FooterLinks>
 *     </FooterSection>
 *   </FooterContent>
 *   <FooterBottom>
 *     <FooterCopyright>© 2026 Engrate</FooterCopyright>
 *   </FooterBottom>
 * </Footer>
 * ```
 */
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;
interface FooterContentProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Main content container for footer sections.
 * Provides a responsive grid layout for footer columns.
 */
declare const FooterContent: React.ForwardRefExoticComponent<FooterContentProps & React.RefAttributes<HTMLDivElement>>;
interface FooterSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * A section/column within the footer content.
 * Typically contains a heading and a list of links.
 */
declare const FooterSection: React.ForwardRefExoticComponent<FooterSectionProps & React.RefAttributes<HTMLDivElement>>;
interface FooterHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Heading for a footer section.
 */
declare const FooterHeading: React.ForwardRefExoticComponent<FooterHeadingProps & React.RefAttributes<HTMLHeadingElement>>;
interface FooterLinksProps extends React.HTMLAttributes<HTMLElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Container for navigation links within a footer section.
 */
declare const FooterLinks: React.ForwardRefExoticComponent<FooterLinksProps & React.RefAttributes<HTMLElement>>;
interface FooterBottomProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Bottom section of the footer.
 * Typically contains copyright text and legal links.
 */
declare const FooterBottom: React.ForwardRefExoticComponent<FooterBottomProps & React.RefAttributes<HTMLDivElement>>;
interface FooterCopyrightProps extends React.HTMLAttributes<HTMLParagraphElement> {
    /** Render as a child component */
    asChild?: boolean;
}
/**
 * Copyright text component for the footer.
 */
declare const FooterCopyright: React.ForwardRefExoticComponent<FooterCopyrightProps & React.RefAttributes<HTMLParagraphElement>>;
export { Footer, footerVariants, FooterContent, FooterSection, FooterHeading, FooterLinks, FooterBottom, FooterCopyright, };
export type { FooterProps, FooterContentProps, FooterSectionProps, FooterHeadingProps, FooterLinksProps, FooterBottomProps, FooterCopyrightProps, };
