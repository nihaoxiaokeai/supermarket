import * as React from "react";
import { Button, Toast } from "antd-mobile";
import * as api from "../../services/supermarketWarning";
import * as qs from "query-string";
import { getTableColunms, getWarningTextInfo } from "./config";
import TableInfoView from "./components/TableInfo";
import TableView from "./components/TableList";
import "./index.scss";

interface IProps {}

interface IState {
  warningInfo: any;
  appHost: string;
}

class SupermarketPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      warningInfo: {},
      appHost: "",
    };
  }

  // 获取警告信息接口
  getStockWarningInfo = (params: any) => {
    Toast.loading("加载中....");
    api
      .getSupermarketWarningInfo(params)
      .then((rs: any) => {
        Toast.hide();
        if (rs.errCode === undefined) {
          // 成功
          const { pageTitle, redirectUri } = rs;
          document.title = pageTitle;
          this.setState({
            appHost: redirectUri,
            warningInfo: rs,
          });
        } else {
          // 异常接口
          Toast.info(rs.errMsg, 1);
        }
      })
      .catch((err) => {
        Toast.hide();
      });
  };

  onButtonClick = () => {
    const { appHost } = this.state;
    if (appHost === "" || appHost === null || appHost === undefined) {
      return;
    }
    const params = qs.parse(window.location.search);
    const { msgid } = params;

    const token = localStorage.getItem("token");
    const digest = localStorage.getItem("digest");
    const url = `${appHost}/negativeProfitWarnController/exportExcell?msgid=${msgid}&token=${token}&digest=${digest}`;
    window.open(url);
  };

  componentDidMount() {
    const params = qs.parse(window.location.search);
    const { msgid } = params;
    this.getStockWarningInfo({ msgid });
  }

  render() {
    const { warningInfo = {}, appHost } = this.state;
    return (
      <div className="supermarket-waring-root">
        {/* 信息 */}
        <div>
          <div>
            <div className="supermarket-warning-title">
              {window.document.title}
            </div>
            <TableInfoView infoList={getWarningTextInfo(warningInfo.brief)} />
          </div>

          {/* 列表 */}
          <TableView
            dataSource={warningInfo.negativeProfitWarnDetails || []}
            warnType={warningInfo.warnType}
            headerList={getTableColunms(warningInfo.warnType)}
          />
          <div className="table-footer" />
        </div>
        {/* 导出按钮 */}
        {appHost && (
          <div className="supermarket-waring-button">
            <Button
              className="button-text"
              style={{
                backgroundColor: "#0188ff",
              }}
              type="primary"
              //   disabled={getButtonDisabled()}
              onClick={this.onButtonClick}
            >
              导出excel
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default SupermarketPage;
