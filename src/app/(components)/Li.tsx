import { ReactElement } from "react";

type LiProps = {
  children: React.ReactNode;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const Li = ({ children }: LiProps): ReactElement => (
  <li className="relative my-2 list-inside pl-4 before:absolute before:-ml-4 before:mr-2 before:text-gray-400 before:content-['–'] dark:before:text-formal-grey">
    {children}
  </li>
);

export default Li;
