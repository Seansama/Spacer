import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Spaces = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onExploreSpacesTextClick = useCallback(() => {
    navigate("/admin-login");
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
        fontSize: "14px",
        color: "#fff",
        fontFamily: "'Jim Nightshade'",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "96px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "814px",
          left: "1028px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "814px",
          left: "558px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "814px",
          left: "96px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "558px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "200px",
          left: "1020px",
          width: "348px",
          height: "409px",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            top: "0%",
            right: "0%",
            bottom: "0%",
            left: "0%",
          }}
        >
          <div
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              top: "0%",
              right: "0%",
              bottom: "0%",
              left: "0%",
              backgroundColor: "#d9d9d9",
            }}
          />
        </div>
        <img
          style={{
            position: "absolute",
            height: "52.16%",
            width: "82.54%",
            top: "11.57%",
            right: "6.61%",
            bottom: "36.27%",
            left: "10.85%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
            objectFit: "cover",
          }}
          alt=""
          src="/rectangle-7@2x.png"
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "36.77%",
            top: "5.88%",
            left: "10.85%",
            color: "#262a2d",
            display: "inline-block",
          }}
        >
          KENYA NATIONAL THEATRE
        </div>
        <div
          style={{
            position: "absolute",
            height: "7.82%",
            width: "33.91%",
            top: "70.9%",
            left: "10.92%",
            color: "#151516",
            display: "inline-block",
          }}
        >
          Client: Wayne Oyoo
        </div>
        <div
          style={{
            position: "absolute",
            height: "5.88%",
            width: "41.01%",
            top: "79.41%",
            right: "29.37%",
            bottom: "14.71%",
            left: "29.63%",
            backgroundColor: "#1d9469",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "5.87%",
            width: "22.13%",
            top: "87.04%",
            right: "38.22%",
            bottom: "7.09%",
            left: "39.66%",
            backgroundColor: "#be3416",
          }}
        />
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "80.44%",
            left: "44.83%",
            display: "inline-block",
          }}
        >
          BOOKED
        </div>
        <div
          style={{
            position: "absolute",
            height: "3.92%",
            width: "20.11%",
            top: "88.07%",
            left: "44.8%",
            display: "inline-block",
          }}
        >
          DELETE
        </div>
        <div
          style={{
            position: "absolute",
            height: "4.71%",
            width: "28.04%",
            top: "65.1%",
            left: "10.32%",
            fontSize: "20px",
            fontFamily: "Inter",
            color: "#367a62",
            display: "inline-block",
          }}
        >
          5000 ksh
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: "72px",
          left: "96px",
          width: "1200px",
          height: "29px",
          fontSize: "20px",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "12%",
            top: "0%",
            right: "88%",
            bottom: "0%",
            left: "0%",
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
            height: "82.76%",
            width: "23.83%",
            top: "6.9%",
            right: "42.33%",
            bottom: "10.34%",
            left: "33.83%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "44px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "58px",
              height: "24px",
              flexShrink: "0",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0%",
                left: "0%",
                cursor: "pointer",
              }}
              onClick={onHomeTextClick}
            >
              Home
            </div>
          </div>
          <div
            style={{
              position: "relative",
              width: "58px",
              height: "24px",
              flexShrink: "0",
            }}
          >
            <b style={{ position: "absolute", top: "0%", left: "0%" }}>
              Spaces
            </b>
          </div>
          <div
            style={{
              position: "relative",
              width: "58px",
              height: "24px",
              flexShrink: "0",
            }}
          >
            <div style={{ position: "absolute", top: "0%", left: "0%" }}>
              Contact
            </div>
          </div>
        </div>
        <b
          style={{
            position: "absolute",
            top: "6.9%",
            left: "87.42%",
            color: "#a4e2e5",
            cursor: "pointer",
          }}
          onClick={onExploreSpacesTextClick}
        >
          Lease your Space
        </b>
        <img
          style={{
            position: "absolute",
            height: "25.39%",
            width: "2.04%",
            top: "35.58%",
            right: "13.21%",
            bottom: "39.03%",
            left: "84.75%",
            maxWidth: "100%",
            overflow: "hidden",
            maxHeight: "100%",
          }}
          alt=""
          src="/arrow-1.svg"
        />
      </div>
    </div>
  );
};

export default Spaces;
