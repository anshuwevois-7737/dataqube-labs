import { Button } from "@/components/ui/button";
import { Phone, Send } from "lucide-react";
import { motion } from "motion/react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.65 0.12 195) 0%, oklch(0.20 0.03 238) 100%)",
      }}
    >
      {/* Pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1 rounded-full bg-white/15 text-white">
            Let's Work Together
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Automate <br className="hidden sm:block" />
            Your Business?
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join 150+ businesses that have transformed their operations with
            DataQube Labs. Get a free consultation and discover how automation
            can work for you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white font-bold text-sm px-8 py-3 h-auto rounded-full hover:bg-white/90 transition-all"
              style={{ color: "oklch(0.17 0.03 240)" }}
              data-ocid="contact.primary_button"
            >
              <Send className="mr-2 w-4 h-4" />
              Get a Free Demo
            </Button>
            <a href="tel:+917737222133">
              <Button
                variant="outline"
                className="border-white/50 text-white font-bold text-sm px-8 py-3 h-auto rounded-full hover:bg-white/10 transition-all w-full sm:w-auto"
                style={{ background: "transparent" }}
                data-ocid="contact.secondary_button"
              >
                <Phone className="mr-2 w-4 h-4" />
                +91 77372 22133
              </Button>
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center">
            {[
              { label: "Phone", value: "+91 77372 22133" },
              { label: "Email", value: "info@dataqubelabs.com" },
              { label: "Response Time", value: "Within 24 hours" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 text-white/70 text-sm"
              >
                <span className="font-semibold text-white">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
