type LiProps = {
  children: string;
  className?: string;
}; /* use `interface` if exporting so that consumers can extend */

const Li = ({ children }: LiProps): React.JSX.Element => (
  <li className="before:mr-2 before:content-['\2014'] dark:before:text-formal-grey">
    {children}
  </li>
);

export default Li;
