import "./UserInfo.css";

export const UserInfo = ({ avatar, children }) => {
  return (
    <div className="acordeon">
      <button>{avatar}</button>
      <div className="acordeon-body">{children}</div>
    </div>
  );
};
