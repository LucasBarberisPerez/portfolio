interface ListItemProps {
  text: string;
  href: string;
  isActive?: boolean;
}
function NavbarListItem({ text, href, isActive }: ListItemProps) {
  const onClickNavLinks = (e: React.MouseEvent<HTMLElement>) => {
    const headerOffsetHeight: number = document.querySelector("header")?.offsetHeight as number;
    const elementToScroll: HTMLElement = document.getElementById(href) as HTMLElement;
    window.scrollTo({
      behavior: "smooth",
      top: elementToScroll.offsetTop - (headerOffsetHeight + 5), // For the extra padding from the sticky menu.
    });
  };
  return (
    <li
      className={`px-2 font-bold text-sm md:text-xl hover:scale-105 transition-all ${
        isActive ? "active" : ""
      }`}
      onClick={onClickNavLinks}
    >
      {text}
    </li>
  );
}

export default NavbarListItem;
