import { useReveal } from "../hooks/useReveal";
import "./Skills.css";

type SkillBadge = {
  name: string;
  badgeUrl: string;
};

const skillSections: Record<string, { isCarousel: boolean; items: SkillBadge[] }> = {
  "Fullstack": {
    isCarousel: true,
    items: [
      { name: "TypeScript", badgeUrl: "https://img.shields.io/badge/TypeScript-141414?style=for-the-badge&logo=typescript&logoColor=3178C6" },
      { name: "Bun", badgeUrl: "https://img.shields.io/badge/Bun-141414?style=for-the-badge&logo=bun&logoColor=FBF0DF" },
      { name: "Laravel", badgeUrl: "https://img.shields.io/badge/Laravel-141414?style=for-the-badge&logo=laravel&logoColor=FF2D20" },
      { name: "Svelte", badgeUrl: "https://img.shields.io/badge/Svelte-141414?style=for-the-badge&logo=svelte&logoColor=FF3E00" },
      { name: "PNPM", badgeUrl: "https://img.shields.io/badge/pnpm-141414?style=for-the-badge&logo=pnpm&logoColor=F69220" },
      { name: "Turborepo", badgeUrl: "https://img.shields.io/badge/Turborepo-141414?style=for-the-badge&logo=turborepo&logoColor=EF4444" },
    ],
  },
  "Frontend": {
    isCarousel: true,
    items: [
      { name: "React", badgeUrl: "https://img.shields.io/badge/React-141414?style=for-the-badge&logo=react&logoColor=61DAFB" },
      { name: "Vite", badgeUrl: "https://img.shields.io/badge/Vite-141414?style=for-the-badge&logo=vite&logoColor=646CFF" },
      { name: "Tailwind CSS", badgeUrl: "https://img.shields.io/badge/Tailwind_CSS-141414?style=for-the-badge&logo=tailwindcss&logoColor=06B6D4" },
      { name: "Shadcn UI", badgeUrl: "https://img.shields.io/badge/shadcn%2Fui-141414?style=for-the-badge&logo=shadcnui&logoColor=FFFFFF" },
      { name: "Shield IO", badgeUrl: "https://img.shields.io/badge/Shields.io-141414?style=for-the-badge&logo=shieldsdotio&logoColor=4c1" },
    ],
  },
  "Backend": {
    isCarousel: true,
    items: [
      { name: "Node.js", badgeUrl: "https://img.shields.io/badge/Node.js-141414?style=for-the-badge&logo=nodedotjs&logoColor=5FA04E" },
      { name: "Rust", badgeUrl: "https://img.shields.io/badge/Rust-141414?style=for-the-badge&logo=rust&logoColor=DEA584" },
      { name: "PHP", badgeUrl: "https://img.shields.io/badge/PHP-141414?style=for-the-badge&logo=php&logoColor=777BB4" },
    ],
  },
  "Systems": {
    isCarousel: true,
    items: [
      { name: "Fastify", badgeUrl: "https://img.shields.io/badge/Fastify-141414?style=for-the-badge&logo=fastify&logoColor=FFFFFF" },
      { name: "Express", badgeUrl: "https://img.shields.io/badge/Express-141414?style=for-the-badge&logo=express&logoColor=FFFFFF" },
      { name: "Docker", badgeUrl: "https://img.shields.io/badge/Docker-141414?style=for-the-badge&logo=docker&logoColor=2496ED" },
      { name: "PostgreSQL", badgeUrl: "https://img.shields.io/badge/PostgreSQL-141414?style=for-the-badge&logo=postgresql&logoColor=4169E1" },
      { name: "SQLite", badgeUrl: "https://img.shields.io/badge/SQLite-141414?style=for-the-badge&logo=sqlite&logoColor=003B57" },
      { name: "MySQL", badgeUrl: "https://img.shields.io/badge/MySQL-141414?style=for-the-badge&logo=mysql&logoColor=4479A1" },
      { name: "REST API", badgeUrl: "https://img.shields.io/badge/REST_API-141414?style=for-the-badge" },
      { name: "Redis", badgeUrl: "https://img.shields.io/badge/Redis-141414?style=for-the-badge&logo=redis&logoColor=FF4438" },
      { name: "Nginx", badgeUrl: "https://img.shields.io/badge/Nginx-141414?style=for-the-badge&logo=nginx&logoColor=009639" },
      { name: "Apache", badgeUrl: "https://img.shields.io/badge/Apache-141414?style=for-the-badge&logo=apache&logoColor=D22128" },
    ],
  },
  "Desktop & Mobile": {
    isCarousel: true,
    items: [
      { name: "Tauri", badgeUrl: "https://img.shields.io/badge/Tauri-141414?style=for-the-badge&logo=tauri&logoColor=24C8D8" },
      { name: "Electron", badgeUrl: "https://img.shields.io/badge/Electron-141414?style=for-the-badge&logo=electron&logoColor=47848F" },
      { name: "Flutter", badgeUrl: "https://img.shields.io/badge/Flutter-141414?style=for-the-badge&logo=flutter&logoColor=02569B" },
      { name: "Dart", badgeUrl: "https://img.shields.io/badge/Dart-141414?style=for-the-badge&logo=dart&logoColor=0175C2" },
      { name: "Capacitor", badgeUrl: "https://img.shields.io/badge/Capacitor-141414?style=for-the-badge&logo=capacitor&logoColor=119EFF" },
    ],
  },
  "AI": {
    isCarousel: true,
    items: [
      { name: "Hermes", badgeUrl: "https://img.shields.io/badge/Hermes-141414?style=for-the-badge" },
      { name: "OpenClaw", badgeUrl: "https://img.shields.io/badge/OpenClaw-141414?style=for-the-badge" },
      { name: "Ollama", badgeUrl: "https://img.shields.io/badge/Ollama-141414?style=for-the-badge&logo=ollama&logoColor=FFFFFF" },
      { name: "Google Colab", badgeUrl: "https://img.shields.io/badge/Google_Colab-141414?style=for-the-badge&logo=googlecolab&logoColor=F9AB00" },
      { name: "Python", badgeUrl: "https://img.shields.io/badge/Python-141414?style=for-the-badge&logo=python&logoColor=3776AB" },
      { name: "Jupyter Notebook", badgeUrl: "https://img.shields.io/badge/Jupyter-141414?style=for-the-badge&logo=jupyter&logoColor=F37626" },
      { name: "Unsloth", badgeUrl: "https://img.shields.io/badge/Unsloth-141414?style=for-the-badge" },
      { name: "Huggingface", badgeUrl: "https://img.shields.io/badge/Hugging_Face-141414?style=for-the-badge&logo=huggingface&logoColor=FFD21E" },
      { name: "SD WebUI", badgeUrl: "https://img.shields.io/badge/SD_WebUI-141414?style=for-the-badge" },
      { name: "A1111", badgeUrl: "https://img.shields.io/badge/A1111-141414?style=for-the-badge" },
      { name: "ComfyUI", badgeUrl: "https://img.shields.io/badge/ComfyUI-141414?style=for-the-badge" },
    ],
  },
  "Tooling": {
    isCarousel: true,
    items: [
      { name: "Git", badgeUrl: "https://img.shields.io/badge/Git-141414?style=for-the-badge&logo=git&logoColor=F05032" },
      { name: "Linux", badgeUrl: "https://img.shields.io/badge/Linux-141414?style=for-the-badge&logo=linux&logoColor=FCC624" },
      { name: "Figma", badgeUrl: "https://img.shields.io/badge/Figma-141414?style=for-the-badge&logo=figma&logoColor=F24E1E" },
      { name: "VS Code", badgeUrl: "https://img.shields.io/badge/VS_Code-141414?style=for-the-badge&logo=visualstudiocode&logoColor=007ACC" },
      { name: "WSL", badgeUrl: "https://img.shields.io/badge/WSL_2-141414?style=for-the-badge&logo=windows&logoColor=0078D6" },
      { name: "Laragon", badgeUrl: "https://img.shields.io/badge/Laragon-141414?style=for-the-badge" },
      { name: "XAMPP", badgeUrl: "https://img.shields.io/badge/XAMPP-141414?style=for-the-badge&logo=xampp&logoColor=FB7A24" },
      { name: "Obsidian", badgeUrl: "https://img.shields.io/badge/Obsidian-141414?style=for-the-badge&logo=obsidian&logoColor=7C3AED" },
    ],
  },
};

