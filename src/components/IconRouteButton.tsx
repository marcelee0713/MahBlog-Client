import { ROUTES } from "@/shared/constants/routes";
import { IconRoute } from "@/shared/ts/interfaces/global";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const IconRouteButton: React.FC<IconRoute> = ({
  icon: Icon,
  route,
  text,
  onClick,
  className,
}) => {
  const currentRoute = usePathname().split("/")[1].toLowerCase();

  const onTheSameRoute = currentRoute === route.toLowerCase();

  return (
    <Link
      href={ROUTES[route]}
      onClick={onClick}
      className={`icon-button-style ${className} ${
        onTheSameRoute && "!theme-accent"
      }`}
    >
      <Icon size={20} />
      <div className="text-sm">{text}</div>
    </Link>
  );
};
