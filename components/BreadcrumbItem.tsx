import Link from "next/link";

const BreadcrumbItem = ({ children, href, isCurrent, ...props }:any) => {
  return (
    <li {...props}>
      <Link href={href} passHref>
        <a
          className={isCurrent ? "text-black" : undefined}
          aria-current={isCurrent ? "page" : "false"}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export default BreadcrumbItem;