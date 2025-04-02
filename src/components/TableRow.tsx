import {CheckBoxSvg} from '@components/CheckBoxSvg';

interface TableRowProps {
  title: string;
  data: string[];
}

export const TableRow: React.FC<TableRowProps> = ({ title, data = [] }) => (
  <tr>
    <td>{title}</td>
    {data.map((el, index) => (
      <td key={index}>
        <CheckBoxSvg className={el} />
      </td>
    ))}
  </tr>
);