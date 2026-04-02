import { motion } from "framer-motion";
import { useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Play, Award, Users, Star } from "lucide-react";

const demoProjects = [
  {
    id: 1,
    title: "project 1",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775083013/excepu_project_ypk2zz.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775083013/excepu_project_ypk2zz.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069446/Mr_jonas_project_axo7s9.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_3/q_auto/f_auto/v1775069446/Mr_jonas_project_axo7s9.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069407/FInal_RO_ani_xwrymp.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069407/FInal_RO_ani_xwrymp.jpg",
  },
  {
    id: 4,
    title: "project 4",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/3d_short_clip___03_rs5eo1.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/3d_short_clip___03_rs5eo1.jpg",
  },
  {
    id: 5,
    title: "Project 5",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114628/Prime_project_wzd4uz.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114628/Prime_project_wzd4uz.jpg",
  },
  {
    id: 6,
    title: "Project 6",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775116824/Cgi_Guitar_pedal_study_pp4twj.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775116824/Cgi_Guitar_pedal_study_pp4twj.jpg",
  },
];

const stats = [
  { icon: Play, label: "Projects Delivered", value: "60+" },
  { icon: Users, label: "Happy Clients", value: "80+" },
  { icon: Star, label: "Years Experience", value: "4+" },
];

const Index = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const videoRefs = useRef({});
  const [activeVideo, setActiveVideo] = useState(null);
  useEffect(() => {
  demoProjects.forEach((p) => {
    const video = document.createElement("video");
    video.src = p.videoUrl;
  });
}, []);
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(185_100%_50%_/_0.08)_0%,_transparent_70%)]" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
          {/* Grid overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "linear-gradient(hsl(185 100% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(185 100% 50%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter">
              <span className="text-gradient-primary">Hispurpose</span>
              <span className="text-foreground"> Arts</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Crafting cinematic 3D animations that push the boundaries of visual storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:glow-primary transition-all duration-300 hover:scale-105"
            >
              <Play size={18} />
              View Portfolio
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-2.5 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>

      {/* Demo Projects */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-center mb-4">
              Featured <span className="text-gradient-primary">Work</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-lg mx-auto mb-16">
              A selection of our most impactful 3D animation projects.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((project, i) => (
              <AnimatedSection key={project.id} delay={i * 0.1}>
                  <div
                  onClick={() => setActiveVideo(project)}
                    onMouseEnter={() => {
                      setHoveredId(project.id);
                      videoRefs.current[project.id]?.play();
                    }}

                    onMouseLeave={() => {
                      setHoveredId(null);
                      videoRefs.current[project.id]?.pause();
                    }}
                    className="group relative aspect-video rounded-xl overflow-hidden glass cursor-pointer hover:glow-primary transition-all duration-500"
                  >
                  {/* Placeholder gradient */}
                    <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    style={{
                      opacity: hoveredId === project.id ? 0 : 1,
                    }}
                  />

                  <video
                    ref={(el) => (videoRefs.current[project.id] = el)}
                    src={project.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
                    muted
                    loop
                    playsInline
                    preload="auto"
                    style={{
                      opacity: hoveredId === project.id ? 1 : 0,
                    }}
                  />
                  {/* Play icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                      <Play size={24} className="text-primary-foreground ml-1" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-display font-semibold text-foreground mt-1">{project.title}</h3>
                  </div>

                  {/* Hover border glow */}
                  <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              See Full Portfolio
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding border-t border-border">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Clients / Testimonial */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl font-display font-light text-foreground leading-relaxed italic">
              "Hispurpose Arts delivered a cinematic experience that elevated our brand to an entirely new level. Their attention to detail is unmatched."
            </p>
            <div className="mt-8 text-muted-foreground">
              <span className="font-semibold text-foreground">Alex Morgan</span> — Creative Director, StudioX
            </div>
          </AnimatedSection>
        </div>
      </section>
        {activeVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-[90%] max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={activeVideo.videoUrl}
              className="w-full h-full rounded-xl"
              controls
              autoPlay
              playsInline
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
