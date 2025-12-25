import { cn } from "@/lib/utils";

interface GridContainerProps {
    children: React.ReactNode;
    className?: string;
    isMainContainer?: boolean;
}

export function GridContainer({ children, className, isMainContainer = false }: GridContainerProps) {
    if (isMainContainer) {
        return (
            <div className={cn("relative w-full max-w-[1400px] mx-auto border-x border-grid-line/10", className)}>
                {/* Continuous Vertical Lines - Subtle Orange Gradient */}
                {/* Reduced opacity to 5-8% to prevent the 'construction zone' look */}
                <div className="absolute inset-0 pointer-events-none z-0 flex justify-between px-4 md:px-12 h-full">
                    {/* Left Line */}
                    {/* <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-grid-line/10 to-transparent" /> */}

                    {/* Center-Left Line (Desktop only) */}
                    {/* <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-grid-line/10 to-transparent hidden md:block" /> */}

                    {/* Center-Right Line (Desktop only) */}
                    {/* <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-grid-line/10 to-transparent hidden lg:block" /> */}

                    {/* Right Line */}
                    {/* <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-grid-line/10 to-transparent" /> */}
                </div>

                <div className="relative z-10">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className={cn("relative", className)}>
            {children}
        </div>
    )
}

export function GridSection({ children, className, hasBorderBottom = true, hasBorderTop = false }: { children: React.ReactNode, className?: string, hasBorderBottom?: boolean, hasBorderTop?: boolean }) {
    return (
        <div className={cn(
            "relative px-4 md:px-12 py-12 md:py-24",
            hasBorderBottom && "border-b border-grid-line/10",
            hasBorderTop && "border-t border-grid-line/10",
            className
        )}>
            {/* Horizontal Line Intersection Dots - Full Opacity Orange for Contrast */}

            {(hasBorderTop) && (
                <>
                    <div className="absolute -left-[3px] -top-[3px] w-1.5 h-1.5 bg-accent-orange z-20" />
                    <div className="absolute -right-[3px] -top-[3px] w-1.5 h-1.5 bg-accent-orange z-20" />
                </>
            )}

            {(hasBorderBottom) && (
                <>
                    <div className="absolute -left-[3px] -bottom-[3px] w-1.5 h-1.5 bg-accent-orange z-20" />
                    <div className="absolute -right-[3px] -bottom-[3px] w-1.5 h-1.5 bg-accent-orange z-20" />
                </>
            )}

            {children}
        </div>
    );
}
