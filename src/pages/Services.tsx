import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Clapperboard, Sparkles, Wand2, Box, Film, Layers } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Character Animation",
    description: "Breathe life into characters with fluid, expressive animation that tells compelling stories and connects with audiences.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description: "Dynamic motion design for brands, titles, UI animations, and broadcast graphics that captivate and communicate.",
  },
  {
    icon: Wand2,
    title: "Visual Effects (VFX)",
    description: "Photorealistic VFX compositing and simulation — explosions, particles, environments, and seamless integration.",
  },
  {
    icon: Box,
    title: "Product Animation",
    description: "Showcase products in stunning 3D with cinematic lighting, materials, and camera work that drive conversions.",
  },
  {
    icon: Layers,
    title: "Industrial Product Animation",
    description: "High-precision 3D animation for industrial machinery, manufacturing processes, and technical product demonstrations.",
  },
  {
    icon: Film,
    title: "Short Films",
    description: "End-to-end production of animated short films, from storyboard and modeling to final render and post-production.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-primary/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold"
          >
            Our <span className="text-gradient-primary">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            Premium 3D animation services tailored to elevate your brand and captivate your audience.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.1}>
              <div className="glass rounded-2xl p-8 h-full group hover:border-primary/40 hover:glow-primary transition-all duration-500 flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                {/* <button className="mt-6 text-sm text-primary font-medium hover:underline self-start">
                  Learn More →
                </button> */}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding border-t border-border">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to <span className="text-gradient-primary">Create</span>?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Let's discuss your project and bring your vision to life with world-class 3D animation.
          </p>
          <a
            href="/contact"
            className="inline-flex px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:glow-primary transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </AnimatedSection>
      </section>
    </div>
  );
};

export default Services;
