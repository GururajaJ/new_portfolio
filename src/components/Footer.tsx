import { portfolio } from "@/config/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} {portfolio.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {portfolio.socials.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
