import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import SocialIcons from "@/components/SocialIcons";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (loading) return;

  if (!form.name || !form.email || !form.subject || !form.message) {
    setToast({ message: "Please fill all fields", type: "error" });
    setTimeout(() => setToast(null), 3000);
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_a7q2bjn",
      "template_ik9p2vh",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "0xNo-_P4NFZ9oYaL5"
    );

    setToast({ message: "Message sent successfully!", type: "success" });

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    setToast({ message: "Failed to send message. Try again.", type: "error" });
  } finally {
    setLoading(false);
    setTimeout(() => setToast(null), 3000);
  }
};
  return (
    <div className="min-h-screen pt-20">
{toast && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div
      className={`px-6 py-4 rounded-xl text-white shadow-2xl text-center min-w-[250px] transition-all duration-300 ${
        toast.type === "success" ? "bg-green-500" : "bg-red-500"
      }`}
    >
      {toast.message}
    </div>
  </div>
)}
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-background to-primary/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-display font-bold"
          >
            Get in <span className="text-gradient-primary">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-xl"
          >
            Have a project in mind? Let's create something extraordinary together.
          </motion.p>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 md:p-12 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Subject</label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:glow-primary transition-all duration-300 hover:scale-105 w-full justify-center md:w-auto"
              >
               <Send size={18} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Or connect with us on social media</p>
            <div className="flex justify-center">
              <SocialIcons />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
