import { useState, useEffect } from 'react';

export function useActiveSection(sectionIds, options = {}) {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const { rootMargin = '-50% 0px -50% 0px', threshold = 0 } = options;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin, threshold }
    );

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sectionIds, options.rootMargin, options.threshold]);

  return activeSection;
}