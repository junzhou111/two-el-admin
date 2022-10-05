import request from "../utils/request";

// 请求token
// http://119.45.133.128:8089/api/sysUser/image
const getNewlist = (data) => {
  return request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
};
// 请求验证码
const getimage = () => {
  return request({
    url: "/api/sysUser/image",
    method: "POST",
    responseType: "blob",
  });
};
// 请求侧边栏数据
// http://119.45.133.128:8089/api/sysUser/getPermissionList
const getsidebar = () => {
  return request({
    url: "/api/sysUser/getPermissionList",
    method: "GET",
  });
};

export default {
  getNewlist,
  getimage,
  getsidebar,
};
