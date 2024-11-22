import React from "react";
import { CircularTracker } from "../../src/components/CircularTracker";

// custom svg icon
const ArrowIcon = ({
  width = 40,
  height = 40,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 10 12"
      fill="none"
    >
      <path
        d="M9.85378 5.35448C9.80735 5.40097 9.7522 5.43785 9.6915 5.46301C9.6308 5.48817 9.56574 5.50113 9.50003 5.50113C9.43433 5.50113 9.36926 5.48817 9.30856 5.46301C9.24786 5.43785 9.19272 5.40097 9.14628 5.35448L5.50003 1.70761V11.5007C5.50003 11.6333 5.44736 11.7605 5.35359 11.8543C5.25982 11.9481 5.13264 12.0007 5.00003 12.0007C4.86743 12.0007 4.74025 11.9481 4.64648 11.8543C4.55271 11.7605 4.50003 11.6333 4.50003 11.5007V1.70761L0.853784 5.35448C0.759964 5.4483 0.632716 5.50101 0.500034 5.50101C0.367352 5.50101 0.240104 5.4483 0.146284 5.35448C0.0524635 5.26066 -0.00024414 5.13341 -0.000244141 5.00073C-0.000244142 4.86805 0.0524635 4.7408 0.146284 4.64698L4.64628 0.146983C4.69272 0.100495 4.74786 0.0636151 4.80856 0.038453C4.86926 0.0132908 4.93433 0.000339508 5.00003 0.000339508C5.06574 0.000339508 5.1308 0.0132908 5.1915 0.038453C5.2522 0.0636151 5.30735 0.100495 5.35378 0.146983L9.85378 4.64698C9.90027 4.69342 9.93715 4.74856 9.96231 4.80926C9.98748 4.86996 10.0004 4.93503 10.0004 5.00073C10.0004 5.06644 9.98748 5.1315 9.96231 5.1922C9.93715 5.2529 9.90027 5.30805 9.85378 5.35448Z"
        fill="#047857"
      />
    </svg>
  );
};

const Container: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    }}
  >
    {children}
  </div>
);

const App = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    
    
    <Container>
    <p
      style={{
        padding: "5px 10px",
        borderRadius: "20px",
        backgroundColor: "#309E3A",
        color: "#fff",
        marginBottom: "-5px",
      }}
    >
      Default
    </p>
    <CircularTracker
      progress={93}
      isPercentage={true}
      ballStrokeWidth={14}
      fontSize="36"
      fontWeight={"bold"}
      className="default-tracker"
      gradient={[
        { stop: 0, color: "#059669" }, // Emerald-600
        { stop: 1, color: "#047857" }, // Emerald-700
      ]}
      centerBackground="rgba(16, 185, 129, 0.1)"
      textColor="#059669"
    />
    </Container>
    <Container>
      <p
        style={{
          padding: "5px 10px",
          borderRadius: "20px",
          backgroundColor: "#047857",
          color: "#fff",
          marginBottom: "-5px",
        }}
      >
        Icon
      </p>

      <CircularTracker
        progress={93}
        isPercentage={true}
        hideBall
        strokeWidth={8}
        fontSize="36"
        fontWeight={"bold"}
        className="default-tracker"
        gradient={[
          { stop: 0, color: "#059669" }, // Emerald-600
          { stop: 1, color: "#047857" }, // Emerald-700
        ]}
        roundedBorders
        icon={<ArrowIcon height={80} width={80} />}
      />
    </Container>
        <Container>
          <p
            style={{
              padding: "5px 10px",
              borderRadius: "20px",
              backgroundColor: "#FF5733",
              color: "#fff",
              marginBottom: "-5px",
            }}
          >
            Anti-clockwise
          </p>
          <CircularTracker
            progress={-60}
            total={100}
            isPercentage={true}
            strokeWidth={4}
            ballStrokeWidth={12}
            transitionDuration={0.5}
            transitionTimingFunction="ease"
            background="rgba(255, 87, 51, 0.2)"
            hideBall={false}
            hideValue={false}
            gradient={[
              { stop: 0, color: "#E11D48" }, // Rose-600
              { stop: 1, color: "#BE123C" }, // Rose-700
            ]}
            subtitle=""
            style={{}}
            className="inverted-tracker"
            suffix="pts"
            centerBackground="transparent"
            fontWeight="bold"
            fontSize="24px"
            inverted={true}
            textColor="#FF5733"
          />
        </Container>
            <Container>
              <p
                style={{
                  padding: "5px 10px",
                  borderRadius: "20px",
                  backgroundColor: "#FFC300",
                  color: "#1E1E1E",
                  marginBottom: "-5px",
                }}
              >
                Loading
              </p>
              <CircularTracker
                progress={60}
                total={100}
                isPercentage={true}
                strokeWidth={4}
                ballStrokeWidth={12}
                transitionDuration={0.5}
                transitionTimingFunction="ease"
                background="#eef2f5"
                hideBall={false}
                hideValue={false}
                gradient={[
                  { stop: 0, color: "#FBBF24" }, // Amber-400
                  { stop: 1, color: "#F59E0B" }, // Amber-500
                ]}
                subtitle="Loading..."
                style={{}}
                className="loading-tracker"
                suffix="%"
                centerBackground="transparent"
                fontWeight="bold"
                fontSize="24px"
                textColor="#FFC300"
              /> 
            </Container>
    
    
     <Container>
       <p
         style={{
           padding: "5px 10px",
           borderRadius: "20px",
           backgroundColor: "#8E44AD",
           color: "#fff",
           marginBottom: "-5px",
         }}
       >
         Steps
       </p>
       <CircularTracker
         progress={3}
         total={5}
         isPercentage={false}
         strokeWidth={4}
         ballStrokeWidth={12}
         transitionDuration={0.5}
         transitionTimingFunction="ease"
         background="#eef2f5"
         hideBall={false}
         hideValue={false}
         gradient={[
           { stop: 0, color: "#7C3AED" }, // Violet-600
           { stop: 1, color: "#6D28D9" }, // Violet-700
         ]}
         subtitle="STEPS"
         style={{}}
         className="steps-tracker"
         suffix=""
         centerBackground="transparent"
         fontWeight="bold"
         fontSize="24px"
         textColor="#8E44AD"
       />
     </Container>
   
  
   
  </div>
);

export default App;
