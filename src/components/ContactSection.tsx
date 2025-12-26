import { useState } from "react";
import { GridSection } from "@/components/ui/GridContainer";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, MoveRight } from "lucide-react";

const services = [
    "Web Development",
    "UI/UX Design",
    "Branding",
    "SEO & Marketing",
    "App Development",
    "Consultation",
];

const budgetRanges = [
    "$1,000 - $3,000",
    "$3,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000+",
];

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        selectedServices: [] as string[],
        budget: "",
        termsAccepted: false,
    });

    const [isServiceOpen, setIsServiceOpen] = useState(false);
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    const toggleService = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(service)
                ? prev.selectedServices.filter((s) => s !== service)
                : [...prev.selectedServices, service],
        }));
    };

    return (
        <GridSection className="relative overflow-hidden py-24 text-left" hasBorderBottom={true}>
            <div className="mb-20 px-6">
                <div className="inline-block px-3 py-1 border border-black/10 text-accent-orange text-xs font-medium tracking-widest uppercase mb-4">
                    Get In Touch
                </div>
                <h2 className="text-2xl md:text-5xl font-serif text-zinc-900">
                    Ready to start your <br />
                    <span className="italic text-zinc-400">next project?</span>
                </h2>
            </div>

            <div className="max-w-4xl mx-auto px-6">
                <div className="space-y-12 font-sans text-xl md:text-3xl leading-relaxed text-zinc-900">
                    {/* Mad Libs Style Form */}
                    <div className="relative flex flex-wrap items-center gap-x-3 gap-y-6">
                        <span className="whitespace-nowrap">Hey, my name is</span>
                        <div className="relative border-b border-zinc-300 min-w-[200px] flex-1 md:flex-none h-auto">
                            <input
                                type="text"
                                placeholder="Type Here"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent pb-1 outline-none placeholder:text-zinc-300 text-accent-orange focus:border-accent-orange transition-colors"
                            />
                        </div>
                        <span className="whitespace-nowrap">and I'm looking for</span>

                        {/* Custom Animated Multiselect - SHARP CORNERS */}
                        <div className="relative min-w-[200px] flex-1 md:flex-none">
                            <button
                                onClick={() => setIsServiceOpen(!isServiceOpen)}
                                className="flex items-center justify-between w-full border-b border-zinc-300 pb-1 hover:border-accent-orange transition-colors duration-300 group"
                            >
                                <span className={formData.selectedServices.length === 0 ? "text-zinc-300" : "text-accent-orange"}>
                                    {formData.selectedServices.length === 0
                                        ? "Select Services"
                                        : `${formData.selectedServices.length} Service${formData.selectedServices.length > 1 ? 's' : ''}`}
                                </span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServiceOpen ? 'rotate-180 text-accent-orange' : 'text-zinc-400 group-hover:text-accent-orange'}`} />
                            </button>

                            <AnimatePresence>
                                {isServiceOpen && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setIsServiceOpen(false)}
                                            className="fixed inset-0 z-40 bg-transparent"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 top-full mt-2 w-72 bg-white border border-zinc-200 rounded-none shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="p-1 space-y-0">
                                                {services.map((service) => (
                                                    <button
                                                        key={service}
                                                        onClick={() => toggleService(service)}
                                                        className="flex items-center justify-between w-full p-4 text-sm hover:bg-zinc-50 transition-colors text-left border-b border-zinc-100 last:border-0"
                                                    >
                                                        <span className={formData.selectedServices.includes(service) ? "text-accent-orange font-medium" : "text-zinc-600"}>
                                                            {service}
                                                        </span>
                                                        {formData.selectedServices.includes(service) && (
                                                            <Check className="w-4 h-4 text-accent-orange" />
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div className="relative flex flex-wrap items-center gap-x-3 gap-y-6">
                        <span className="whitespace-nowrap">Get in touch with me at</span>
                        <div className="relative border-b border-zinc-300 min-w-[250px] flex-1">
                            <input
                                type="email"
                                placeholder="Your Email ID Here"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent pb-1 outline-none placeholder:text-zinc-300 text-accent-orange focus:border-accent-orange transition-colors"
                            />
                        </div>
                        <span className="hidden md:inline">!</span>
                    </div>

                    <div className="relative flex flex-wrap items-center gap-x-3 gap-y-6">
                        <span className="whitespace-nowrap">My budget is around</span>

                        {/* Custom Dropdown for Budget - SHARP CORNERS */}
                        <div className="relative min-w-[200px] flex-1 md:flex-none">
                            <button
                                onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                                className="flex items-center justify-between w-full border-b border-zinc-300 pb-1 hover:border-accent-orange transition-colors duration-300 group"
                            >
                                <span className={formData.budget === "" ? "text-zinc-300" : "text-accent-orange font-medium"}>
                                    {formData.budget === "" ? "Select Range" : formData.budget}
                                </span>
                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isBudgetOpen ? 'rotate-180 text-accent-orange' : 'text-zinc-400 group-hover:text-accent-orange'}`} />
                            </button>

                            <AnimatePresence>
                                {isBudgetOpen && (
                                    <>
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={() => setIsBudgetOpen(false)}
                                            className="fixed inset-0 z-40 bg-transparent"
                                        />
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute left-0 top-full mt-2 w-64 bg-white border border-zinc-200 rounded-none shadow-2xl z-50 overflow-hidden"
                                        >
                                            <div className="p-1 space-y-0">
                                                {budgetRanges.map((range) => (
                                                    <button
                                                        key={range}
                                                        onClick={() => {
                                                            setFormData({ ...formData, budget: range });
                                                            setIsBudgetOpen(false);
                                                        }}
                                                        className="w-full p-4 text-sm text-left hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-0"
                                                    >
                                                        <span className={formData.budget === range ? "text-accent-orange font-medium" : "text-zinc-600"}>
                                                            {range}
                                                        </span>
                                                    </button>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Footer actions - SHARP CORNERS */}
                <div className="mt-24 space-y-10">
                    <label className="flex items-start gap-4 cursor-pointer group select-none">
                        <div className="relative mt-1 w-5 h-5 border border-zinc-300 rounded-none overflow-hidden flex-shrink-0">
                            <input
                                type="checkbox"
                                className="peer absolute inset-0 opacity-0 cursor-pointer"
                                checked={formData.termsAccepted}
                                onChange={(e) => setFormData({ ...formData, termsAccepted: e.target.checked })}
                            />
                            <div className="absolute inset-0 bg-accent-orange opacity-0 peer-checked:opacity-100 transition-opacity flex items-center justify-center">
                                <Check className="w-3 h-3 text-white" strokeWidth={3} />
                            </div>
                        </div>
                        <span className="text-zinc-500 text-sm md:text-base font-sans leading-relaxed">
                            I hereby accept all terms and conditions.
                        </span>
                    </label>

                    <button className="group relative flex items-center gap-8 bg-zinc-900 text-white px-10 py-5 rounded-none hover:bg-accent-orange transition-all duration-500 overflow-hidden">
                        <span className="font-display font-medium tracking-tight text-xl relative z-10 transition-colors duration-500">
                            Send Enquiry
                        </span>
                        <div className="relative z-10 p-2 bg-white/10 rounded-none group-hover:bg-white/20 transition-colors">
                            <MoveRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </div>
                        {/* Background color transition effect */}
                        <div className="absolute inset-0 bg-accent-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out -z-1" />
                    </button>
                </div>
            </div>

            {/* Subtle Grid Background indicator or glow */}
            <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-orange-100/20 blur-[130px] rounded-full -z-10" />
        </GridSection>
    );
}
