import request from "../utils/request";

const getNewlist = (data = {}) => {
  return request({
    url: "/api/user/login",
    method: "POST",
    data,
  });
};

export default {
  getNewlist,
};
