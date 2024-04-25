/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-25 09:31:12
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-04-25 10:28:49
 * @FilePath: /node/low-code-api/module/common.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
const commonApi = {
	getStationName(param) {
		const stationData = [
			{
				id: 1,
				name: "站所1",
			},
			{
				id: 2,
				name: "站所2",
			},
			{
				id: 3,
				name: "站所3",
			},
		];

		const id = param?.id;
		if (id) {
			return stationData.filter(item => {
				return item.id == id;
			});
		} else {
			return [];
		}
	},
};

module.exports = commonApi;
