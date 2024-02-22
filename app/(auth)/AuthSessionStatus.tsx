const AuthSessionStatus = ({ status, ...props }: any) => (
  <>{status && <div {...props}>{status}</div>}</>
);

export default AuthSessionStatus;
