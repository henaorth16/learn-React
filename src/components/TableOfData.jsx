import { uppercase } from "../utils";
import { Link } from "react-router-dom";
import Title from "./Title";
import { useThemeContext } from "../lib/context";

export default function TableOfData({ people }) {
  const {theme} = useThemeContext()
  return (
    <div className={`child_wrapper ${theme}`}>
      <Title text="Users" />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {people.map((i) => (
            <tr key={i.id}>
              <td>
                <Link to={`/${i.id}`}>{i.id}</Link>
              </td>
              <Link to={`/${i.id}`}>{uppercase(i.name)}</Link>
              <td>{i.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
