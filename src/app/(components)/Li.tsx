import { ReactElement } from "react";

type LiProps = {
  children: React.ReactNode;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const Li = ({ children }: LiProps): ReactElement => (
  <li className="my-2 list-inside before:mr-2 before:content-['\2014'] dark:before:text-formal-grey">
    {children}
  </li>
);

export default Li;
