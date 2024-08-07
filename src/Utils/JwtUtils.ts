import { sign } from "jsonwebtoken";
export const GenerateToken = ({ properties }: any) => {
  return sign({ properties }, "mysecretkey");
};
