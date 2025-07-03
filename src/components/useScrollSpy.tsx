import { useEffect, useState } from "react";

export default function useScrollSpy(sectionIds: string[], offset = 0): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      let currentId = "";

      for (const id of sectionIds) {
        const el = document.querySelector<HTMLElement>(id);
        console.log();
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top - offset <= 0 && rect.bottom > offset) {
          currentId = id;
          break;
        }
      }

      setActiveId(currentId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds, offset]);

  return activeId;
}
