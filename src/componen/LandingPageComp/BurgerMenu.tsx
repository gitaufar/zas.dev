import { useEffect, useState } from "react";

type BurgerMenuList = {
  name: string;
  link: string;
};
type BurgerMenuProps = {
  className?: string;
  listMenu?: BurgerMenuList[];
  size?: number;
  color?: string;
};

export const BurgerMenu = ({
  className,
  listMenu,
  color = "black",
  size = 2,
}: BurgerMenuProps) => {
  const [expandX, setExpandX] = useState(false);
  const [expandY, setExpandY] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      setExpandX(true);
      timeoutId = setTimeout(() => {
        setExpandY(true);
      }, 200);
    } else {
      setExpandY(false);
      timeoutId = setTimeout(() => {
        setExpandX(false);
      }, 200);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  return (
    <div
      style={{ width: `${size / 4}rem`, height: `${size / 5}rem` }}
      className={`relative cursor-pointer ${className}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        style={{ backgroundColor: `${color}` }}
        className={`
      h-[4px] w-full absolute rounded-md transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "top-1/2 rotate-45 -translate-y-1/2"
          : "top-[20%] -translate-y-1/2"
      }
    `}
      ></div>
      <div
        style={{ backgroundColor: `${color}` }}
        className={`
      h-[4px] w-full absolute rounded-md transition-all duration-300 ease-in-out
      ${
        isOpen
        ? "top-[40%] translate-y-1/2 rotate-[-45deg]"
        : "top-[60%] -translate-y-1/2"
      }
    `}
      ></div>
      <div
        style={{ backgroundColor: `${color}` }}
        className={`h-[4px] rounded-md absolute top-[95%]  ${
          isOpen ? "translate-y-4" : ""
        } transition-all duration-300 ease-in-out w-full`}
      >
        <div
          onClick={(e) => {
            isOpen ? e.stopPropagation() : {};
          }}
          style={{ backgroundColor: color }}
          className={`
    flex flex-col gap-4 bg-amber-300 origin-top-left rounded-r-md py-2 transition-all duration-300 ease-in-out w-[50vw] pl-4
    ${isOpen ? "cursor-default" : ""}
    ${expandX ? "scale-x-100" : "scale-x-0"}
    ${expandY ? "scale-y-100" : "scale-y-0"}
  `}
        >
          <ul className="flex flex-col gap-2 text-base font-bold">
            {listMenu?.map((item, index) => (
              <li key={index} className="text-white">
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
