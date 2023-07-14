import * as React from "react";
import "./index.scss";

interface IProps {
  headerList?: any;
  warnType?: any;
}

const TableHeader = React.memo(
  React.forwardRef((props: IProps, ref) => {
    const { headerList = [], warnType } = props;

    return (
      <table className="table-broder">
        <tbody>
          <tr
            className="supermarket-table-header"
            style={{
              width: `${
                headerList.length > 0
                  ? headerList.length * 100
                  : window.screen.width
              }px`,
            }}
          >
            {headerList.map((item: any, index: any) => {
              return (
                <th
                  key={index}
                  style={{ minWidth: item.width }}
                  className="table-header-title"
                >
                  {item.title}
                </th>
              );
            })}
          </tr>
        </tbody>
      </table>
    );
  })
);

export default TableHeader;
