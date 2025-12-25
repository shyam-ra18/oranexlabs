import { GridSection } from "@/components/ui/GridContainer";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is your typical project timeline?",
        answer: "Most high-impact web projects are delivered within 4-8 weeks. We value momentum and work in dedicated sprints to ensure your product launches while the market opportunity is fresh."
    },
    {
        question: "Do you handle both design and development?",
        answer: "Yes. We believe the best digital products are born from a unified vision. Our team handles everything from strategy and UX/UI design to full-stack engineering and deployment."
    },
    {
        question: "What is your engagement model?",
        answer: "We typically work on a project basis with a fixed scope and timeline. For ongoing partners, we offer retainer packages for continuous iteration, optimization, and feature expansion."
    },
    {
        question: "Do you work with startups or established enterprises?",
        answer: "We partner with ambitious brands of all sizes. Whether you're a funded startup building your MVP or an enterprise rethinking your digital presence, we adapt our process to your scale."
    },
    {
        question: "How do we get started?",
        answer: "It starts with a conversation. Click 'Start a Project', fill out the brief form, and we'll schedule a discovery call to see if we're the right fit for your vision."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <GridSection className="text-left" hasBorderBottom={true}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4">
                        Common Questions
                    </div>
                    <h2 className="text-2xl md:text-5xl font-serif text-zinc-900">
                        Curious about our <span className="italic text-zinc-400">process?</span>
                    </h2>
                </div>
            </div>

            <div className="max-w-3xl mx-auto">
                <div className="border-t border-black/10">
                    {faqs.map((faq, idx) => (
                        <FAQItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === idx}
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        />
                    ))}
                </div>
            </div>
        </GridSection>
    );
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-black/10">
            <button
                onClick={onClick}
                className="w-full flex items-center justify-between py-8 text-left group hover:bg-zinc-50 transition-colors px-4 -mx-4"
            >
                <span className={cn(
                    "text-lg md:text-xl font-medium transition-colors duration-300",
                    isOpen ? "text-accent-orange" : "text-zinc-900 group-hover:text-zinc-700"
                )}>
                    {question}
                </span>
                <span className={cn(
                    "flex-shrink-0 ml-4 w-8 h-8 flex items-center justify-center border transition-all duration-300",
                    isOpen ? "border-accent-orange bg-accent-orange text-white" : "border-black/10 text-zinc-400 group-hover:border-black/30 group-hover:text-zinc-900"
                )}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-8 text-zinc-500 leading-relaxed max-w-2xl px-4 -mx-4">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
