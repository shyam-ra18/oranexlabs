import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GridContainerProps {
    children: ReactNode;
    className?: string;
    isMainContainer?: boolean;
}

export function GridContainer({ children, className, isMainContainer = false }: GridContainerProps) {
    if (isMainContainer) {
        return (
            <div className={cn("relative w-full max-w-[1440px] mx-auto border-x border-white/10", className)}>
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

export function GridSection({ children, className, hasBorderBottom = true, hasBorderTop = false, id }: { children: ReactNode, className?: string, hasBorderBottom?: boolean, hasBorderTop?: boolean, id?: string }) {
    return (
        <div
            id={id}
            className={cn(
                "relative px-4 md:px-12 py-12 md:py-24 bg-background",
                hasBorderBottom && "border-b border-white/5",
                hasBorderTop && "border-t border-white/5",
                className
            )}>
            <div className="relative z-10 w-full">
                {children}
            </div>
        </div>
    );
}

