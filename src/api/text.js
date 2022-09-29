import request from "../utils/request";

// http://119.45.133.128:8089/api/sysUser/image

const getimage = () => {
  return request({
    url: "/api/sysUser/image",
    method: "POST",
    responseType: 'blob',
  });
};

const getNewlist = (data) => {
  return request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
};

export default {
  getNewlist,
  getimage,
};
