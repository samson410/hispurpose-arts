import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

const categories = [
  "All",
  "Character",
  "Product",
  "Industrial Product",
  "VFX",
  "Motion Graphics",
  "Short Film",
];

// ✅ CLEAN STRUCTURE (ONLY EMBED LINKS)
const portfolioItems = [
  {
    id: 1,
    title: "Project 1",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114609/3d_short_clip___02_lzkqzz.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114609/3d_short_clip___02_lzkqzz.JPG",
  },
  {
    id: 2,
    title: "Project 2",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069446/Mr_jonas_project_axo7s9.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069446/Mr_jonas_project_axo7s9.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069407/FInal_RO_ani_xwrymp.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069407/FInal_RO_ani_xwrymp.jpg",
  },
  // {
  //   id: 4,
  //   title: "Project 4",
  //   category: "Character",
  //   videoUrl: "",
  //   thumbnail: "/thumbnails/character-walk.jpg",
  // },
  // {
  //   id: 5,
  //   title: "Project 5",
  //   category: "VFX",
  //   videoUrl: "",
  //   thumbnail: "/auto2.JPG",
  // },
  // {
  //   id: 6,
  //   title: "Project 6",
  //   category: "Motion Graphics",
  //   videoUrl: "",
  //   thumbnail: "/thumbnails/motion-intro.jpg",
  // },
  // {
  //   id: 7,
  //   title: "Project 7",
  //   category: "Short Film",
  //   videoUrl: "",
  //   thumbnail: "/thumbnails/short-film.jpg",
  // },
  {
    id: 8,
    title: "Project 8",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069361/Fireplace_project_msihuy.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069361/Fireplace_project_msihuy.jpg",
  },
  {
    id: 9,
    title: "Project 9",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069298/Floating_stage_project_for_Mr_Dan_1_tgvmho.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069298/Floating_stage_project_for_Mr_Dan_1_tgvmho.jpg",
  },
  // {
  //   id: 10,
  //   title: "Project 10",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069288/hispeaker_r4ybzb.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069288/hispeaker_r4ybzb.jpg",
  // },
  
  {
    id: 11,
    title: "Project 11",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069259/hinge_video_4_fntdbt.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069259/hinge_video_4_fntdbt.jpg",
  },
  
  
  {
    id: 12,
    title: "Project 12",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069205/Final_Football_Ani_c58xme.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775069205/Final_Football_Ani_c58xme.jpg",
  },
  {
    id: 13,
    title: "Project 13",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069154/Flavour_ice___Final_1_omhbfw.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069154/Flavour_ice___Final_1_omhbfw.jpg",
  },
  
  {
    id: 14,
    title: "Project 14",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069154/Final_Lamp_3rd_ani_1_qunix1.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775069154/Final_Lamp_3rd_ani_1_qunix1.jpg",
  },
  {
    id: 15,
    title: "Project 15",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078230/Final_Camera_Pipe_Ani_nryexe.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_4/q_auto/f_auto/v1775078230/Final_Camera_Pipe_Ani_nryexe.jpg",
  },
  {
    id: 16,
    title: "Project 16",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078176/Thermomix_Revised_Final_HD_lm4f9q.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078176/Thermomix_Revised_Final_HD_lm4f9q.jpg",
  },
  {
    id: 17,
    title: "Project 17",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078137/Final_Gym_Animation_uh4sun.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078137/Final_Gym_Animation_uh4sun.jpg",
  },
  {
    id: 18,
    title: "Project 18",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078099/Sunlight_project_aclrms.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078099/Sunlight_project_aclrms.jpg",
  },
  {
    id: 19,
    title: "Project 19",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078090/speaker_project_xyuzkj.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078090/speaker_project_xyuzkj.jpg",
  },
  {
    id: 20,
    title: "Project 20",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775078073/vacuum_cleaner_project_dia25g.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775078073/vacuum_cleaner_project_dia25g.jpg",
  },
  {
    id: 21,
    title: "Project 21",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078073/Microwave_project_baarkg.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775078073/Microwave_project_baarkg.jpg",
  },
  
  {
    id: 22,
    title: "Project 22",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077941/Safetykleen_-_blue_background_final-2_eokhrs.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077941/Safetykleen_-_blue_background_final-2_eokhrs.jpg",
  },

  {
    id: 23,
    title: "Project 23",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077933/Iron_Project_uiei5d.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077933/Iron_Project_uiei5d.jpg",
  },

  {
    id: 24,
    title: "Project 24",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775077720/wax__Final_v8uxuy.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_4/v1775077720/wax__Final_v8uxuy.jpg",
  },
  // {
  //   id: 25,
  //   title: "Project 25",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775077687/Solar_2D_project_odojh9.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775077687/Solar_2D_project_odojh9.jpg",
  // },
  {
    id: 26,
    title: "Project 26",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077903/Floating_stage_project_for_Mr_Dan_eur0fr.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775077903/Floating_stage_project_for_Mr_Dan_eur0fr.jpg",
  },
  {
    id: 27,
    title: "Project 27",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775080385/Final_Camera_Pipe_Clip1_nsooku.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/q_auto/f_auto/v1775080385/Final_Camera_Pipe_Clip1_nsooku.jpg",
  },
  {
    id: 28,
    title: "Project 28",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775080327/Final_Camera_Pipe_Clip4_an4tmo.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_1/q_auto/f_auto/v1775080327/Final_Camera_Pipe_Clip4_an4tmo.jpg",
  },
  {
    id: 29,
    title: "Project 29",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775081878/3d_short_clip___06_sbac6e.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/v1775081878/3d_short_clip___06_sbac6e.jpg",
  },
  // {
  //   id: 30,
  //   title: "Project 30",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775081838/Copy_of_3d_rotation_Jewelry_vg3tlf.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/v1775081838/Copy_of_3d_rotation_Jewelry_vg3tlf.jpg",
  // },
  {
    id: 31,
    title: "Project 31",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775082009/Instagram_shot_for_Mr_Jack_vqwrkp.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_3/v1775082009/Instagram_shot_for_Mr_Jack_vqwrkp.jpg",
  },
  // {
  //   id: 32,
  //   title: "Project 32",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775082015/Product_animation_Grater_hpe2k1.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/v1775082015/Product_animation_Grater_hpe2k1.jpg",
  // },
  // {
  //   id: 33,
  //   title: "Project 33",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082238/Project_Commercial_wyynet.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/q_auto/f_auto/v1775082238/Project_Commercial_wyynet.jpg",
  // },
  {
    id: 34,
    title: "Project 34",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775083013/excepu_project_ypk2zz.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_2/q_auto/f_auto/v1775083013/excepu_project_ypk2zz.jpg",
  },
  {
    id: 35,
    title: "Project 35",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082990/Final_app_Laser_ani_myokb9.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_4/q_auto/f_auto/v1775082990/Final_app_Laser_ani_myokb9.jpg",
  },
  {
    id: 37,
    title: "Project 37",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082983/Final_Terbonn_Glass_ani_1_zfucjn.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082983/Final_Terbonn_Glass_ani_1_zfucjn.jpg",
  },
  {
    id: 38,
    title: "Project 38",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082594/Remix_case_ewtfu7.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_14/q_auto/f_auto/v1775082594/Remix_case_ewtfu7.jpg",
  },
  // {
  //   id: 39,
  //   title: "Project 39",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775082496/Stereo_Speaker_animation_vnmlmk.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/so_12.8/q_auto/f_auto/v1775082496/Stereo_Speaker_animation_vnmlmk.jpg",
  // },
  //   {
  //   id: 40,
  //   title: "Project 40",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775082238/Project_Commercial_wyynet.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775082238/Project_Commercial_wyynet.jpg",
  // },
    {
    id: 41,
    title: "Project 41",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775114609/3d_short_clip___01_mxl967.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775114609/3d_short_clip___01_mxl967.jpg",
  },
    {
    id: 42,
    title: "Project 42",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775114618/3d_short_clip___07_m7fkuf.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775114618/3d_short_clip___07_m7fkuf.jpg",
  },
    {
    id: 43,
    title: "Project 43",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114622/3d_short_clip___05_q8ogpt.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114622/3d_short_clip___05_q8ogpt.jpg",
  },
  //   {
  //   id: 44,
  //   title: "Project 44",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/Copy_of_4k_Realistic_Jewelry_for_Artpix_kvgitu.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/Copy_of_4k_Realistic_Jewelry_for_Artpix_kvgitu.jpg",
  // },
    {
    id: 45,
    title: "Project 45",
    category: "Industrial Product",
    videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/3d_short_clip___03_rs5eo1.mp4",
    thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114625/3d_short_clip___03_rs5eo1.jpg",
  },
  //   {
  //   id: 46,
  //   title: "Project 46",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114628/Prime_project_wzd4uz.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/q_auto/f_auto/v1775114628/Prime_project_wzd4uz.jpg",
  // },
  //   {
  //   id: 47,
  //   title: "Project 47",
  //   category: "Industrial Product",
  //   videoUrl: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775116824/Cgi_Guitar_pedal_study_pp4twj.mp4",
  //   thumbnail: "https://res.cloudinary.com/dxydu2ubk/video/upload/v1775116824/Cgi_Guitar_pedal_study_pp4twj.jpg",
  // },

  
  
];

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    filter === "All"
      ? portfolioItems
      : portfolioItems.filter((p) => p.category === filter);

  const activeItem = portfolioItems.find(
    (item) => item.id === activeVideo
  );

  return (
    <div className="min-h-screen pt-20">
      {/* HERO */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-accent/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold"
          >
            <span className="text-gradient-primary">Portfolio</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            Explore our collection of cinematic 3D animation projects.
          </motion.p>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "glass text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={(i % 6) * 0.05}>
            <div
            onClick={() => setActiveVideo(item.id)}
            onMouseEnter={() => setHoveredId(item.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="group relative aspect-video rounded-xl overflow-hidden glass cursor-pointer hover:glow-primary transition-all duration-500"
              >
                {/* THUMBNAIL */}
                {hoveredId === item.id && item.videoUrl ? (
                  <video
                    src={item.videoUrl}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />

                {/* PLAY BUTTON */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="text-primary-foreground ml-0.5" />
                  </div>
                </div>

                {/* TEXT */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-xs text-primary font-medium uppercase tracking-wider">
                    {item.category}
                  </span>

                  <h3 className="text-sm font-display font-semibold text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>

                <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-primary/30 transition-colors duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ✅ VIDEO MODAL (NOW USING IFRAME) */}
      {activeVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setActiveVideo(null)}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X size={32} />
          </button>

          {/* VIDEO PLAYER */}
          <div
            className="w-full max-w-4xl aspect-video glass rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
          <video
            className="w-full h-full"
            src={activeItem?.videoUrl}
            controls
            autoPlay
            preload="metadata"
            poster={activeItem?.thumbnail}
          />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Portfolio;