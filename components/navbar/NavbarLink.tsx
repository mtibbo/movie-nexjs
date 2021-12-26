import { ReactElement, ReactNode, Children, cloneElement } from "react";

interface NavbarLinkProps {
  name?: String,
  children?: ReactNode,
  textSize?: string
}

export const NavbarLink = ({ name, textSize = 'lg', children }: NavbarLinkProps) => {
  return (
    <a href='#' className={`font-medium px-4`}>
      {Children.map((children as ReactElement), (child: ReactElement<any>, index: number) =>
        cloneElement(child, { key: index, className: "inline-block mr-1" })
      )}
      {name &&
        <span className={`text-${textSize}`}>{name}</span>
      }
    </a>
  )
}