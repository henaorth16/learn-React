import { useContext } from "react";
import { uppercase } from "../utils";
import { Link } from "react-router-dom";
import { ThemeProvider } from "../App";
import Title from "./Title";

export default function Child({ people }) {
  const {theme, hue} = useContext(ThemeProvider)
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
