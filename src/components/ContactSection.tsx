import { GridSection } from "@/components/ui/GridContainer";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";

const services = [
    "Web Development", "Mobile Engineering", "AI Integrations",
    "Product Design", "Cloud Infrastructure", "Strategic Consulting"
];

const budgetRanges = [
    "$1k - $3k",   // Core
    "$3k - $6k",   // Growth
    "$6k - $10k",  // Scale
    "$10k+"        // Enterprise
];

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        selectedServices: [] as string[],
        message: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isBudgetOpen, setIsBudgetOpen] = useState(false);

    const toggleService = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            selectedServices: prev.selectedServices.includes(service)
                ? prev.selectedServices.filter((s) => s !== service)
                : [...prev.selectedServices, service],
        }));
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }

        // Now validating Budget as well since it is marked required
        if (!formData.budget) newErrors.budget = "Please select a range";

        if (!formData.termsAccepted) newErrors.terms = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
            console.log("Form Submitted:", formData);
            // Submit logic here
        }
    };

    return (
        <GridSection className="py-32 bg-[#050505] text-left relative overflow-hidden" hasBorderBottom={true} id="contact">

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 1. Header */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-8 text-center md:text-left">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 text-[#8B5CF6] text-[10px] font-bold tracking-[0.2em] uppercase sharp-edge">
                            INITIATE_PROTOCOL
                        </div>
                        <h2 className="text-4xl md:text-7xl font-display font-bold text-white uppercase leading-[0.9]">
                            Start A <br className="hidden md:block" />
                            <span className="text-[#8B5CF6]">Project</span>
                        </h2>
                    </div>
                    <div className="max-w-sm text-zinc-500 font-sans text-sm md:text-base leading-relaxed text-center md:text-right">
                        Fields marked with <span className="text-red-500">*</span> are required.<br className="hidden md:block" />
                        We typically respond within 24 operational hours.
                    </div>
                </div>

                {/* 2. The Grid Form System */}
                <div className="w-full border-t border-l border-white/10">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Cell: Name (REQUIRED) */}
                        <GridInput
                            label="01. Name"
                            required={true}
                            placeholder="John Doe"
                            value={formData.name}
                            error={errors.name}
                            onChange={(e: any) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                        />

                        {/* Cell: Email (REQUIRED) */}
                        <GridInput
                            label="02. Contact Email"
                            required={true}
                            placeholder="john@company.com"
                            type="email"
                            value={formData.email}
                            error={errors.email}
                            onChange={(e: any) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                        />

                        {/* Cell: Company (OPTIONAL) */}
                        <GridInput
                            label="03. Company / Organization"
                            placeholder="Oranex Labs"
                            value={formData.company}
                            onChange={(e: any) => setFormData({ ...formData, company: e.target.value })}
                        />

                        {/* Cell: Budget (REQUIRED) */}
                        <div className={cn(
                            "relative border-b border-r border-white/10 p-8 md:p-10 group transition-colors h-40 flex flex-col justify-between",
                            errors.budget ? "bg-red-500/[0.02]" : "hover:bg-white/[0.02]"
                        )}>
                            <div className="flex justify-between items-center mb-4">
                                <label className={cn(
                                    "text-xs font-mono uppercase tracking-widest block",
                                    errors.budget ? "text-red-500" : "text-[#8B5CF6]"
                                )}>
                                    04. Monthly Budget <span className="text-red-500">*</span>
                                </label>
                                {errors.budget && (
                                    <div className="flex items-center gap-2 text-red-500 text-[10px] font-mono uppercase tracking-wider">
                                        <AlertCircle size={12} /> Required
                                    </div>
                                )}
                            </div>

                            <button
                                onClick={() => setIsBudgetOpen(!isBudgetOpen)}
                                className="w-full flex items-center justify-between text-xl md:text-3xl font-display text-white focus:outline-none uppercase text-left"
                            >
                                <span className={formData.budget ? "text-white" : "text-zinc-700"}>
                                    {formData.budget || "Select Range"}
                                </span>
                                <ChevronDown className={cn("text-zinc-600 transition-transform duration-300", isBudgetOpen && "rotate-180 text-[#8B5CF6]")} size={formData.budget ? 20 : 16} />
                            </button>

                            <AnimatePresence>
                                {isBudgetOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 w-full bg-[#0A0A0A] border border-white/10 z-50 shadow-2xl sharp-edge"
                                    >
                                        {budgetRanges.map((range) => (
                                            <button
                                                key={range}
                                                onClick={() => {
                                                    setFormData({ ...formData, budget: range });
                                                    if (errors.budget) setErrors({ ...errors, budget: "" });
                                                    setIsBudgetOpen(false);
                                                }}
                                                className="w-full text-left px-8 py-4 text-sm font-mono text-zinc-400 hover:text-white hover:bg-[#8B5CF6]/10 border-b border-white/5 last:border-0 transition-colors uppercase tracking-wider"
                                            >
                                                {range}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Cell: Services (OPTIONAL) */}
                        <div className="col-span-1 md:col-span-2 border-b border-r border-white/10 p-8 md:p-10">
                            <label className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-8 block">
                                05. Required Capabilities
                            </label>
                            <div className="flex flex-wrap gap-4">
                                {services.map((service) => (
                                    <button
                                        key={service}
                                        onClick={() => toggleService(service)}
                                        className={cn(
                                            "px-6 py-3 border text-sm font-mono uppercase tracking-wide sharp-edge transition-all duration-300",
                                            formData.selectedServices.includes(service)
                                                ? "bg-[#8B5CF6] border-[#8B5CF6] text-white"
                                                : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                                        )}
                                    >
                                        {service}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cell: Message (OPTIONAL) */}
                        <div className="col-span-1 md:col-span-2 border-b border-r border-white/10 p-8 md:p-10 hover:bg-white/[0.02] transition-colors">
                            <label className="text-xs font-mono text-[#8B5CF6] uppercase tracking-widest mb-4 block">
                                06. Project Details
                            </label>
                            <textarea
                                placeholder="Tell us about the project scope, technical requirements, and timeline..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="w-full bg-transparent border-none outline-none text-lg md:text-2xl text-white placeholder-zinc-700 min-h-[120px] resize-none font-display uppercase leading-relaxed focus:placeholder-white/20 transition-colors"
                            />
                        </div>

                    </div>
                </div>

                {/* 3. Footer Actions (Terms REQUIRED) */}
                <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-8">

                    <div className="flex flex-col gap-2">
                        <label className="flex items-center gap-4 cursor-pointer group select-none">
                            <div className={cn(
                                "w-5 h-5 border sharp-edge flex items-center justify-center transition-colors duration-300",
                                formData.termsAccepted
                                    ? "bg-[#8B5CF6] border-[#8B5CF6]"
                                    : errors.terms
                                        ? "border-red-500"
                                        : "border-zinc-700 group-hover:border-white"
                            )}>
                                {formData.termsAccepted && <Check size={14} className="text-white" strokeWidth={4} />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={formData.termsAccepted}
                                onChange={(e) => {
                                    setFormData({ ...formData, termsAccepted: e.target.checked });
                                    if (errors.terms) setErrors({ ...errors, terms: "" });
                                }}
                            />
                            <span className={cn(
                                "text-xs font-mono uppercase tracking-widest transition-colors",
                                errors.terms ? "text-red-500" : "text-zinc-500 group-hover:text-white"
                            )}>
                                I accept the data processing terms <span className="text-red-500">*</span>
                            </span>
                        </label>
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="group relative px-12 py-5 bg-white text-black font-bold uppercase text-xs tracking-[0.2em] sharp-edge overflow-hidden transition-all hover:shadow-[0_0_30px_-5px_#8B5CF6]"
                    >
                        <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
                            Initialize Request <ArrowRight size={16} />
                        </span>
                        <div className="absolute inset-0 bg-[#8B5CF6] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    </button>

                </div>
            </div>
        </GridSection>
    );
}

// --- SUB-COMPONENTS ---

function GridInput({ label, placeholder, value, onChange, type = "text", error, required = false }: any) {
    return (
        <div className={cn(
            "border-b border-r p-8 md:p-10 transition-colors h-40 flex flex-col justify-between group focus-within:bg-white/[0.04]",
            error ? "border-red-500/50 bg-red-500/[0.02]" : "border-white/10 hover:bg-white/[0.02]"
        )}>
            <div className="flex justify-between items-center mb-2">
                <label className={cn(
                    "text-xs font-mono uppercase tracking-widest transition-colors",
                    error ? "text-red-500" : "text-[#8B5CF6] group-focus-within:text-white"
                )}>
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
                {error && (
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2 text-red-500 text-[10px] font-mono uppercase tracking-wider"
                    >
                        <AlertCircle size={12} /> {error}
                    </motion.div>
                )}
            </div>

            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cn(
                    "w-full bg-transparent border-none outline-none text-xl md:text-3xl font-display uppercase transition-colors",
                    error ? "text-red-500 placeholder-red-500/30" : "text-white placeholder-zinc-700"
                )}
            />
        </div>
    )
}