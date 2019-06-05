const target = '';
const secure = false;

const server = {
  target,
  secure
};

export default {
  '/api/*': server
};
