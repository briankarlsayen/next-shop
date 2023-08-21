import Link from 'next/link';

const BreadcrumbItem = ({ children, href, isCurrent, ...props }: any) => {
  const breadName = children.replace('%20', ' ');
  return (
    <li {...props}>
      {isCurrent ? (
        <p>{breadName}</p>
      ) : (
        <Link href={href} passHref>
          <a
            className={isCurrent ? 'text-black' : undefined}
            aria-current={isCurrent ? 'page' : 'false'}
          >
            {breadName}
          </a>
        </Link>
      )}
    </li>
  );
};

export default BreadcrumbItem;
