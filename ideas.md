# Futuristic Hero — Design Brainstorm

<response>
<text>
## Idea 1: Void Operator

**Design Movement:** Cyberpunk Brutalism — raw, unapologetic, machine-aesthetic
**Core Principles:**
- Monochrome base with single hyper-saturated accent (crimson red)
- Stark contrast between empty void and dense information
- Typography as structural element, not decoration
- Asymmetric tension: heavy left anchor, floating right void

**Color Philosophy:** Near-black (#050508) canvas with crimson (#FF0033) as the only warm color — echoing the scanning red line from the Three.js effect. White text at 90% opacity for subtle softness.

**Layout Paradigm:** Full-bleed canvas. The Three.js scene IS the background. Text anchored bottom-left, not centered. Explore button bottom-center.

**Signature Elements:**
- Thin horizontal rule lines (1px) in crimson at 20% opacity
- Monospaced secondary text for technical feel
- Letter-spacing: 0.3em on all caps labels

**Interaction Philosophy:** Minimal — the Three.js scene handles all visual drama. UI elements are silent observers.

**Animation:** Words slide up from below with clip-path reveal. Subtitle fades in with slight blur-to-sharp transition.

**Typography System:** "Space Grotesk" (display, 900 weight) + "JetBrains Mono" (mono, labels)
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## Idea 2: Spectral Depth — CHOSEN

**Design Movement:** Dark Sci-Fi Minimalism — cinematic, atmospheric, restrained
**Core Principles:**
- Deep space black background with the 3D scene as the sole light source
- Text as light: pure white, bold, glowing subtly
- Breathing room: generous padding, nothing competes with the hero visual
- Vertical rhythm: title stacks with deliberate line-height

**Color Philosophy:** Background is pure black (#000000). The Three.js bloom and red scan line provide all color. Text is white. The "Scroll to explore" button is ghosted — white border, transparent fill — so it never fights the scene.

**Layout Paradigm:** Centered vertically and horizontally. The Three.js canvas fills the full viewport. Text floats above as a translucent overlay. The explore button sits at the absolute bottom center.

**Signature Elements:**
- Thin letter-spacing (0.15em) on the title for cinematic width
- Ghost button with animated pulsing border
- Subtle text-shadow glow on the title matching the red scan line

**Interaction Philosophy:** The scene responds to mouse movement (parallax depth). Everything else is passive.

**Animation:** Words appear with a glitch-flash then settle. Subtitle rises from below. Button fades in last with a slow pulse.

**Typography System:** "Orbitron" (display, 800 weight) + "Inter" (body, 400) — Orbitron for the sci-fi title, Inter for readability of subtitle.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
## Idea 3: Neural Interface

**Design Movement:** Biopunk / Organic Tech — living systems, neural networks
**Core Principles:**
- Warm dark tones (deep navy + charcoal) instead of cold black
- Organic curves mixed with sharp technical lines
- Data-stream aesthetic: numbers and symbols in the background
- Layered depth: multiple z-levels of UI elements

**Color Philosophy:** Background #0A0E1A (deep navy). Accent: electric teal (#00FFD1). The Three.js red scan creates tension against the teal — complementary contrast.

**Layout Paradigm:** Off-center: title at 35% from left, scene slightly right-biased. Creates dynamic visual tension.

**Signature Elements:**
- Animated scanline overlay (CSS, separate from Three.js)
- Corner bracket decorations on the title block
- Numerical counter in top-right (frame count / time)

**Interaction Philosophy:** UI reacts to scroll — parallax layers shift at different rates.

**Animation:** Title characters appear one by one with a typewriter effect. Teal glow pulses on hover.

**Typography System:** "Rajdhani" (display, 700) + "Source Code Pro" (mono)
</text>
<probability>0.06</probability>
</response>

---

## Selected Design: **Idea 2 — Spectral Depth**

Pure black canvas, white glowing text, ghost button. The Three.js WebGPU scene with its bloom and red scan line provides ALL visual drama. The UI is a silent, elegant frame around the spectacle.
