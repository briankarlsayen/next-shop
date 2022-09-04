import { Children } from "react";
import { Fragment } from "react";

const Breadcrumb = ({ children }: any) => {
  const childrenArray = Children.toArray(children);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <Fragment key={index}>
          {child}
          <span>/</span>
        </Fragment>
      );
    }
    return child;
  });

  return (
    <nav className="mt-2 x-spacing" aria-label="breadcrumb">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;