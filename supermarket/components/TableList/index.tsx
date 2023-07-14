import * as React from "react";
import TableHeader from "../TableHeader";
import "./index.scss";
interface IProps {
  headerList?: any;
  dataSource?: any;
  warnType?: any;
}

const TableView = React.memo(
  React.forwardRef((props: IProps, ref) => {
    const { headerList = [], dataSource = [], warnType } = props;
    return (
      <div
        className="supermarket-table"
        style={{
          maxWidth: window.screen.width,
        }}
      >
        {/* header */}
        <TableHeader headerList={headerList} warnType={warnType} />

        {/* cell */}
        <div
          className="table-cell"
          style={{
            height:
              warnType === "2"
                ? window.screen.height - 196
                : window.screen.height - 236,
            maxHeight:
              warnType === "2"
                ? window.screen.height - 196
                : window.screen.height - 236,
            width: `${
              headerList.length > 0
                ? headerList.length * 100
                : window.screen.width
            }px`,
          }}
        >
          <table className="table-broder">
            <tbody>
              {dataSource.map((rowData: any, index: any) => {
                if (warnType === "1") {
                  return (
                    <tr key={index} className="table-tr">
                      <td className="table-cell-text">{rowData.supp_name}</td>
                      <td className="table-cell-text">
                        {rowData.bussiness_name}
                      </td>
                      <td className="table-cell-text">{rowData.item_spec}</td>
                      <td className="table-cell-text">{rowData.item_bacode}</td>
                      <td className="table-cell-text">{rowData.item_name}</td>
                      <td className="table-cell-text">
                        {fmoney(rowData.natPaid_amt_t, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.item_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.sale_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.service_amt, 2)}
                      </td>
                    </tr>
                  );
                } else if (warnType === "2") {
                  return (
                    <tr key={index} className="table-tr">
                      <td className="table-cell-text">{rowData.plant_id}</td>
                      <td className="table-cell-text">{rowData.plan_name}</td>
                      <td className="table-cell-text">{rowData.supp_name}</td>
                      <td className="table-cell-text">
                        {rowData.bussiness_name}
                      </td>
                      <td className="table-cell-text">{rowData.item_spec}</td>
                      <td className="table-cell-text">{rowData.item_name}</td>
                      <td className="table-cell-text">
                        {fmoney(rowData.natPaid_amt_t, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.item_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.sale_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.service_amt, 2)}
                      </td>
                    </tr>
                  );
                } else if (warnType === "3") {
                  return (
                    <tr key={index} className="table-tr">
                      <td className="table-cell-text">{rowData.plant_id}</td>
                      <td className="table-cell-text">{rowData.plan_name}</td>
                      <td className="table-cell-text">{rowData.supp_name}</td>
                      <td className="table-cell-text">
                        {rowData.bussiness_name}
                      </td>
                      <td className="table-cell-text">{rowData.item_spec}</td>
                      <td className="table-cell-text">{rowData.item_bacode}</td>
                      <td className="table-cell-text">{rowData.item_name}</td>
                      <td className="table-cell-text">
                        {fmoney(rowData.natPaid_amt_t, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.item_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.sale_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.service_amt, 2)}
                      </td>
                    </tr>
                  );
                } else if (warnType === "4") {
                  return (
                    <tr key={index} className="table-tr">
                      <td className="table-cell-text">{rowData.supp_name}</td>
                      <td className="table-cell-text">
                        {rowData.bussiness_name}
                      </td>
                      <td className="table-cell-text">{rowData.item_spec}</td>
                      <td className="table-cell-text">{rowData.item_bacode}</td>
                      <td className="table-cell-text">{rowData.item_name}</td>
                      <td className="table-cell-text">
                        {fmoney(rowData.natPaid_amt_t, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.item_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.sale_amt, 2)}
                      </td>
                      <td className="table-cell-text">
                        {fmoney(rowData.service_amt, 2)}
                      </td>
                    </tr>
                  );
                } else {
                  return null;
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  })
);

// 格式化
function fmoney(s: any, n: any) {
  n = n > 0 && n <= 20 ? n : 2;

  let symbol = "";
  const minusIndex = `${s}`.search("-");
  if (minusIndex !== -1) {
    symbol = "-";
    s = `${s}`.replace("-", "");
  }

  s = parseFloat((s + "").replace(/[^\d\.-]/g, "")).toFixed(n) + "";
  let l = s.split(".")[0].split("").reverse(),
    r = s.split(".")[1];
  let t = "";
  for (let i = 0; i < l.length; i++) {
    t += l[i] + ((i + 1) % 3 == 0 && i + 1 != l.length ? "," : "");
  }
  let money = t.split("").reverse().join("") + "." + r;
  return `${symbol}${money}`;
}

export default TableView;
