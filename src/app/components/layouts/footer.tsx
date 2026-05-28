import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { siteConfig } from '@/src/lib/site';
import LeetCodeIcon from '@/src/app/components/ui/leetcode-icon';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  leetcode: LeetCodeIcon,
  instagram: Instagram,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-10 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <p className="text-2xl font-bold text-white">Supriyo Pal</p>
          <p className="max-w-xl text-sm leading-relaxed text-gray-400">
            Full stack developer portfolio focused on Next.js, MERN, Spring Boot,
            and scalable backend systems for modern web products.
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 text-sm text-cyan-300 transition-colors hover:text-cyan-200"
          >
            <Mail size={16} />
            <span>{siteConfig.email}</span>
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
            Connect
          </p>
          <div className="flex gap-3">
            {siteConfig.socialLinks.map((social) => {
              const Icon = iconMap[social.platform as keyof typeof iconMap];

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          <div className="text-sm text-gray-500">
            <p>{siteConfig.location}</p>
            <p>© {year} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}