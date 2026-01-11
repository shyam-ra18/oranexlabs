import { useState } from "react";
import { ArrowRight, AlertCircle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    "Web App",
    "Mobile App",
    "Redesign",
    "E-commerce"
];

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        service: "",
        message: "",
        termsAccepted: false,
    });

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = "Invalid email";
        }

        if (!formData.service) newErrors.service = "Please select a service";
        if (!formData.termsAccepted) newErrors.terms = "Required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Submitting:", formData);
            // Add submit logic here
        }
    };

    return (
        <section className="bg-[#050505] py-24 px-6 border-t border-white/10" id="contact">
            <div className="max-w-lg mx-auto">

                {/* 1. Simple Header */}
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                        Let's work together.
                    </h2>
                    <p className="text-zinc-500 text-sm">
                        Fill out the form below to start your project. <br />
                        Fields marked with <span className="text-red-500">*</span> are required.
                    </p>
                </div>

                {/* 2. Single Column Form */}
                <form onSubmit={handleSubmit} className="space-y-8">

                    {/* Name */}
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => {
                                setFormData({ ...formData, name: e.target.value });
                                if (errors.name) setErrors({ ...errors, name: "" });
                            }}
                            className={cn(
                                "w-full bg-transparent border-b py-3 text-white placeholder-zinc-700 outline-none transition-colors",
                                errors.name
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-white/20 focus:border-[#8B5CF6]"
                            )}
                        />
                        {errors.name && (
                            <span className="text-[10px] text-red-500 flex items-center gap-1">
                                <AlertCircle size={10} /> {errors.name}
                            </span>
                        )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="john@company.com"
                            value={formData.email}
                            onChange={(e) => {
                                setFormData({ ...formData, email: e.target.value });
                                if (errors.email) setErrors({ ...errors, email: "" });
                            }}
                            className={cn(
                                "w-full bg-transparent border-b py-3 text-white placeholder-zinc-700 outline-none transition-colors",
                                errors.email
                                    ? "border-red-500 focus:border-red-500"
                                    : "border-white/20 focus:border-[#8B5CF6]"
                            )}
                        />
                        {errors.email && (
                            <span className="text-[10px] text-red-500 flex items-center gap-1">
                                <AlertCircle size={10} /> {errors.email}
                            </span>
                        )}
                    </div>

                    {/* Service Selection Tabs */}
                    <div className="space-y-4">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                            Select Service <span className="text-red-500">*</span>
                        </label>
                        <div className="flex flex-wrap gap-3">
                            {services.map((service) => (
                                <button
                                    key={service}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, service });
                                        if (errors.service) setErrors({ ...errors, service: "" });
                                    }}
                                    className={cn(
                                        "px-4 py-2 text-[10px] font-mono uppercase tracking-wider transition-all duration-300 sharp-edge border",
                                        formData.service === service
                                            ? "bg-[#8B5CF6] border-[#8B5CF6] text-white"
                                            : "bg-transparent border-white/10 text-zinc-500 hover:border-white/30 hover:text-white"
                                    )}
                                >
                                    {service}
                                </button>
                            ))}
                        </div>
                        {errors.service && (
                            <span className="text-[10px] text-red-500 flex items-center gap-1">
                                <AlertCircle size={10} /> {errors.service}
                            </span>
                        )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                            Project Details
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about your project..."
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder-zinc-700 outline-none focus:border-[#8B5CF6] transition-colors resize-none"
                        />
                    </div>

                    {/* Terms */}
                    <div className="pt-4">
                        <label className="flex items-start gap-3 cursor-pointer group">
                            <div className={cn(
                                "mt-0.5 w-4 h-4 border flex items-center justify-center transition-colors flex-shrink-0",
                                formData.termsAccepted
                                    ? "bg-[#8B5CF6] border-[#8B5CF6]"
                                    : errors.terms
                                        ? "border-red-500"
                                        : "border-zinc-700 group-hover:border-white"
                            )}>
                                {formData.termsAccepted && <Check size={12} className="text-white" />}
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
                                "text-xs text-zinc-500 select-none transition-colors",
                                errors.terms && "text-red-500"
                            )}>
                                I agree to the processing of my personal data. <span className="text-red-500">*</span>
                            </span>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="group/btn relative w-full h-12 bg-white text-black font-bold text-sm uppercase tracking-widest overflow-hidden mt-8 sharp-edge transition-all border border-white"
                    >
                        <span className="relative z-10 flex items-center justify-center gap-2 group-hover/btn:text-white transition-colors duration-300">
                            Send Request <ArrowRight size={16} />
                        </span>
                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-vibranium transform translate-y-full transition-transform duration-300 ease-out group-hover/btn:translate-y-0" />
                    </button>
                </form>
            </div>
        </section>
    );
}