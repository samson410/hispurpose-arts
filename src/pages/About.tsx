import AnimatedSection from "@/components/AnimatedSection";
import SocialIcons from "@/components/SocialIcons";
import { motion } from "framer-motion";

const skills = [
  "Character Animation",
  "Motion Graphics",
  "Visual Effects (VFX)",
  "Product Animation",
  "Industrial Product Animation",
  "Environment Design",
  "3D Modeling & Texturing",
];

const animationTypes = [
  "Explainer Videos",
  "Cinematic Shorts",
  "Product Demos",
  "Industrial Product Demos",
  "Motion Graphics Reels",
  "VFX Sequences",
  "Architectural Visualization",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(185_100%_50%_/_0.06)_0%,_transparent_60%)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold"
          >
            About <span className="text-gradient-primary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            Where art meets technology to create unforgettable visual experiences.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass">
              <div className="w-full h-full bg-gradient-to-br from-secondary via-muted to-card flex items-center justify-center">
                <span className="text-6xl font-display font-bold text-gradient-primary opacity-40">HA</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Our <span className="text-gradient-primary">Story</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Hispurpose Arts was founded with a singular vision: to bring stories to life through breathtaking 3D animation. With over 8 years of experience in the industry, we've helped brands, studios, and creators transform their ideas into cinematic realities.
              </p>
              <p>
                Our team combines artistic vision with cutting-edge technology, specializing in character animation, visual effects, motion graphics, and product visualization. Every frame we produce is crafted with purpose and precision.
              </p>
              <p>
                From concept to final render, we're dedicated to delivering work that exceeds expectations and leaves lasting impressions.
              </p>
            </div>
            <div className="mt-8">
              <SocialIcons />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding border-t border-border">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Core <span className="text-gradient-primary">Skills</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, i) => (
              <AnimatedSection key={skill} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 text-center hover:border-primary/40 hover:glow-primary transition-all duration-500 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground">{skill}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Animation Types */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold">
              Types of <span className="text-gradient-primary">Animation</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {animationTypes.map((type, i) => (
              <AnimatedSection key={type} delay={i * 0.08}>
                <div className="glass rounded-xl p-6 hover:border-accent/40 hover:glow-accent transition-all duration-500">
                  <span className="text-accent font-mono text-sm">0{i + 1}</span>
                  <h3 className="font-display font-semibold text-foreground mt-2">{type}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
