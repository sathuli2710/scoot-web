export type NavbarLink = {
  label: string;
  path: string;
  isNewTab: boolean;
};

export type NavbarProps = {
  navLinks: NavbarLink[];
};

export type NavLinksCompProps = {
  isSmallScreen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
} & NavbarProps;

export type HamburgerProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
