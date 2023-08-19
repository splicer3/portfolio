import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { SectionName } from "@/lib/types";

import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useSectionInView = (
    sectionName: SectionName,
    threshold = 0.75
    ) => {
    const { ref, inView } = useInView({
        threshold,
      });
    
      const { setActiveSection, lastClick } = useActiveSectionContext();
    
      useEffect(() => {
        if (inView && Date.now() - lastClick > 1000) {
          setActiveSection(sectionName);
        }
      }, [inView, setActiveSection, lastClick, sectionName]);

      return {
        ref,
      }
}