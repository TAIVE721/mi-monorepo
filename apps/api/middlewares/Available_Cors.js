import cors from "cors";

const Default_C = ["http://localhost:1234"];

export const A_cors = ({ Pri_c = Default_C } = {}) =>
  cors({
    origin: (origin, callback) => {
      if (Pri_c.includes(origin)) {
        return callback(null, true);
      }
      return callback(null, true);
    },
  });
