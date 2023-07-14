import * as React from "react";
import "./index.scss";

interface IProps {
  infoList?: any;
}

const TableInfoView = React.memo(
  React.forwardRef((props: IProps, ref) => {
    const { infoList = [] } = props;
    return (
      <div>
        <div className="supermarket-warning-info">
          {infoList.map((item: any, index: any) => {
            return (
              <div key={`${index}`} className="warning-info-text">
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  })
);

export default TableInfoView;
