/**
 * Shared, editorial-style section heading used across the page so every
 * section shares the same rhythm: index → eyebrow → title → description.
 */
export default function SectionHeading({
  index,
  eyebrow,
  title,
  accent,
  description,
  dark = false,
  align = 'left',
  className = '',
  children,
}) {
  const centered = align === 'center';

  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : ''} ${className}`}>
      {(index || eyebrow) && (
        <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`} data-reveal="up">
          {index && (
            <span
              className={`font-mono text-[11px] font-bold tracking-[0.3em] ${
                dark ? 'text-orange-400' : 'text-orange-600'
              }`}
            >
              /{index}
            </span>
          )}
          <span className={`h-px w-8 ${dark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
          {eyebrow && (
            <span
              className={`text-[10px] font-extrabold uppercase tracking-[0.28em] ${
                dark ? 'text-zinc-400' : 'text-zinc-500'
              }`}
            >
              {eyebrow}
            </span>
          )}
        </div>
      )}

      <h2
        className={`mt-5 font-heading font-black uppercase leading-[0.94] tracking-tight text-[clamp(2.1rem,4.6vw,4.1rem)] ${
          dark ? 'text-white' : 'text-zinc-950'
        } ${centered ? 'text-balance' : ''}`}
        data-reveal="up"
        style={{ '--reveal-delay': '80ms' }}
      >
        {title}
        {accent && (
          <>
            {' '}
            <span className="text-gradient-orange">{accent}</span>
          </>
        )}
      </h2>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-sm leading-relaxed sm:text-base ${
            centered ? 'mx-auto' : ''
          } ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}
          data-reveal="up"
          style={{ '--reveal-delay': '140ms' }}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}

