// 列表标题
export function getTableColunms(warnType: any) {
  if (warnType === "1") {
    // 门店经理
    return [
      { title: "供应商", width: "100px" },
      { title: "经营小类", width: "100px" },
      { title: "规格", width: "100px" },
      { title: "条形码", width: "100px" },
      { title: "商品名称", width: "100px" },
      { title: "实收金额", width: "100px" },
      { title: "创利额", width: "100px" },
      { title: "销售创利额", width: "100px" },
      { title: "服务创利额", width: "100px" },
    ];
  } else if (warnType === "2") {
    return [
      { title: "门店编码", width: "100px" },
      { title: "门店名称", width: "100px" },
      { title: "供应商", width: "100px" },
      { title: "经营小类", width: "100px" },
      { title: "规格", width: "100px" },
      { title: "商品名称", width: "100px" },
      { title: "实收金额", width: "100px" },
      { title: "创利额", width: "100px" },
      { title: "销售创利额", width: "100px" },
      { title: "服务创利额", width: "100px" },
    ];
  } else if (warnType === "3") {
    return [
      { title: "门店编码", width: "100px" },
      { title: "门店名称", width: "100px" },
      { title: "供应商", width: "100px" },
      { title: "经营小类", width: "100px" },
      { title: "规格", width: "100px" },
      { title: "条形码", width: "100px" },
      { title: "商品名称", width: "100px" },
      { title: "实收金额", width: "100px" },
      { title: "创利额", width: "100px" },
      { title: "销售创利额", width: "100px" },
      { title: "服务创利额", width: "100px" },
    ];
  } else if (warnType === "4") {
    return [
      { title: "供应商", width: "100px" },
      { title: "经营小类", width: "100px" },
      { title: "规格", width: "100px" },
      { title: "条形码", width: "100px" },
      { title: "商品名称", width: "100px" },
      { title: "实收金额", width: "100px" },
      { title: "创利额", width: "100px" },
      { title: "销售创利额", width: "100px" },
      { title: "服务创利额", width: "100px" },
    ];
  } else {
    return [];
  }
}

// 次级标题
export function getWarningTextInfo(brief: string) {
  if (brief === undefined || brief == null) {
    return [];
  }

  return brief.split("\n");
}
