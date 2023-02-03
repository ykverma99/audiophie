import { jwtVerify, SignJWT } from "jose";
export default isAuthValid = async (token) => {
  const secret = process.env.JWT_TOKEN;

  if (!secret || secret.length === 0) {
    throw new Error("The enviorment variable JWT_SECRET_KEY is not set");
  }

  try {
    const verified = await jwtVerify(token, new TextEncoder().encode(secret));
    return verified.payload;
  } catch (error) {
    throw new Error("Your token has expired");
  }
};
