import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Logic & Pixels - Custom IT Solutions";
export const size = {
  width: 1200,
  height: 630
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0a1628 0%, #1e3a5f 50%, #0056b3 100%)",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(0, 86, 179, 0.3)",
            filter: "blur(60px)"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(59, 130, 246, 0.2)",
            filter: "blur(80px)"
          }}
        />

        {/* Grid pattern overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)",
            backgroundSize: "40px 40px"
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            padding: 60,
            zIndex: 1
          }}
        >
          {/* Logo and brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 32
            }}
          >
            <div
              style={{
                width: 100,
                height: 100,
                background: "linear-gradient(135deg, #3b82f6, #0056b3)",
                borderRadius: 20,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: 28,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
            >
              <svg
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div
              style={{
                fontSize: 72,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-2px"
              }}
            >
              Logic & Pixels
            </div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: "#94a3b8",
              marginTop: 16,
              textAlign: "center",
              maxWidth: 900
            }}
          >
            Custom IT Solutions for Your Business
          </div>

          {/* Services badges */}
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 40
            }}
          >
            {["Web Development", "Thesis Systems", "Enterprise Apps"].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: 50,
                    padding: "12px 28px",
                    fontSize: 20,
                    color: "#e2e8f0",
                    backdropFilter: "blur(10px)"
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>

          {/* Website URL */}
          <div
            style={{
              position: "absolute",
              bottom: 40,
              fontSize: 22,
              color: "#64748b",
              display: "flex",
              alignItems: "center",
              gap: 8
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#64748b"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
            logicandpixels.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
