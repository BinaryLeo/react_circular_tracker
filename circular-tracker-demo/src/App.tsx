import { CircularTracker } from "../../src/components/CircularTracker";

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
    </div>
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
      <p
        style={{
          padding: "5px 10px",
          borderRadius: "20px",
          backgroundColor: "#FF5733",
          color: "#fff",
          marginBottom: "-5px",
        }}
      >
        Inverted
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
    </div>
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
        backgroundColor: "#1E1E1E",
      }}
    >
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
    </div>
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
    </div>
  </div>
);

export default App;
