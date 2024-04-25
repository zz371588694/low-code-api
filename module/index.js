/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-24 09:59:30
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-04-25 14:59:13
 * @FilePath: /node/low-code-api/module/index.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
const express = require("express");
const commonApi = require("./common");

const router = express.Router();

router.get("/*", (req, res) => {
	const { path, query } = req;

	let returnRes = {
		status: 200,
		msg: "success",
		data: [],
	};
	const apiName = path.substring(1, path.length);

	if (apiName.length === 0) {
		returnRes.status = 404;
		returnRes.msg = "error";
		returnRes.data = [];
	} else if (commonApi?.[apiName]) {
		data = commonApi[apiName](query);
		returnRes.data = data;
	} else {
		returnRes.data = [];
	}
	res.send(returnRes);
});

// router.post("/*", (req, res) => {});

module.exports = router;
