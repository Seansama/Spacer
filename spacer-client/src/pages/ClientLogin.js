import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const ClientLogin = () => {
  const navigate = useNavigate();

  const onRectangle2Click = useCallback(() => {
    navigate("/my-spaces");
  }, [navigate]);

  const onDontHaveAnClick = useCallback(() => {
    navigate("/client-signup");
  }, [navigate]);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#181b1e",
        width: "100%",
        height: "952px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "16px",
        color: "#fff",
        fontFamily: "Inter",
      }}
    >
      <img
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "607px",
          height: "952px",
          objectFit: "cover",
        }}
        alt=""
        src="/rectangle-9@2x.png"
      />
      <div
        style={{
          position: "absolute",
          top: "126px",
          left: "661px",
          fontSize: "36px",
          fontWeight: "600",
        }}
      >
        Login
      </div>
      <div
        style={{
          position: "absolute",
          top: "311px",
          left: "647px",
          fontWeight: "600",
          display: "inline-block",
          width: "42px",
          height: "15px",
        }}
      >
        Email
      </div>
      <div
        style={{
          position: "absolute",
          top: "425px",
          left: "647px",
          fontWeight: "600",
          display: "inline-block",
          width: "82px",
          height: "15px",
        }}
      >
        Password
      </div>
      <div
        style={{
          position: "absolute",
          top: "50px",
          left: "71px",
          width: "144px",
          height: "29px",
          fontSize: "24px",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "65.97%",
            top: "0%",
            left: "34.03%",
            display: "inline-block",
          }}
        >
          Spacer
        </div>
        <img
          style={{
            position: "absolute",
            height: "100%",
            width: "22.22%",
            top: "0%",
            right: "77.78%",
            bottom: "0%",
            left: "0%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/ellipse-1.svg"
        />
      </div>
      <div
        style={{
          position: "absolute",
          top: "340px",
          left: "647px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          width: "610px",
          height: "45px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "453px",
          left: "647px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          width: "610px",
          height: "45px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "538px",
          left: "647px",
          borderRadius: "8px",
          backgroundColor: "#75a2a5",
          width: "610px",
          height: "45px",
          cursor: "pointer",
        }}
        onClick={onRectangle2Click}
      />
      <div
        style={{
          position: "absolute",
          top: "552px",
          left: "909px",
          fontWeight: "600",
          display: "inline-block",
          width: "122px",
          height: "17px",
        }}
      >
        Login
      </div>
      <div
        style={{
          position: "absolute",
          top: "622px",
          left: "649px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={onDontHaveAnClick}
      >
        <span>{`Don’t have an account? `}</span>
        <span style={{ color: "#a4e2e5" }}>Signup</span>
      </div>
    </div>
  );
};

export default ClientLogin;
