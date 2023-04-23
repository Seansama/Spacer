import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const AdminSignup = () => {
  const navigate = useNavigate();

  const onRectangle3Click = useCallback(() => {
    navigate("/admin-login");
  }, [navigate]);

  const onAlreadyHaveAnClick = useCallback(() => {
    navigate("/admin-login");
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
        Create An Administrator Account
      </div>
      <div
        style={{
          position: "absolute",
          top: "278px",
          left: "661px",
          fontWeight: "600",
          display: "inline-block",
          width: "84px",
          height: "15px",
        }}
      >
        Username
      </div>
      <div
        style={{
          position: "absolute",
          top: "391px",
          left: "661px",
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
          top: "505px",
          left: "661px",
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
          top: "307px",
          left: "661px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          width: "610px",
          height: "44px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "420px",
          left: "661px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          width: "610px",
          height: "45px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "533px",
          left: "661px",
          borderRadius: "8px",
          backgroundColor: "#d9d9d9",
          width: "610px",
          height: "45px",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "618px",
          left: "661px",
          borderRadius: "8px",
          backgroundColor: "#75a2a5",
          width: "610px",
          height: "45px",
          cursor: "pointer",
        }}
        onClick={onRectangle3Click}
      />
      <div
        style={{
          position: "absolute",
          top: "632px",
          left: "900px",
          fontWeight: "600",
          display: "inline-block",
          width: "122px",
          height: "17px",
        }}
      >
        Create Account
      </div>
      <div
        style={{
          position: "absolute",
          top: "702px",
          left: "663px",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={onAlreadyHaveAnClick}
      >
        <span>{`Already have an account? `}</span>
        <span style={{ color: "#a4e2e5" }}>Login</span>
      </div>
    </div>
  );
};

export default AdminSignup;
