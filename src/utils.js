export const getImageUrl = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};

export const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId.slice(1));
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
    });
  }
};
