import { motion } from "framer-motion";
import { Cpu, Terminal, Layers, Palette } from "lucide-react";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", background: "var(--color-bg-000)", color: "var(--color-text-primary)", overflow: "hidden" }}>
      {/* Scanline overlay for cinematic phonk vibe */}
      <div className="scanlines" />

      {/* Ambient Red Glow in Background */}
      <div className="ambient-red-glow" style={{ top: "-10%", left: "-10%", opacity: 0.6 }} />
      <div className="ambient-red-glow" style={{ bottom: "-20%", right: "-10%", opacity: 0.4 }} />

      {/* 1. Header/Navigation */}
      <motion.nav 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
          background: "rgba(0, 0, 0, 0.8)",
          backdropFilter: "blur(15px)",
          borderBottom: "1px solid var(--color-border)",
          padding: "20px 5%"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1400px", margin: "0 auto" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Cpu size={22} color="var(--color-red-neon)" style={{ filter: "drop-shadow(0 0 5px var(--color-red-primary))" }} />
            <span style={{ 
              fontFamily: "var(--font-heading)", 
              fontWeight: 700, 
              fontSize: "20px", 
              letterSpacing: "0.1em",
              textShadow: "0 0 10px rgba(255, 0, 0, 0.5)"
            }}>
              AISLE<span style={{ color: "var(--color-orange-neon)" }}>OS</span>
            </span>
          </div>

          {/* Badge */}
          <div style={{ 
            fontSize: "10px", 
            fontFamily: "var(--font-heading)", 
            fontWeight: 700, 
            letterSpacing: "0.15em",
            color: "var(--color-red-neon)",
            border: "1px solid var(--color-red-neon)",
            padding: "4px 10px",
            borderRadius: "2px",
            background: "rgba(255, 45, 45, 0.05)",
            boxShadow: "var(--glow-red)"
          }}>
            PHASE 1: ACTIVE
          </div>
        </div>
      </motion.nav>

      {/* 2. Hero Section */}
      <section style={{ 
        minHeight: "100vh", 
        padding: "160px 5% 80px", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
        position: "relative"
      }}>
        <div style={{ maxWidth: "1200px", width: "100%" }}>
          
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "8px", 
              color: "var(--color-text-secondary)", 
              fontSize: "12px", 
              fontWeight: 600, 
              letterSpacing: "0.2em",
              fontFamily: "var(--font-heading)",
              textTransform: "uppercase",
              marginBottom: "20px"
            }}
          >
            <Palette size={14} color="var(--color-red-neon)" />
            Brand & CSS Design System Scaffolded
          </motion.div>

          {/* Massive Typography */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{ 
              fontSize: "clamp(48px, 8vw, 96px)", 
              lineHeight: 0.9, 
              fontWeight: 700, 
              letterSpacing: "-0.04em",
              textTransform: "uppercase",
              maxWidth: "1000px",
              marginBottom: "30px"
            }}
          >
            THE LUXURY <br />
            <span className="gradient-text-red">PHONK</span> ENTERPRISE <br />
            <span className="gradient-text-orange">FOUNDATION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: "clamp(16px, 2.5vw, 20px)", 
              color: "var(--color-text-secondary)", 
              maxWidth: "700px", 
              lineHeight: 1.6,
              fontWeight: 300,
              marginBottom: "40px"
            }}
          >
            Establishing the high-contrast aesthetic. Deep blacks, glowing red barriers, scanlines, and typographic scale tailored for predictive retail intelligence.
          </motion.p>

          {/* Glowing divider line */}
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="glowing-divider" 
          />

          {/* Grid Layout of Design Tokens */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.4 }
              }
            }}
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
              gap: "30px", 
              marginTop: "50px" 
            }}
          >
            {/* Color Swatch Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-panel" 
              style={{ padding: "30px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Palette size={20} color="var(--color-red-neon)" />
                <h3 style={{ fontSize: "18px", textTransform: "uppercase" }}>Color Tokens</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#000000", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>PITCH BLACK</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>#000000 (var(--color-bg-000))</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#0A0A0A", border: "1px solid rgba(255,255,255,0.1)" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>DEEP CHARCOAL</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>#0A0A0A (var(--color-bg-100))</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#FF2D2D" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>NEON CRIMSON</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>#FF2D2D (var(--color-red-neon))</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                  <div style={{ width: "40px", height: "40px", background: "#FF4D00" }} />
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 700 }}>NEON ORANGE</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>#FF4D00 (var(--color-orange-neon))</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Typography Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-panel" 
              style={{ padding: "30px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Terminal size={20} color="var(--color-red-neon)" />
                <h3 style={{ fontSize: "18px", textTransform: "uppercase" }}>Typography Scale</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "4px" }}>Headings: Space Grotesk</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 700 }}>Space Grotesk Bold 24px</div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "4px" }}>Body: Inter</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                    Inter regular 14px provides high legibility for large-scale category data tables, metrics feeds, and simulated parameters.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Classes Card */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="glass-panel" 
              style={{ padding: "30px" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                <Layers size={20} color="var(--color-red-neon)" />
                <h3 style={{ fontSize: "18px", textTransform: "uppercase" }}>Visual Utilities</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "6px" }}>Glassmorphism Panel (Hover to Glow)</div>
                  <div className="glass-panel" style={{ padding: "10px 15px", fontSize: "12px", border: "1px solid var(--color-border)" }}>
                    .glass-panel
                  </div>
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "6px" }}>Premium Cyber Buttons</div>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "11px" }}>Primary</button>
                    <button className="btn-secondary" style={{ padding: "8px 16px", fontSize: "11px" }}>Secondary</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Neon grid overlay */}
      <div className="neon-grid" style={{ opacity: 0.15 }} />
    </div>
  );
}