function getMarqueeList(items: SkillBadge[]): SkillBadge[] {
  const repeats = items.length <= 3 ? 8 : items.length <= 8 ? 4 : 2;
  const list: SkillBadge[] = [];
  for (let i = 0; i < repeats; i++) {
    list.push(...items);
  }
  return list;
}

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-inner">
          <div className="skills-label">
            <span>02</span>
            <span>Skills</span>
          </div>

          <div className="skills-body">
            <h2 className="skills-heading">
              Tools &amp; technologies<br />I work with.
            </h2>

            <div className="skills-sections-list reveal" ref={ref}>
              {Object.entries(skillSections).map(([category, section], secIdx) => (
                <div key={category} className="skill-section">
                  <h3 className="skill-section-title">{category}</h3>

                  {section.isCarousel ? (
                    <div className="skill-marquee-track-wrapper">
                      <div className="skill-marquee-track">
                        {(() => {
                          const marqueeList = getMarqueeList(section.items);
                          const halfCount = marqueeList.length / 2;
                          // Kecepatan linier konsisten: 2.6s per item
                          const duration = `${(halfCount * 2.6).toFixed(1)}s`;

                          return (
                            <div
                              className={`skill-marquee-content ${secIdx % 2 === 1 ? "skill-marquee-content-reverse" : ""}`}
                              style={{ animationDuration: duration }}
                            >
                              {marqueeList.map((item, idx) => (
                                <img
                                  key={`${category}-${item.name}-${idx}`}
                                  src={item.badgeUrl}
                                  alt={item.name}
                                  className="official-badge-img"
                                  loading="lazy"
                                  data-cursor
                                />
                              ))}
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  ) : (
                    <div className="skill-static-row">
                      {section.items.map((item) => (
                        <img
                          key={`${category}-${item.name}`}
                          src={item.badgeUrl}
                          alt={item.name}
                          className="official-badge-img"
                          loading="lazy"
                          data-cursor
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

