/*
 * @Author: zhuzhan && zz.209218@sieyuan.com
 * @Date: 2024-04-24 09:31:09
 * @LastEditors: zhuzhan && zz.209218@sieyuan.com
 * @LastEditTime: 2024-04-25 11:05:41
 * @FilePath: /node/low-code-api/index.js
 * @Description:
 *
 * Copyright (c) 2024 by zhuzhan, All Rights Reserved.
 */
const express = require("express");
const router = require("./module/index");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(router);

app.listen(9999, () => {
	console.log("low-code-api running at http://127.0.0.1:9999");
});
