import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const onBookSpaceTodayClick = useCallback(() => {
        navigate("/client-login");
    }, [navigate]);

    return (
        <div
            style={{
                position: "relative",
                backgroundColor: "#181b1e",
                width: "100%",
                height: "1670px",
                overflow: "hidden",
                textAlign: "left",
                fontSize: "24px",
                color: "#fff",
                fontFamily: "Inter",
            }}
        >
            <img
                style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "1440px",
                    height: "964px",
                    objectFit: "cover",
                }}
                alt=""
                src="/rectangle-1@2x.png"
            />
            <div
                style={{
                    position: "absolute",
                    top: "394px",
                    left: "57px",
                    fontSize: "36px",
                    fontWeight: "300",
                    display: "inline-block",
                    width: "590px",
                    height: "81px",
                }}
            >
                <p style={{ margin: "0" }}>{`Aesthetics, affordability and great `}</p>
                <p style={{ margin: "0" }}>locations --we’ve got it all</p>
            </div>
            <b
                style={{
                    position: "absolute",
                    top: "273px",
                    left: "57px",
                    fontSize: "72px",
                    display: "inline-block",
                    width: "756px",
                    height: "70px",
                }}
            >
                Best spaces
            </b>
            <div
                style={{
                    position: "absolute",
                    top: "308px",
                    left: "762px",
                    background:
                        "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), rgba(2, 3, 3, 0.49)",
                    width: "664px",
                    height: "626px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "748px",
                    left: "303px",
                    borderRadius: "101px",
                    background:
                        "linear-gradient(rgba(29, 183, 192, 0.2), rgba(29, 183, 192, 0.2)), rgba(29, 39, 47, 0.17)",
                    width: "364px",
                    height: "129px",
                }}
            />
            <div
                style={{
                    position: "absolute",
                    top: "460px",
                    left: "808px",
                    fontWeight: "300",
                }}
            >
                <p style={{ margin: "0" }}>Looking for where to host</p>
                <p style={{ margin: "0" }}>your convention?</p>
            </div>
            <b
                style={{
                    position: "absolute",
                    top: "403px",
                    left: "808px",
                    fontSize: "36px",
                }}
            >
                Conventions
            </b>
            <div
                style={{
                    position: "absolute",
                    top: "567px",
                    left: "801px",
                    width: "288px",
                    height: "115px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "49.57%",
                        left: "0%",
                        fontWeight: "300",
                    }}
                >
                    <p style={{ margin: "0" }}>Looking for where to host</p>
                    <p style={{ margin: "0" }}>your convention?</p>
                </div>
                <b
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: "0.69%",
                        fontSize: "36px",
                    }}
                >
                    Concerts
                </b>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "756px",
                    left: "801px",
                    width: "288px",
                    height: "97px",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: "49.57%",
                        left: "0%",
                        fontWeight: "300",
                    }}
                >
                    <p style={{ margin: "0" }}>Looking for where to host</p>
                    <p style={{ margin: "0" }}>your convention?</p>
                </div>
                <b
                    style={{
                        position: "absolute",
                        top: "0%",
                        left: "0.69%",
                        fontSize: "36px",
                    }}
                >
                    Weddings
                </b>
            </div>
            <b
                style={{
                    position: "absolute",
                    top: "797px",
                    left: "377px",
                    display: "inline-block",
                    width: "216px",
                    height: "25px",
                    cursor: "pointer",
                }}
                onClick={onBookSpaceTodayClick}
            >
                Book Space Today
            </b>
            <img
                style={{
                    position: "absolute",
                    top: "518px",
                    left: "57px",
                    width: "3px",
                    height: "460px",
                }}
                alt=""
                src="/line-1.svg"
            />
            <img
                style={{
                    position: "absolute",
                    top: "818.32px",
                    left: "59px",
                    width: "240.5px",
                    height: "7.36px",
                }}
                alt=""
                src="/arrow-2.svg"
            />
            <div
                style={{
                    position: "absolute",
                    top: "1049px",
                    left: "140px",
                    width: "354px",
                    height: "169px",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        height: "45.15%",
                        width: "100%",
                        top: "0%",
                        right: "0%",
                        bottom: "54.85%",
                        left: "0%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        objectFit: "cover",
                    }}
                    alt=""
                    src="/rectangle-5@2x.png"
                />
                <div
                    style={{
                        position: "absolute",
                        height: "38.46%",
                        width: "84.71%",
                        top: "61.54%",
                        right: "14.12%",
                        bottom: "0%",
                        left: "1.18%",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "49.57%",
                            left: "0%",
                            fontWeight: "300",
                        }}
                    >
                        <p style={{ margin: "0" }}>Looking for where to host</p>
                        <p style={{ margin: "0" }}>your convention?</p>
                    </div>
                    <b
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "0.69%",
                            fontSize: "36px",
                        }}
                    >
                        Concerts
                    </b>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "1049px",
                    left: "556px",
                    width: "354px",
                    height: "169px",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        height: "45.15%",
                        width: "100%",
                        top: "0%",
                        right: "0%",
                        bottom: "54.85%",
                        left: "0%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        objectFit: "cover",
                    }}
                    alt=""
                    src="/rectangle-51@2x.png"
                />
                <div
                    style={{
                        position: "absolute",
                        height: "38.46%",
                        width: "84.71%",
                        top: "61.54%",
                        right: "14.12%",
                        bottom: "0%",
                        left: "1.18%",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "49.57%",
                            left: "0%",
                            fontWeight: "300",
                        }}
                    >
                        <p style={{ margin: "0" }}>Looking for where to host</p>
                        <p style={{ margin: "0" }}>your convention?</p>
                    </div>
                    <b
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "0.69%",
                            fontSize: "36px",
                        }}
                    >
                        Conventions
                    </b>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "1049px",
                    left: "986px",
                    width: "354px",
                    height: "169px",
                }}
            >
                <img
                    style={{
                        position: "absolute",
                        height: "45.15%",
                        width: "100%",
                        top: "0%",
                        right: "0%",
                        bottom: "54.85%",
                        left: "0%",
                        maxWidth: "100%",
                        overflow: "hidden",
                        maxHeight: "100%",
                        objectFit: "cover",
                    }}
                    alt=""
                    src="/rectangle-52@2x.png"
                />
                <div
                    style={{
                        position: "absolute",
                        height: "38.46%",
                        width: "84.71%",
                        top: "61.54%",
                        right: "14.12%",
                        bottom: "0%",
                        left: "1.18%",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "49.57%",
                            left: "0%",
                            fontWeight: "300",
                        }}
                    >
                        <p style={{ margin: "0" }}>Looking for where to host</p>
                        <p style={{ margin: "0" }}>your convention?</p>
                    </div>
                    <b
                        style={{
                            position: "absolute",
                            top: "0%",
                            left: "0.69%",
                            fontSize: "36px",
                        }}
                    >
                        Weddings
                    </b>
                </div>
            </div>
            <div
                style={{
                    position: "absolute",
                    height: "1.74%",
                    width: "10%",
                    top: "2.81%",
                    right: "85.28%",
                    bottom: "95.45%",
                    left: "4.72%",
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
        </div>
    );
};

export default Home;
