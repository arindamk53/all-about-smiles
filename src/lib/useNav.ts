import { useLocation, useNavigate } from "react-router-dom";

/** sessionStorage key used to remember a section to scroll to after navigating home. */
export const SCROLL_TARGET_KEY = "aas_scroll_target";

/**
 * Returns a helper that scrolls to a section on the home page. If the user is
 * on another route, it first navigates home and stashes the target so the Home
 * component can scroll to it once mounted.
 */
export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return (sectionId: string) => {
    if (location.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    sessionStorage.setItem(SCROLL_TARGET_KEY, sectionId);
    navigate("/");
  };
}
