/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-24 09:59:30
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-04-25 11:01:50
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

	let data = [];
	const apiName = path.substring(1, path.length);
	if (commonApi?.[apiName]) {
		data = commonApi[apiName](query);
	} else {
		data = [];
	}

	res.send({
		status:200,
		msg: "success",
		data,
	});
});

// router.post("/*", (req, res) => {});

module.exports = router;
